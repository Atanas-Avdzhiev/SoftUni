import { request } from "./requester.js";

const baseURL = 'http://localhost:3030';

export const register = (email, password) => request('POST', `${baseURL}/users/register`, { email, password });

export const login = (email, password) => request('POST', `${baseURL}/users/login`, { email, password });

export const logout = () => request('GET', `${baseURL}/users/logout`);

export const getAll = () => request('GET', `${baseURL}/data/tattoos?sortBy=_createdOn%20desc`);

export const create = (data) => request('POST', `${baseURL}/data/tattoos`, data);

export const getOne = (id) => request('GET', `${baseURL}/data/tattoos/${id}`);

export const update = (data, id) => request('PUT', `${baseURL}/data/tattoos/${id}`, data);

export const deleting = (id) => request('DELETE', `${baseURL}/data/tattoos/${id}`);