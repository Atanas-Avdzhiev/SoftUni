import Volcano from '../models/Volcano.js';

const getAll = () => Volcano.find();

const getOne = (volcanoId) => Volcano.findById(volcanoId).populate('voteList.user');

const create = (volcano, ownerId) => Volcano.create({ ...volcano, owner: ownerId });

const edit = (volcanoId, volcano) => Volcano.findByIdAndUpdate(volcanoId, volcano, { runValidators: true });

const del = (volcanoId) => Volcano.findByIdAndDelete(volcanoId);

const attach = (volcanoId, userId) => Volcano.findByIdAndUpdate(volcanoId, { $push: { voteList: { user: userId } } });

const search = (filter) => {
    const volcanoQuery = Volcano.find();

    if (filter.name) {
        volcanoQuery.find({ name: { $regex: filter.name, $options: 'i' } });
    }

    if (filter.typeVolcano) {
        volcanoQuery.find({ typeVolcano: filter.typeVolcano });
    }

    return volcanoQuery;
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