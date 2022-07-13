<template>
  <div class="container">
    <div class="form-content-area mt-4">
      <h4>Create a new Task</h4>
      <p>Want to View already created tasks, <router-link to="/my-tasks">Click here</router-link>
      </p>
      <form>
        <div class="form-group mb-4">
          <label for="taskTitle">Task Title</label>
          <input type="text" class="form-control" placeholder="Enter Task Title">
        </div>
        <div class="form-group mb-4">
          <label for="taskDescription">Task Description</label>
          <input type="text" class="form-control" placeholder="Enter Task Description">
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group mb-4">
              <label for="startDate">Start Date</label>
              <input type="time" class="form-control" placeholder="Enter Task Title">
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group mb-4">
              <label for="startTime">Start Time</label>
              <input type="date" class="form-control" placeholder="Enter Task Title">
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group mb-4">
              <label for="endDate">End Date</label>
              <input type="time" class="form-control" placeholder="Enter Task Title">
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group mb-4">
              <label for="endTime">End Time</label>
              <input type="date" class="form-control" placeholder="Enter Task Title">
            </div>
          </div>
        </div>
        <div class="form-group mb-4">
          <label for="taskPriority">Task Priority</label>
          <select class="form-control">
            <option>Select priority</option>
            <option value="High">High</option>
            <option value="Normal">Normal</option>
            <option value="Low">Low</option>
          </select>
        </div>
        <div class="form-group mb-4">
          <label for="taskPriority">Task Status</label>
          <select class="form-control">
            <option>Select Status</option>
            <option value="Pending">Pending</option>
            <option value="Closed">Closed</option>
            <option value="Completed">Completed</option>
            <option value="Declined">Declined</option>
          </select>
        </div>
        <div class="form-group">
          <button class="btn btn-success">Create Task</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useTaskStore } from '../../store/task';
export default defineComponent({
  setup() {
    const taskStore = useTaskStore();
    var taskPriority = '';
    const taskTitle = ref('');
    const taskDesc = ref('');
    const startDate = ref('');
    const startTime = ref('');
    const endDate = ref('');
    const endTime = ref('');
    
    function getTaskPriorityVal (event) {
      taskPriority = event.target.value
    }
    function createTask () {
      var payload = {
        taskTitle: taskTitle.value,
        taskDesc: taskDesc.value,
        startDate: startDate.value,
        startTime: startTime.value,
        endDate: endDate.value,
        endTime: endTime.value, 
        taskPriority
      }
      taskStore.createTask(payload)
    }
    return {
      taskStore,
      taskTitle,
      taskDesc,
      startDate,
      startTime,
      endDate,
      endTime,
      getTaskPriorityVal,
      createTask
    }
  },
})
</script>