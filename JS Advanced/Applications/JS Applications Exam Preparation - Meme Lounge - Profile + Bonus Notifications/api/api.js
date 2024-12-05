import { request } from "./requester.js";

const baseURL = 'http://localhost:3030';

export const register = (data) => request('POST', `${baseURL}/users/register`, data);

export const login = (email, password) => request('POST', `${baseURL}/users/login`, { email, password });

export const logout = () => request('GET', `${baseURL}/users/logout`);

export const getAll = () => request('GET', `${baseURL}/data/memes?sortBy=_createdOn%20desc`);   // probably need to change the url after /data/

export const create = (data) => request('POST', `${baseURL}/data/memes`, data); // probably need to change the url after /data/

export const getOne = (id) => request('GET', `${baseURL}/data/memes/${id}`);    // probably need to change the url after /data/

export const update = (data, id) => request('PUT', `${baseURL}/data/memes/${id}`, data);    // probably need to change the url after /data/

export const deleting = (id) => request('DELETE', `${baseURL}/data/memes/${id}`);   // probably need to change the url after /data/