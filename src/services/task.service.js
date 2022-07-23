// replicated what i have on auth.service.js
import axios from 'axios';
const baseUrl = 'http://organizmee.tk/api';

export const createNewTask = (payload) => {
    return axios.post(`${baseUrl}/create_task`, payload)
}

export const getAllTasks = () => {
    return axios.get(`${baseUrl}/all-tasks`)
}

export const deleteSingleTask = (id) => {
    return axios.delete(`${baseUrl}/task/${id}`)
}

export const getSingleTask = (taskId) => {
    return axios.get(`${baseUrl}/task/${taskId}`)
}

export const updateTask = (taskId, payload) => {
    return axios.patch(`${baseUrl}/task/${taskId}`, payload)
}

