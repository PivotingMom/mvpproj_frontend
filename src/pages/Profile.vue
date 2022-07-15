<template>
  <div class="container">
    <h3>Profile</h3>
    <p class="text-center">Welcome back, <span v-text="authStore.name"></span>!</p>
    <div>
      <div class="form-group mb-4">
        <label for="email">Email</label>
        <input type="email" v-model="authStore.client.email" class="form-control" placeholder="Enter new email" />
      </div>
      <div class="form-group mb-4">
        <label for="password">Password</label>
        <input type="password" v-model="authStore.client.password" class="form-control" placeholder="Enter Password" />
      </div>
      <div class="form-group mb-4">
        <label for="">name</label>
        <input type="text" v-model="authStore.client.name" class="form-control" placeholder="Enter Name" />
      </div>
      <div>
        <button class="btn btn-success" @click.prevent="update(authStore.client)">Update</button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
//import { storeToRefs } from 'pinia';
import { useAuthStore } from '../store/auth';

export default defineComponent({
  async setup() {
    const authStore = useAuthStore();
    await authStore.processClient();
    console.log(authStore);

    const update = (newClient) => {
      console.log('Updating with info', newClient);
      authStore.updateClient(newClient);
    }

    return {
      authStore,
      update,
    }
  },
})
</script>

<style scoped>
</style>