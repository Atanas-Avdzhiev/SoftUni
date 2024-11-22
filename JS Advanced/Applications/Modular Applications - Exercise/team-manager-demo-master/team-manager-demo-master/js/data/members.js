import { get } from './api.js';

const endpoints = {
    allMembers: '/data/members'
};

export async function getAllMembers() {
    return get(endpoints.allMembers);
}