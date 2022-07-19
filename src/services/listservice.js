import axios from 'axios';
const baseUrl = 'http://127.0.0.1:5000/api';

export const createNewList = (payload) => axios.post(`${baseUrl}/create-list`, payload)

export const getAllLists = () => {
        return axios.get(`${baseUrl}/all-lists`)
}

export const deleteSingleList = (id) => {
    return axios.delete(`${baseUrl}/shoppinglist/${id}`)
}

export const getSingleList = (listId) => {
    return axios.get(`${baseUrl}/shoppinglist/${listId}`) }

export const updateList = (listId, payload) => {
    return axios.patch(`${baseUrl}/shoppinglist/${listId}`, payload)
}

//placed all axios call to the backend API on a file and into a function , then call each in the store as needed, i think its helps to keep things tidy and ensures i didnt miss a step  I stumbled on this idea here ,iwhile trying to understand axios call better from link below 
/* https://dev.to/julfikarhaidar/implementation-axios-and-vuejs-with-separate-service-2603
 */