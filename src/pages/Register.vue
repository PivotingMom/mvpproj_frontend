<template>
  <div class="container">
    <h4 class="text-center mt-2">Welcome to Organize me</h4>
    <div>
      <div class="form-group mb-4">
        <label for="username">First name</label>
        <input type="text" class="form-control" placeholder="Enter First name" />
      </div>
      <div class="form-group mb-4">
        <label for="username">Last name</label>
        <input type="text" class="form-control" placeholder="Enter Last name" />
      </div>
      <div class="form-group mb-4">
        <label for="username">Email</label>
        <input type="email" class="form-control" placeholder="Enter Email" />
      </div>
      <div class="form-group mb-4">
        <label for="username">Username</label>
        <input type="text" class="form-control" placeholder="Enter Username" />
      </div>
      <div class="form-group mb-4">
        <label for="username">Password</label>
        <input type="password" class="form-control" placeholder="Enter Username" />
      </div>
      <div>
        <button class="btn btn-success">Register Account</button>
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
      var payload = {
        first_name, last_name, username, email, password
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