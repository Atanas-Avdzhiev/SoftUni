import Trip from '../models/Item.js';

const getAll = () => Trip.find();

const getOne = (itemId) => Trip.findById(itemId).populate('buddies').populate('creator');

const create = (item, ownerId) => Trip.create({ ...item, creator: ownerId });

const edit = (itemId, item) => Trip.findByIdAndUpdate(itemId, item, { runValidators: true });

const del = (itemId) => Trip.findByIdAndDelete(itemId);

const attach = (itemId, userId) => Trip.findByIdAndUpdate(itemId, { $push: { buddies: userId } });

export default {
    getAll,
    create,
    getOne,
    edit,
    del,
    attach
}