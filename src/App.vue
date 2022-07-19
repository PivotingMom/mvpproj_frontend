<template>
  <div>
    <router-link to="/my-profile" v-if="authStore.isSuccess"><span class="my-profile">My Profile</span></router-link>
    <div class="logo-container">
      <img src="./assets/OrganizMe.png" class="logo" />
    </div>

    <div class="toolbar">
      <button class="back-to-dashboard" v-if="route.name !== 'Dashboard' && authStore.isSuccess"
        @click="backToDashboard()">Back to
        Dashboard</button>
      <button v-if="route.name === 'Dashboard'" class="btn btn-success" @click="logout()">logout</button>
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
//puting to use the imported stores
    //console.log(this.$route.name);

    return {
      authStore,
      route,
      backToDashboard: () => {
        router.push('/dashboard');
      },
      logout() {
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

.toolbar {
  margin-left: 25px;
}
</style>

<!-- //to mount the application to the DOM simply means to make the vue application which is made up of javascript show up on the page in HTML. the mount method takes a css selector to target the element that we want to mount to.this element lives in the index.html file in the root of our project & this is the file that initially gets served in the browser & includes the javascript code for our Vue app.  -->