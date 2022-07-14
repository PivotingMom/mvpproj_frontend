import { defineStore } from 'pinia';
import router from '../router';
import { loginService, registerService } from '@/services/auth.service';

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    token: '',
    clientId: null,
    isSuccess: false,
    isError: false
  }),
  getters: {
    getStatus: (state) => { 
      return {
        isError: state.isError, isSuccess: state.isSuccess 
      }
    },
  },
  actions: {
    processRegister(regPayload) {
      registerService(regPayload)
      .then((response) => {
        console.log(response.data)
        this.isSuccess = true
        setTimeout(() => {
          window.location.href = '/'
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
        console.log(response)
        //console.log(response.data)
        this.isSuccess = true
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