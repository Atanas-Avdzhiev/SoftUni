import requester from "./requester"

const BASE_URL = 'http://localhost:3030/data/comments'

const getAll = (gameId) => requester('GET', `${BASE_URL}?where=gameId%3D%22${gameId}%22`);

const create = (commentData) => requester('POST', BASE_URL, commentData);

export const commentsAPI = {
    getAll,
    create
}