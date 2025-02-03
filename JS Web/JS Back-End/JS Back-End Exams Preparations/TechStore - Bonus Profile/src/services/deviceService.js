import Device from '../models/Device.js';

const getAll = () => Device.find();

const getLast3 = () => Device.find().sort({ _id: -1 }).limit(3);

const getOne = (deviceId) => Device.findById(deviceId);//.populate('preferredList');

const create = (device, ownerId) => Device.create({ ...device, owner: ownerId });

const edit = (deviceId, device) => Device.findByIdAndUpdate(deviceId, device, { runValidators: true });

const del = (deviceId) => Device.findByIdAndDelete(deviceId);

const attach = (deviceId, userId) => Device.findByIdAndUpdate(deviceId, { $push: { preferredList: userId } });

const getAllVotedItemsByUser = (userId) => Device.find({ preferredList: userId });  // find all items voted/preferred by the user

export default {
    getAll,
    create,
    getOne,
    edit,
    del,
    attach,
    getLast3,
    getAllVotedItemsByUser
}