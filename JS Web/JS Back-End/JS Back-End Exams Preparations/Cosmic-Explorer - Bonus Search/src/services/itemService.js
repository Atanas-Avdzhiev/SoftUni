import Planet from '../models/Item.js';

const getAll = () => Planet.find();

const getOne = (itemId) => Planet.findById(itemId);//.populate('voteList');

const create = (item, ownerId) => Planet.create({ ...item, owner: ownerId });

const edit = (itemId, item) => Planet.findByIdAndUpdate(itemId, item, { runValidators: true });

const del = (itemId) => Planet.findByIdAndDelete(itemId);

const attach = (itemId, userId) => Planet.findByIdAndUpdate(itemId, { $push: { likedList: userId } });

//const getLast3 = () => Planet.find().sort({ _id: -1 }).limit(3);

// const getAllVotedItemsByUser = (userId) => Planet.find({ preferredList: userId });  // find all items voted/preferred by the user

const search = (filter) => {
    const query = Planet.find();

    if (filter.name) {
        query.find({ name: { $regex: filter.name, $options: 'i' } });
    }

    if (filter.solarSystem) {
        query.find({ solarSystem: { $regex: filter.solarSystem, $options: 'i' } });
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
    // getLast3,
    // getAllVotedItemsByUser
}