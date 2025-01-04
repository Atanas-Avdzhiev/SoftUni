import express from 'express';
import handlebars from 'express-handlebars';

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.static('static'));

app.engine('hbs', handlebars.engine({ extname: 'hbs' }));
app.set('view engine', 'hbs');

const movies = [
    {
        id: 1,
        title: 'Jungle Cuise',
        genre: 'Adventure',
        director: "Jaume Collet-Serra",
        year: 2021,
        imageURL: '/img/jungle-cruise.jpeg',
        rating: 3,
        description: "Dreaming about saving countless lives and having another adventure, the feisty English feminist and doctor of botany, Dr Lily Houghton, embarks on a peril-laden mission to change the world. Along with her fashionable brother, MacGregor, Dr Houghton enlists the help of the arrogant, wisecracking riverboat skipper, Captain Frank Wolff, to guide them through the serpentine Amazon River in La Quila, his swift wooden boat. Now, as the intrepid trio ventures deeper and deeper into the heart of an impenetrable green maze, searching for something that cannot be found, a centuries-old curse and the ruthless aristocrat, Prince Joachim, threaten to put an end to their ambitious plans."
    },
    {
        id: 2,
        title: 'The Little Mermaid',
        genre: 'Fantasy',
        director: "Rob Marshall",
        year: 2023,
        imageURL: '/img/the-little-mermaid.jpg',
        rating: 4,
        description: "The youngest of King Triton's daughters, Ariel is a beautiful and spirited young mermaid with a thirst for adventure. Longing to find out more about the world beyond the sea, Ariel visits the surface and falls for the dashing Prince Eric. Following her heart, she makes a deal with the evil sea witch, Ursula, to experience life on land."
    },
    {
        id: 3,
        title: 'Home Alone',
        genre: 'Comedy',
        director: "Chris Columbus",
        year: 1990,
        imageURL: '/img/home-alone.jpeg',
        rating: 5,
        description: "It is Christmas time and the McCallister family is preparing for a vacation in Paris, France. But the youngest in the family, Kevin (Macaulay Culkin), got into a scuffle with his older brother Buzz (Devin Ratray) and was sent to his room, which is on the third floor of his house. Then, the next morning, while the rest of the family was in a rush to make it to the airport on time, they completely forgot about Kevin, who now has the house all to himself. Being home alone was fun for Kevin, having a pizza all to himself, jumping on his parents' bed, and making a mess. Then, Kevin discovers about two burglars, Harry (Joe Pesci) and Marv (Daniel Stern), about to rob his house on Christmas Eve. Kevin acts quickly by wiring his own house with makeshift booby traps to stop the burglars and to bring them to justice."
    }
];

app.get('/', (req, res) => {
    res.render('home', { layout: false, movies });
});

app.get('/create', (req, res) => {
    res.render('create', { layout: false });
});

app.get('/about', (req, res) => {
    res.render('about', { layout: false });
});

app.get('/details/:id', (req, res) => {
    const findMovie = movies.find(movie => movie.id === Number(req.params.id));
    const ratingArray = new Array(findMovie.rating).fill(0);
    res.render('details', { layout: false, movie: findMovie, rating: ratingArray });
});

app.post('/movies/add', (req, res) => {
    const newMovie = {
        id: movies.length + 1,
        title: req.body.title,
        genre: req.body.genre,
        director: req.body.director,
        year: Number(req.body.year),
        imageURL: req.body.imageURL,
        rating: Number(req.body.rating),
        description: req.body.description
    }
    movies.push(newMovie);
    res.redirect('/');
});

app.get('/search', (req, res) => {
    res.render('search', { layout: false, movies });
});

app.get('/searchMovie', (req, res) => {
    const search = req.query.search.toLowerCase();
    const genre = req.query.genre.toLowerCase();
    const year = Number(req.query.year);

    if (search === '' && genre === '' && year === '') {
        res.render('search', { layout: false, movies });
        return;
    }

    const findMoviesByTitle = movies.filter(movie => movie.title.toLowerCase().includes(search));
    const findMoviesByTitleAndGenre = findMoviesByTitle.filter(movie => movie.genre.toLowerCase().includes(genre));

    if (year === 0) {
        res.render('search', { layout: false, movies: findMoviesByTitleAndGenre });
        return;
    }

    const findMoviesByYear = findMoviesByTitleAndGenre.filter(movie => movie.year === year);
    res.render('search', { layout: false, movies: findMoviesByYear });
});

app.get('*', (req, res) => {
    res.render('404', { layout: false });
});

const port = 5000;
app.listen(port, () => console.log(`Server is listening on http://localhost:${port}`));