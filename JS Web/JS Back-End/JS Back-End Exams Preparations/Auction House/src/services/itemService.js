import Item from '../models/Item.js';

const getAll = () => Item.find().populate('bidder');

const getOne = (itemId) => Item.findById(itemId).populate('bidder');

const create = (item, ownerId) => Item.create({ ...item, owner: ownerId });

const edit = (itemId, item) => Item.findByIdAndUpdate(itemId, item, { runValidators: true });

const del = (itemId) => Item.findByIdAndDelete(itemId);

const attach = (itemId, userId) => Item.findByIdAndUpdate(itemId, { $push: { voteList: userId } });

//const getLast3 = () => Item.find().sort({ _id: -1 }).limit(3);

// const getAllVotedItemsByUser = (userId) => Item.find({ preferredList: userId });  // find all items voted/preferred by the user

// const search = (filter) => {
//     const query = Item.find();

//     if (filter.name) {
//         query.find({ name: { $regex: filter.name, $options: 'i' } });
//     }

//     if (filter.typeItem) {
//         query.find({ typeItem: filter.typeItem });
//     }

//     return query;
// }

export default {
    getAll,
    create,
    getOne,
    edit,
    del,
    attach,
    // search,
    // getLast3,
    // getAllVotedItemsByUser
}