// replicated what i have on auth.service.js

import axios from 'axios';
const baseUrl = 'http://127.0.0.1:5000/api';

export const createJournalEntry = (payload) => axios.post(`${baseUrl}/create-entry`, payload)

export const getAllEntry = () => {
    return axios.get(`${baseUrl}/all-entry`)
}

export const deleteSingleEntry = (id) => {
    return axios.delete(`${baseUrl}/entry/${id}`)
}

export const getSingleEntry = (entryId) => {
    return axios.get(`${baseUrl}/entry/${entryId}`)
}

export const updateEntry = (entryId, payload) => {
    return axios.patch(`${baseUrl}/entry/${entryId}`, payload)
}

