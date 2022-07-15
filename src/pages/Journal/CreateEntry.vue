<template>
  <div class="container">
    <div class="form-content-area mt-4">
      <h4>Create a new note</h4>
      <p>Want to View already created note, <router-link to="/my-notes">Click here</router-link>
      </p>
      <form>
        <div class="form-group mb-4">
          <label for="Title">entryTitle</label>
          <input type="entrytext" class="form-control" v-model="entryTitle" placeholder="Enter Task Title">
        </div>
        <div class="form-group mb-4">
          <label for="Content">Content</label>
          <input type="text" class="form-control" v-model="createNote" placeholder="Create Note">
        </div>
        </div>
    </div>
    <div class="form-group mb-4">
      <label for="taskPriority">Task Priority</label>
      <select class="form-control" @change="getTaskPriorityVal($event)">
        <option>Select priority</option>
        <option value="High">High</option>
        <option value="Normal">Normal</option>
        <option value="Low">Low</option>
      </select>
    </div>
    <div class="form-group">
      <button class="btn btn-success" @click.prevent="createNote">Create Note</button>
    </div>
    </form>
  </div>
  </div>
</template>