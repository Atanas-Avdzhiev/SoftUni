import requester from "./requester"

const BASE_URL = 'http://localhost:3030/data/games'

const getAll = () => requester('GET', `${BASE_URL}?sortBy=_createdOn%20desc`);

const getOne = (gameId) => requester('GET', `${BASE_URL}/${gameId}`);

const create = (gameData) => requester('POST', BASE_URL, gameData);

const edit = (gameId, gameData) => requester('PUT', `${BASE_URL}/${gameId}`, gameData);

const del = (gameId) => requester('DELETE', `${BASE_URL}/${gameId}`);

const getLatest = () => requester('GET', `${BASE_URL}?sortBy=_createdOn%20desc&pageSize=3`);

export const gamesAPI = {
    getAll,
    getOne,
    create,
    edit,
    del,
    getLatest
}