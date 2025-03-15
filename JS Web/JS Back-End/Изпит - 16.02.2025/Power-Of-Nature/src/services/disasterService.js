import Disaster from '../models/Disaster.js';

const getAll = () => Disaster.find();

const getOne = (itemId) => Disaster.findById(itemId);

const create = (item, ownerId) => Disaster.create({ ...item, owner: ownerId });

const edit = (itemId, item) => Disaster.findByIdAndUpdate(itemId, item, { runValidators: true });

const del = (itemId) => Disaster.findByIdAndDelete(itemId);

const attach = (itemId, userId) => Disaster.findByIdAndUpdate(itemId, { $push: { interestedList: userId } });

const search = (filter) => {
    const query = Disaster.find();

    if (filter.name) {
        query.find({ name: { $regex: filter.name, $options: 'i' } });
    }

    if (filter.type) {
        query.find({ type: filter.type });
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
    search
}