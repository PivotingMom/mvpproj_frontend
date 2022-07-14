<template>
  <div>
    <div class="logo-container">
      <img src="./assets/OrganizMe.png" class="logo" />
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
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
</style>
