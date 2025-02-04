import Recipe from '../models/Item.js';

const getAll = () => Recipe.find();

const getOne = (itemId) => Recipe.findById(itemId);//.populate('voteList');

const create = (item, ownerId) => Recipe.create({ ...item, owner: ownerId });

const edit = (itemId, item) => Recipe.findByIdAndUpdate(itemId, item, { runValidators: true });

const del = (itemId) => Recipe.findByIdAndDelete(itemId);

const attach = (itemId, userId) => Recipe.findByIdAndUpdate(itemId, { $push: { recommendList: userId } });

const getLast3 = () => Recipe.find().sort({ _id: -1 }).limit(3);

// const getAllVotedRecipesByUser = (userId) => Recipe.find({ preferredList: userId });  // find all items voted/preferred by the user

const search = (filter) => {
    const query = Recipe.find();

    if (filter.search) {
        query.find({ title: { $regex: filter.search, $options: 'i' } });
    }

    return query;
}

export default {
    getAll,
    create,
    getOne,
    edit,
    del,
    attach,
    search,
    getLast3,
    //getAllVotedRecipesByUser
}