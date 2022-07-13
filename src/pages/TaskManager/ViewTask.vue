<template>
  <div class="container">
    <h4 class="mt-4">My Tasks</h4>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Task Name</th>
          <th scope="col">Task Description</th>
          <th scope="col">Start Date</th>
          <th scope="col">Start Time</th>
          <th scope="col">End Date</th>
          <th scope="col">End Date</th>
          <th scope="col">Priority</th>
          <th scope="col">Status</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody v-for="(task, index) in tasks" :key="task.id">
        <tr>
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ task.taskName }}</td>
          <td>{{ task.taskDesc }}</td>
          <td>{{ task.startDate }}</td>
          <td>{{ task.startTime }}</td>
          <td>{{ task.endDate }}</td>
          <td>{{ task.endTime }}</td>
          <td>{{ task.taskPriority }}</td>
          <td>{{ task.taskStatus }}</td>
          <td>
            <button class="btn btn-success edit-btn" @click="editTask(task.id)">Edit</button>
            <button class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal"
              @click="promptDelete(task.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Delete Task</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>Are you sure you want to delete task?</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">No</button>
            <button type="button" class="btn btn-danger" @click="deleteTask">Yes</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useTaskStore } from '../../store/task';
var taskId = null

export default defineComponent({
  setup() {
    const taskStore = useTaskStore();

    function editTask(id) {
      this.$router.push(`/edit-task/${id}`);
    }

    function promptDelete(id) {
      taskId = id
    }

    function deleteTask() {
      taskStore.deleteSelectedTAsk(taskId)
    }

    return {
      taskStore,
      tasks: taskStore.getAllTask,
      editTask,
      promptDelete,
      deleteTask
    }
  },
})
</script>

<style scoped>
  .edit-btn {
    margin-right: 2%;
  }
</style>