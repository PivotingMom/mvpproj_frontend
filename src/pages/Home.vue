<template>
  <div class="container">
    <p class="text-center">Welcome back!</p>
    <div>
      <div class="alert alert-success" v-if="isSuccess">
        Login successful
      </div>
      <div class="alert alert-danger" v-if="isError">
        Error in logging in
      </div>
      <div class="form-group mb-4">
        <label for="username">Email</label>
        <input type="email" v-model="email" class="form-control" placeholder="Enter Email" />
      </div>
      <div class="form-group mb-4">
        <label for="username">Password</label>
        <input type="password" v-model="password" class="form-control" placeholder="Enter Password" />
      </div>
      <div>
        <button class="btn btn-success" @click.prevent="login">Login</button>
      </div>
      <div>
        <p>Don't have an account? <router-link to="/register">Register an account</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
//import { storeToRefs } from 'pinia';
import { useAuthStore } from '../store/auth';

export default defineComponent({
  setup() {
    const authStore = useAuthStore();
    const email = ref('');
    const password = ref('');
    // const { isSuccess, isError } = storeToRefs(authStore);

    function login () {
      authStore.processLogin(email.value, password.value)
    }

    return {
      authStore,
      email,
      password,
      login
    }
  },
})
</script>

<style scoped>

</style>