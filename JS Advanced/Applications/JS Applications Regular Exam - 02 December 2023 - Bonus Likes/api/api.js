import { request } from "./requester.js";

const baseURL = 'http://localhost:3030';

export const register = (email, password) => request('POST', `${baseURL}/users/register`, { email, password });

export const login = (email, password) => request('POST', `${baseURL}/users/login`, { email, password });

export const logout = () => request('GET', `${baseURL}/users/logout`);

export const getAll = () => request('GET', `${baseURL}/data/characters?sortBy=_createdOn%20desc`);   // probably need to change the url after /data/

export const create = (data) => request('POST', `${baseURL}/data/characters`, data); // probably need to change the url after /data/

export const getOne = (id) => request('GET', `${baseURL}/data/characters/${id}`);    // probably need to change the url after /data/

export const update = (data, id) => request('PUT', `${baseURL}/data/characters/${id}`, data);    // probably need to change the url after /data/

export const deleting = (id) => request('DELETE', `${baseURL}/data/characters/${id}`);   // probably need to change the url after /data/