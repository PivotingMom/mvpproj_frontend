import { defineStore } from 'pinia';
import router from '../router';
import { loginService, registerService, clientService, updateClientService } from '@/services/auth.service';
import { tryOnUnmounted } from '@vueuse/core';

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
  getters: {
    getEmail: state => state.email,
    getPassword: state => state.password,
    getStatus: (state) => { 
      return {
        isError: state.isError, isSuccess: state.isSuccess 
      }
    },
  },
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

    processRegister(regPayload) {
      registerService(regPayload)
      .then((response) => {
        const { email, password } = regPayload;
        this.email = email;
        this.password = password;
        console.log(response.data)
        this.isSuccess = true
        setTimeout(() => {
          router
          window.location.href = '/my-profile'
        }, 2000);
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
        localStorage.setItem('token', response.data.token);
        router.push('/dashboard')

      })
      .catch((err) => {
        this.isError = true
        console.log(err)
      })
    }
  }
})