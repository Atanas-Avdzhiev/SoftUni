import Cast from "../models/Cast.js";

const getAll = () => Cast.find();

const getAllWithout = (movie) => {
    const castIds = (movie.cast || []).map(castItem => castItem.actor?._id);

    return Cast.find({ _id: { $nin: castIds } });
}

const create = (cast) => Cast.create(cast);

export default {
    create,
    getAll,
    getAllWithout,
}