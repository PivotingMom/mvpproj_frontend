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

//placed all axios call to the backend API on a file and into a function , then call each in the store as needed, i think its helps to keep things tidy and ensures i didnt miss a step  I stumbled on this idea here ,iwhile trying to understand axios call better from link below 
/* https://dev.to/julfikarhaidar/implementation-axios-and-vuejs-with-separate-service-2603
 */