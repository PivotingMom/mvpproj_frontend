<!-- templates from bootsrap with a form element an input field and v-model attribute- makes it easier to bind reactive data to a form input so that whether the data is modified by the user via the input or by the code the data always in sync. the addition of attribute class binding to the v-if directive is setting a condition that should the operation in authStore was successful or otherwise display msg on line 8 and 11. @click event listens to when a user clicks .prevent is a attribute modifier to ensure there is no default system refresh-->

<template>
  <div class="container">
    <p class="text-center">Welcome back!</p>
    <div>
      <div class="alert alert-success" v-if="authStore.isSuccess">
        Login successful
      </div>
      <div class="alert alert-danger" v-if="authStore.isError">
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
import {  ref } from 'vue'
import { useAuthStore } from '../store/auth';

const email = ref('');
const password = ref('');

export default {
  // define click handler methods here, otherwise object properties like this.$router may not be available
  methods: {
    login() {
      const authStore = useAuthStore();
      authStore.processLogin(email.value, password.value)
      this.$router.push('/dashboard')
    }
  },
  setup() {
    const authStore = useAuthStore();

    return {
      authStore,
      email,
      password,
    }
  },
}
</script>

<style scoped>

</style>