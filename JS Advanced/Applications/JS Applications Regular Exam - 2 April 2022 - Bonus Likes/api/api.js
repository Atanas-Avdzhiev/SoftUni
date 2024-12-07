import { request } from "./requester.js";

const baseURL = 'http://localhost:3030';

export const register = (email, password) => request('POST', `${baseURL}/users/register`, { email, password });

export const login = (email, password) => request('POST', `${baseURL}/users/login`, { email, password });

export const logout = () => request('GET', `${baseURL}/users/logout`);

export const getAll = () => request('GET', `${baseURL}/data/pets?sortBy=_createdOn%20desc&distinct=name`);   // probably need to change the url after /data/

export const create = (data) => request('POST', `${baseURL}/data/pets`, data); // probably need to change the url after /data/

export const getOne = (id) => request('GET', `${baseURL}/data/pets/${id}`);    // probably need to change the url after /data/

export const update = (data, id) => request('PUT', `${baseURL}/data/pets/${id}`, data);    // probably need to change the url after /data/

export const deleting = (id) => request('DELETE', `${baseURL}/data/pets/${id}`);   // probably need to change the url after /data/