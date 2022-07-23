<!-- Template component  containing a parent container, a header a  form element for input, router link helps with navigation, button,a v-model attribute that provides  2-way data binding for our reactive references ,  the v-model attribute- makes it easier to bind reactive data to a form input so that whether the data is modified by the user via the input or by the code the data always in sync. .  ---->
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

<!-- //to use the store in another component i needed to import the store from pinia and use it to define our store  & import useAuthStore to be able to use it combined with the v-model one could directly mutate state from anywhere in the app-->
<script>
import { defineComponent, ref } from 'vue'
import { useAuthStore } from '../store/auth';

// The setup() hook serves as the entry point for Composition API usage in components
//using storeToRefs create refs for any reactive property in the pinia state and only useful when using state from the store. https://vuejs.org/api/reactivity-utilities.html#isref
//this is a typical pattern for vue powered site, there will be some data in an API , some empty global state in the store, and on the page where the data is needed, some actions are called to fulfill that state,its synonymous to state in store)
//next I listened to the event "register" 

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
// < !--by creating a new reactive ref & initializing it to an empty string, const key = ref('') store & adding v - model to our input  and assiging const values, a 2 - way data binding was established btw the store and the input form, that way they always stay in -sync-- >
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