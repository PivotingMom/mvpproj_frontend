import axios from 'axios';
const baseUrl = 'http://127.0.0.1:5000/api';

export const loginService = (payload) => {
  return axios.post(`${baseUrl}/client_login`, payload)
}

export const logoutService = (payload) => {
  return axios.delete(`${baseUrl}/client`, {
    headers: {
      token: payload.token
    }
  })
}

export const registerService = (payload) => {
  return axios.post(`${baseUrl}/client`, payload)
}

export const clientService = () => {
  return axios.get(`${baseUrl}/client`)
};

export const updateClientService = (payload) => {
  return axios.patch(`${baseUrl}/client`, payload);
}

// I stumbled on this idea here ,iwhile trying to understand axios call better from link below 
/* https://dev.to/julfikarhaidar/implementation-axios-and-vuejs-with-separate-service-2603
 */

