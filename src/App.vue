<template>
  <div>
    <router-link to="/my-profile" v-if="authStore.isSuccess"><span class="my-profile">My Profile</span></router-link>
      <div class="logo-container">
        <img src="./assets/OrganizMe.png" class="logo" />
      </div>
      <router-view></router-view>
  </div>
</template>

<script>
import { useAuthStore } from './store/auth'

export default {
  name: 'App',
  setup() {
    const authStore = useAuthStore();
    return {
      authStore,
    }
  }
}
</script>

<style>
.logo {
  width: 300px;
  height: 150px;
}
.logo-container {
  margin-top: 25px;
  text-align: center;
}
.my-profile {
  float: right;
  margin-right: 20px
}
</style>
