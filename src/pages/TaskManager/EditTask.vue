<template>
  <div class="container">
    <div class="form-content-area mt-4">
      <h4>Edit Task</h4>
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
          <button class="btn btn-success">Update Task</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useTaskStore } from '../../store/task';
export default defineComponent({
  setup() {
    const taskStore = useTaskStore();
    const route = useRoute();
    taskStore.fetchSingleTask(route.params.id)
    var form = ref(taskStore.getSingleTask);
    function update () {
      taskStore.update_task(route.params.id, form)
    }
    function getTaskPriority (event) {
      form.value.taskPriority = event.target.value
    }
    function getTaskStatus (event) {
      form.value.taskStatus = event.target.value
    }
    return {
      task: taskStore.getSingleTask,
      form,
      update,
      getTaskPriority,
      getTaskStatus
    }
  },
})
</script>
