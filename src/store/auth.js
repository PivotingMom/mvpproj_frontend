//the lesson here provided me with a pratical   understanding of pinia /state mgt etc  https://vueschool.io/courses/pinia-the-enjoyable-vue-store
// first create a folder/directory called store
//then create a .js file within the dir, as it just a .js file
//we need to let vue know , and we import define store line 4
//to be able to access  component in another, importing and exporting is required hence line 10 to 16
//then we define & expose our store - store takes in 2 args- an Id related to the file it will be linking with in this case auth, line 14 & 15
//and a options that contains state, actions and getters
// state is the central part of the store, it used to define the data that needs to be accessible all thorugh the sotr - in this case the state holds data from input  through the v-model binding on the home/register and login page. 
//to make the store accessible we exported   it into home/register and login page/component line 35 &  39 respectively

import { defineStore } from 'pinia';
import router from '../router';
import { loginService, logoutService, registerService, clientService, updateClientService } from '@/services/auth.service';
import { tryOnUnmounted } from '@vueuse/core';
import axios from 'axios';

//typically data will be fetched from an API, so its empty in the begining line 22-29, and then I will create action to fill it. to define an action in pinia, provide  the action option in the store and then define methods on it line 30 - 93. Actions are meant to change/mutate the store's data.
//next I create the actions - updateClient, processClient, processRegister, processLogin, process logout
//then set the data in our state to the response data from our JSON file
//the state is accessed from an action via the keyword 'this' & directly specifying a  piece of state e.g this.client = response.data line 44

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    token: '',
    clientId: null,
    isSuccess: false,
    isError: false,
    message: '',
    email: '',
    password: '',
    client: {},
  }),
  actions: {
    updateClient(payload) {
      updateClientService(payload).then(response => {
        console.log(response);
      })
    },
    

    processClient() {
      clientService().then(response => {
        console.log(response);
        this.client = response.data
      })
    },
//when the register btn is clicked on register .vue is emits a register event

    processRegister(regPayload) {
      registerService(regPayload)
      .then((response) => {
        const { email, password } = regPayload;
        this.email = email;
        this.password = password;
        console.log(response.data)
        this.isSuccess = true
        router.push("/dashboard")
      })
      .catch((err)=> {
        console.log(err)
      })
    },
    processLogin(email, password) {
      var payload = {
        email, password
      }
      loginService(payload)
      .then((response) => {
        this.email = email;
        this.password = password;
        this.isSuccess = tryOnUnmounted
        this.clientId = response.data.clientId
        this.token = response.data.token
        axios.defaults.headers.common.token = this.token
        localStorage.setItem('token', response.data.token);

      })
      .catch((err) => {
        this.isError = true
        console.log(err)
      })
    },
      processLogout() {
        console.log(this.token);
        var payload = {
          token: this.token
        }
        this.$reset();
    
        logoutService(payload)
          .then(() => {
            router.push('/')
          })
          .catch((err) => {
            this.isError = true
            console.log(err)
          })
    }
  }
})