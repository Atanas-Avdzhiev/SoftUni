import { Router } from 'express';
import movieService from '../services/movieService.js';
import { isAuth } from '../middlewares/authMiddleware.js';
import { getErrorMessage } from '../utils/errorUtils.js';
import castService from '../services/castService.js';

const router = Router();

router.get('/create/movie', isAuth, (req, res) => {
    res.render('create-movie');
});

router.post('/create/movie', isAuth, async (req, res) => {
    const movieData = req.body;
    const ownerId = req.user?._id;
    try {
        await movieService.create(movieData, ownerId);
        return res.redirect('/');
    } catch (err) {
        const errorMessage = getErrorMessage(err);
        return res.render('create-movie', { error: errorMessage, movie: movieData });
    }
});

router.get('/movies/:movieId/details', async (req, res) => {
    try {
        const movie = await movieService.getOne(req.params.movieId).lean(); // the populate is needed here to find all actors which are related to the movie
        const ratingArray = new Array(movie.rating).fill(0);

        const isOwner = movie.owner.toString() === req.user?._id;

        return res.render('details', { movie, ratingArray, isOwner });
    } catch (err) {
        console.log(err);
        return res.render('404', { error: 'Something went wrong! Please try again later!' });
    }
});

router.get('/search', async (req, res) => {    // initial load of search page
    try {
        const movies = await movieService.getAll().lean();
        return res.render('search', { movies });
    } catch (err) {
        console.log(err);
        return res.render('404', { error: 'Something went wrong! Please try again later!' });
    }
});

router.get('/search/movie', async (req, res) => {  // actual search
    try {
        const filter = req.query;
        const movies = await movieService.search(filter).lean();

        return res.render('search', { movies });
    } catch (err) {
        console.log(err);
        return res.render('404', { error: 'Something went wrong! Please try again later!' });
    }
});

router.get('/movies/:movieId/addCast', isAuth, async (req, res) => {
    try {
        const movie = await movieService.getOne(req.params.movieId).lean();
        const casts = await castService.getAllWithout(movie).lean();

        return res.render('cast-attach', { movie, casts });
    } catch (err) {
        console.log(err);
        return res.render('404', { error: 'Something went wrong! Please try again later!' });
    }
});

router.post('/movies/:movieId/addCast', isAuth, async (req, res) => {
    const movieId = req.params.movieId;
    const castId = req.body.cast;
    const character = req.body.character;

    try {

        await movieService.attach(movieId, castId, character);
        return res.redirect(`/movies/${movieId}/details`);

    } catch (err) {
        const errorMessage = getErrorMessage(err);

        const movie = await movieService.getOne(req.params.movieId).lean();
        const casts = await castService.getAllWithout(movie).lean();

        return res.render('cast-attach', { error: errorMessage, movie, casts, character });
    }
});

router.get('/movies/:movieId/edit', isAuth, async (req, res) => {
    try {
        const movie = await movieService.getOne(req.params.movieId).lean();
        return res.render('edit', { movie });
    } catch (err) {
        console.log(err);
        return res.render('404', { error: 'Something went wrong! Please try again later!' });
    }
});

router.post('/movies/:movieId/edit', isAuth, async (req, res) => {
    const movieId = req.params.movieId;
    const movie = req.body;

    try {

        const findMovie = await movieService.getOne(movieId).lean();

        if (findMovie.owner?.toString() !== req.user?._id) {
            throw new Error('You cannot edit this movie!');
        }

        await movieService.edit(movieId, movie);
        return res.redirect(`/movies/${movieId}/details`);
    }
    catch (err) {
        const errorMessage = getErrorMessage(err);
        return res.render('edit', { error: errorMessage, movie });
    }
});

router.get('/movies/:movieId/delete', isAuth, async (req, res) => {

    const movieId = req.params.movieId;

    try {

        const movie = await movieService.getOne(movieId).lean();

        if (movie.owner?.toString() !== req.user?._id) {
            throw new Error('You cannot delete this movie!');
        }

        await movieService.del(req.params.movieId);
        res.redirect('/');
    } catch (err) {
        console.log(err);
        return res.render('404', { error: 'Something went wrong! Please try again later!' });
    }
});

export default router;