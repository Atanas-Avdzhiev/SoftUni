import Volcano from '../models/Volcano.js';

const getAll = () => Volcano.find();

export default {
    getAll
}