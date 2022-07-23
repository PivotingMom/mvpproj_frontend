// replicated what i have on auth.service.js

import axios from 'axios';
const baseUrl = 'http://organizmee.tk/api';

export const createJournalEntry = (payload) => axios.post(`${baseUrl}/create-journal`, payload)

export const getAllEntry = () => {
    return axios.get(`${baseUrl}/all-journal`)
}

export const deleteSingleEntry = (id) => {
    return axios.delete(`${baseUrl}/journal/${id}`)
}

export const getSingleEntry = (journalId) => {
    return axios.get(`${baseUrl}/journal/${journalId}`)
}

export const updateEntry = (journalId, payload) => {
    return axios.patch(`${baseUrl}/journal/${journalId}`, payload)
}

