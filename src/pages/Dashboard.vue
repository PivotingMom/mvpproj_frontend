<!-- Template component  containing a parent container, a form elements with and button - in order to take advantage of the inbuilt support. the page serves as the nav within this app with the the vue of vue routers decared in index.js https://router.vuejs.org/.  ---->
<template>
  <div class="container row mt-4">
    <div class="col-md-4">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Task Manager</h5>
          <p class="card-text">Ensure you have a productive life by managing your time with this tool</p>
          <router-link to="/create-task" class="btn btn-primary">Visit app</router-link>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Shopping List</h5>
          <p class="card-text">A dedicated space to manage your next grocery list, so that you don't leave anything
            out.
          </p>
          <router-link to="/create-list" class="btn btn-primary">Visit app</router-link>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Journal</h5>
          <p class="card-text">Make a reflective note of your day, it's helps for healthy mental health</p>
          <router-link to="/create-entry" class="btn btn-primary">Visit app</router-link>
        </div>
      </div>
    </div>
  </div>
</template>