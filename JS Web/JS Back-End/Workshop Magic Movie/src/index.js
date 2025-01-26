import express from 'express';
import handlebars from 'express-handlebars';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import Movie from './models/Movie.js';
import Cast from './models/Cast.js';
import authService from './services/authService.js'
import 'dotenv/config';
import { authMiddleware, isAuth, notAuth } from './middlewares/authMiddleware.js';
import { getErrorMessage } from './utils/errorUtils.js';

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use('/static', express.static('static'));
app.use(cookieParser());
app.use(authMiddleware);

app.engine('hbs', handlebars.engine({
    extname: 'hbs',
    helpers: {
        eq: (a, b) => a === b
    }
}));

app.set('view engine', 'hbs');
app.set('views', 'src/views'); // Tell Express to look for views in src/views

try {
    const url = process.env.DB_URL;
    await mongoose.connect(url);
    console.log('Connected to DB!');
} catch (err) {
    console.log(`Failed to connect to DB! Raw error message: ${err.message}`);
}

app.get('/', async (req, res) => {
    let movies = [];

    try {
        movies = await Movie.find().lean(); // lean is needed to convert it to array of objects so the handlebar can recognize it, lean must be used after it is awaited!
    } catch (err) {
        console.log(err);
    }

    return res.render('home', { movies });
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/create/movie', isAuth, (req, res) => {
    res.render('create-movie');
});

app.post('/create/movie', isAuth, async (req, res) => {
    const movieData = req.body;
    const ownerId = req.user?._id;
    try {
        await Movie.create({ ...movieData, owner: ownerId });
        return res.redirect('/');
    } catch (err) {
        const errorMessage = getErrorMessage(err);
        return res.render('create-movie', { error: errorMessage, movie: movieData });
    }
});

app.get('/movies/:movieId/details', async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.movieId).populate('cast.actor').lean(); // the populate is needed here to find all actors which are related to the movie
        const ratingArray = new Array(movie.rating).fill(0);

        const isOwner = movie.owner.toString() === req.user?._id;

        return res.render('details', { movie, ratingArray, isOwner });
    } catch (err) {
        console.log(err);
        return res.render('404', { error: 'Something went wrong! Please try again later!' });
    }
});

app.get('/search', async (req, res) => {    // initial load of search page
    try {
        const movies = await Movie.find().lean();
        return res.render('search', { movies });
    } catch (err) {
        console.log(err);
        return res.render('404', { error: 'Something went wrong! Please try again later!' });
    }
});

app.get('/search/movie', async (req, res) => {  // actual search
    try {
        const filter = req.query;
        const moviesQuery = Movie.find();

        if (filter.search) {
            moviesQuery.find({ title: { $regex: filter.search, $options: 'i' } });
        }

        if (filter.genre) {
            moviesQuery.find({ genre: filter.genre.toLowerCase() });
        }

        if (filter.year) {
            moviesQuery.find({ year: filter.year });
        }

        const movies = await moviesQuery.lean();

        return res.render('search', { movies });
    } catch (err) {
        console.log(err);
        return res.render('404', { error: 'Something went wrong! Please try again later!' });
    }
});

app.get('/create/cast', isAuth, (req, res) => {
    res.render('create-cast');
});

app.post('/create/cast', isAuth, async (req, res) => {
    const movie = req.body;
    try {
        await Cast.create(movie);
        return res.redirect('/');
    } catch (err) {
        const errorMessage = getErrorMessage(err);
        return res.render('create-cast', { error: errorMessage, movie });
    }
});

app.get('/movies/:movieId/addCast', isAuth, async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.movieId).populate('cast.actor').lean();

        const castIds = (movie.cast || []).map(castItem => castItem.actor?._id);

        const casts = await Cast.find({ _id: { $nin: castIds } }).lean();

        return res.render('cast-attach', { movie, casts });
    } catch (err) {
        console.log(err);
        return res.render('404', { error: 'Something went wrong! Please try again later!' });
    }
});

app.post('/movies/:movieId/addCast', isAuth, async (req, res) => {
    const movieId = req.params.movieId;
    const castId = req.body.cast;
    const character = req.body.character;

    try {

        await Movie.findByIdAndUpdate(movieId, { $push: { cast: { actor: castId, character } } }, { runValidators: true }); // runValidators are necessary here or mongoose wont validate subdocument fields (character)
        return res.redirect(`/movies/${movieId}/details`);

    } catch (err) {
        const errorMessage = getErrorMessage(err);

        const movie = await Movie.findById(req.params.movieId).populate('cast.actor').lean();
        const castIds = (movie.cast || []).map(castItem => castItem.actor?._id);
        const casts = await Cast.find({ _id: { $nin: castIds } }).lean();

        return res.render('cast-attach', { error: errorMessage, movie, casts, character });
    }
});

app.get('/register', notAuth, (req, res) => {
    res.render('register');
});

app.post('/register', notAuth, async (req, res) => {
    const { email, password, rePassword } = req.body;

    try {
        if (password !== rePassword) {
            throw new Error('Passwords does not match!');
        }
        await authService.register(email, password);

    } catch (err) {
        const errorMessage = getErrorMessage(err);
        return res.render('register', { error: errorMessage, email });
    }

    try {
        const token = await authService.login(email, password);

        res.cookie('auth', token, { httpOnly: true });
        res.redirect('/');
    }
    catch (err) {
        return res.redirect('/login');
    }
});

app.get('/login', notAuth, (req, res) => {
    res.render('login');
});

app.post('/login', notAuth, async (req, res) => {
    const { email, password } = req.body;

    try {

        if (email === '' || password === '') {
            throw new Error('Invalid email or password!');
        }

        const token = await authService.login(email, password);
        res.cookie('auth', token, { httpOnly: true });
        return res.redirect('/');

    } catch (err) {
        const errorMessage = getErrorMessage(err);
        return res.render('login', { error: errorMessage, email });
    }
});

app.get('/logout', (req, res) => {
    res.clearCookie('auth');

    res.redirect('/');
});

app.get('/movies/:movieId/edit', isAuth, async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.movieId).lean();
        return res.render('edit', { movie });
    } catch (err) {
        console.log(err);
        return res.render('404', { error: 'Something went wrong! Please try again later!' });
    }
});

app.post('/movies/:movieId/edit', isAuth, async (req, res) => {
    const movieId = req.params.movieId;
    const movie = req.body;

    try {

        const findMovie = await Movie.findById(movieId).lean();

        if (findMovie.owner?.toString() !== req.user?._id) {
            throw new Error('You cannot delete this movie!');
        }

        await Movie.findByIdAndUpdate(movieId, movie, { runValidators: true });
        return res.redirect(`/movies/${movieId}/details`);
    }
    catch (err) {
        const errorMessage = getErrorMessage(err);
        return res.render('edit', { error: errorMessage, movie });
    }
});

app.get('/movies/:movieId/delete', isAuth, async (req, res) => {

    const movieId = req.params.movieId;

    try {

        const movie = await Movie.findById(movieId).lean();

        if (movie.owner?.toString() !== req.user?._id) {
            throw new Error('You cannot delete this movie!');
        }

        await Movie.findByIdAndDelete(req.params.movieId);
        res.redirect('/');
    } catch (err) {
        console.log(err);
        return res.render('404', { error: 'Something went wrong! Please try again later!' });
    }
});

app.all('*', (req, res) => {
    res.render('404');
});

const port = 5000;
app.listen(port, () => console.log(`Server is listening on http://localhost:${port}`));