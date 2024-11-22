import { get } from './api.js';

const endpoints = {
    allTeams: '/data/teams'
};

export async function getAllTeams() {
    return get(endpoints.allTeams);
}