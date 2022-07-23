import axios from 'axios';
const baseUrl = 'http://127.0.0.1:5000/api';

// const baseUrl = 'http://organizmee.tk/api';

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



//placed all axios call to the backend API on a file and into a function , then call each in the store as needed, i think its helps to keep things tidy and ensures i didnt miss a step  I stumbled on this idea here ,iwhile trying to understand axios call better from link below 
/* https://dev.to/julfikarhaidar/implementation-axios-and-vuejs-with-separate-service-2603
 *///https://medium.com/bb-tutorials-and-thoughts/how-to-make-api-calls-in-vue-js-applications-43e017d4dc86
// below are click methods processes created according to the requirement of CRUD - I know there has to be a loginService, logout,a register account, a get client and update client.below are the various API call I need to send to the API backend , payload are the data inputed to send/
//  whereever the login service function is called within the application, send the args - data/payload and return what is stored athe end and payload
//  whereever the logout service function is called within the application, run the code require from endpoint side
