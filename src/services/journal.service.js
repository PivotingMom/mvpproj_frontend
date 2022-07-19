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

//placed all axios call to the backend API on a file and into a function , then call each in the store as needed, i think its helps to keep things tidy and ensures i didnt miss a step  I stumbled on this idea here ,iwhile trying to understand axios call better from link below 
/* https://dev.to/julfikarhaidar/implementation-axios-and-vuejs-with-separate-service-2603
 */
