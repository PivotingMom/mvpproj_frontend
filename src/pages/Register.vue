<template>
  <div class="container">
    <p class="text-center">Welcome to OrganizMe.</p>
    <div>
      <div class="form-group mb-4">
        <label for="first_name">First name</label>
        <input type="text" class="form-control" placeholder="Enter First name" v-model="first_name" />
      </div>
      <div class="form-group mb-4">
        <label for="last_name">Last name</label>
        <input type="text" class="form-control" placeholder="Enter Last name" v-model="last_name" />
      </div>
      <div class="form-group mb-4">
        <label for="email">Email</label>
        <input type="email" class="form-control" placeholder="Enter Email" v-model="email" />
      </div>
      <div class="form-group mb-4">
        <label for="username">Username</label>
        <input type="text" class="form-control" placeholder="Enter Username" v-model="username" />
      </div>
      <div class="form-group mb-4">
        <label for="username">Password</label>
        <input type="password" class="form-control" placeholder="Enter Password" v-model="password" />
      </div>
      <div>
        <button class="btn btn-success" @click="register()">Register Account</button>
      </div>
      <div>
        <p>Already have an account? <router-link to="/">Login</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useAuthStore } from '../store/auth';
export default defineComponent({
  setup() {
    const authStore = useAuthStore();
    const first_name = ref('');
    const last_name = ref('');
    const username = ref('');
    const email = ref('');
    const password = ref('');
    function register () {
      console.log(first_name);
      var payload = {
        first_name: first_name.value, last_name: last_name.value, username: username.value, email: email.value, password: password.value
      }
      authStore.processRegister(payload)
    }
    return {
      authStore,
      first_name,
      last_name,
      username,
      email,
      password,
      register
    }
  },
})
</script>