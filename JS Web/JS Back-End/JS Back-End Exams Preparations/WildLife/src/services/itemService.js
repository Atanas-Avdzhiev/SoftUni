import Post from '../models/Item.js';

const getAll = () => Post.find().populate('author');

const getOne = (itemId) => Post.findById(itemId).populate('votesOnPost').populate('author');

const create = (item, ownerId) => Post.create({ ...item, author: ownerId });

const edit = (itemId, item) => Post.findByIdAndUpdate(itemId, item, { runValidators: true });

const del = (itemId) => Post.findByIdAndDelete(itemId);

const attach = (itemId, userId) => Post.findByIdAndUpdate(itemId, { $push: { votesOnPost: userId } });

export default {
    getAll,
    create,
    getOne,
    edit,
    del,
    attach
}