// replicated what i have on auth.service.js 
import axios from 'axios';
const baseUrl = 'http://organizmee.tk/api';

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

