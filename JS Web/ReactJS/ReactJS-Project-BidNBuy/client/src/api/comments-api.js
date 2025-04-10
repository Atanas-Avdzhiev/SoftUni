import requester from "./requester";
import BASE_URL_BidNBuy from "../config";

const BASE_URL = `${BASE_URL_BidNBuy}/data/comments`;

const getAll = (auctionId, commentsToLoad) => requester('GET', `${BASE_URL}?where=auctionId%3D%22${auctionId}%22&sortBy=_createdOn%20desc&pageSize=${commentsToLoad}`);

const create = (commentData) => requester('POST', BASE_URL, commentData);

const edit = (commentId, commentData) => requester('PATCH', `${BASE_URL}/${commentId}`, commentData);

const del = (commentId) => requester('DELETE', `${BASE_URL}/${commentId}`);

const like = (commentId, commentData) => requester('PATCH', `${BASE_URL}/${commentId}`, commentData);

export const commentsAPI = {
    getAll,
    create,
    edit,
    del,
    like
}