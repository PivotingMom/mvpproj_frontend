import axios from 'axios';
const baseUrl = 'http://127.0.0.1:5000/api';

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

// I stumbled on this idea here ,iwhile trying to understand axios call better from link below 
/* https://dev.to/julfikarhaidar/implementation-axios-and-vuejs-with-separate-service-2603
 */
