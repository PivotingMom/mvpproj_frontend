import { defineStore } from 'pinia';
import router from '../router';
import { loginService, logoutService, registerService, clientService, updateClientService } from '@/services/auth.service';
import { tryOnUnmounted } from '@vueuse/core';
import axios from 'axios';

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
        //SlocalStorage.setItem('token', response.data.token);
        router.push('/dashboard')

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