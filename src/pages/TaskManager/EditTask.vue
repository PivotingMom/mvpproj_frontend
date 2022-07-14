<template>
  <div class="container">
    <div class="form-content-area mt-4">
      <h4>Edit Task</h4>
      <form @submit.prevent="update(task)">
        <div class="form-group mb-4">
          <label for="taskTitle">Task Title</label>
          <input type="text" class="form-control" placeholder="Enter Task Title" v-model="task.taskTitle">
        </div>
        <div class="form-group mb-4">
          <label for="taskDescription">Task Description</label>
          <input type="text" class="form-control" placeholder="Enter Task Description" v-model="task.taskDesc">
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group mb-4">
              <label for="startTime">Start Time</label>
              <input type="time" class="form-control" v-model="task.startTime">
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group mb-4">
              <label for="startDate">Start Date</label>
              <input type="date" class="form-control" v-model="task.startDate">
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group mb-4">
              <label for="endTime">End Time</label>
              <input type="time" class="form-control" v-model="task.endTime">
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group mb-4">
              <label for="endTime">End Time</label>
              <input type="date" class="form-control" v-model="task.endDate">
            </div>
          </div>
        </div>
        <div class="form-group mb-4">
          <label for="taskPriority">Task Priority</label>
          <select class="form-control" v-model="task.taskPriority">
            <option>Select priority</option>
            <option value="High">High</option>
            <option value="Normal">Normal</option>
            <option value="Low">Low</option>
          </select>
        </div>
        <div class="form-group mb-4">
          <label for="taskStatus">Task Status</label>
          <select class="form-control" v-model="task.taskStatus">
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
//import { storeToRefs } from 'pinia';
export default defineComponent({
  async setup() {
    const taskStore = useTaskStore();
    const route = useRoute();
    await taskStore.fetchSingleTask(route.params.id)

    //const { singleTask } = storeToRefs(taskStore);
    const form = ref(taskStore.getSingleTask);

    function update (task) {
      console.log(task);
      taskStore.update_task(route.params.id, task)
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
