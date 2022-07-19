<!-- templates from bootsrap with a form element an input field and v-model attribute- makes it easier to bind reactive data to a form input so that whether the data is modified by the user via the input or by the code the data always in sync. the addition of attribute class binding to the v-if directive is setting a condition that should the operation in authStore was successful or otherwise display msg on line 8 and 11. @click event listens to when a user clicks .prevent is a attribute modifier to ensure there is no  
-->
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
import { defineComponent, ref } from 'vue'
//import { storeToRefs } from 'pinia';
import { useAuthStore } from '../store/auth';

export default defineComponent({
  setup() {
    const authStore = useAuthStore();
    const email = ref('');
    const password = ref('');

    function login () {
      authStore.processLogin(email.value, password.value)
    }

    return {
      authStore,
      email,
      password,
      login,
    }
  },
})
</script>

<style scoped>

</style>