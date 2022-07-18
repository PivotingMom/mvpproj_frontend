<template>
  <div>
    <router-link to="/my-profile" v-if="authStore.isSuccess"><span class="my-profile">My Profile</span></router-link>
    <div class="logo-container">
      <img src="./assets/OrganizMe.png" class="logo" />
    </div>
    <button class="back-to-dashboard" v-if="route.name !== 'Dashboard'" @click="backToDashboard()">Back to
      Dashboard</button>

    <div>
      <button class="btn btn-success" @click="logout()">logout</button>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { useAuthStore } from './store/auth'
import { useRouter, useRoute } from 'vue-router'

export default {
  name: 'App',
  setup() {
    const authStore = useAuthStore();
    const router = useRouter();
    const route = useRoute();

    console.log(route.name);

    return {
      authStore,
      route,
      backToDashboard: () => {
        router.push('/dashboard');
      },
      logout(){ 
        authStore.processLogout()
      }
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
.back-to-dashboard {
  margin-left: 25px;
}
</style>
