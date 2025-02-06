import Cosmetic from '../models/Item.js';

const getAll = () => Cosmetic.find();

const getOne = (itemId) => Cosmetic.findById(itemId);//.populate('voteList');

const create = (item, ownerId) => Cosmetic.create({ ...item, owner: ownerId });

const edit = (itemId, item) => Cosmetic.findByIdAndUpdate(itemId, item, { runValidators: true });

const del = (itemId) => Cosmetic.findByIdAndDelete(itemId);

const attach = (itemId, userId) => Cosmetic.findByIdAndUpdate(itemId, { $push: { recommendList: userId } });

const getLast3 = () => Cosmetic.find().sort({ _id: -1 }).limit(3);

// const getAllVotedItemsByUser = (userId) => Item.find({ preferredList: userId });  // find all items voted/preferred by the user

const search = (filter) => {
    const query = Cosmetic.find();

    if (filter.search) {
        query.find({ name: { $regex: filter.search, $options: 'i' } });
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
    // getAllVotedItemsByUser
}