import Movie from '../models/Movie.js';

const getAll = () => Movie.find();

const create = (movie, ownerId) => Movie.create({ ...movie, owner: ownerId });

const getOne = (movieId) => Movie.findById(movieId).populate('cast.actor');

const attach = (movieId, castId, character) => Movie.findByIdAndUpdate(movieId, { $push: { cast: { actor: castId, character } } }, { runValidators: true }); // runValidators are necessary here or mongoose wont validate subdocument fields (character)

const search = (filter) => {
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
    return moviesQuery;
}

const edit = (movieId, movie) => Movie.findByIdAndUpdate(movieId, movie, { runValidators: true });

const del = (movieId) => Movie.findByIdAndDelete(movieId);

export default {
    getAll,
    create,
    getOne,
    attach,
    search,
    edit,
    del
}