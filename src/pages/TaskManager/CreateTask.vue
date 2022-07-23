<!-- Template component  containing a parent container, a header a  form element for input, router link helps with navigation, button,a v-model attribute that provides  2-way data binding for our reactive references ,  the v-model attribute- makes it easier to bind reactive data to a form input so that whether the data is modified by the user via the input or by the code the data always in sync. .  ---->
<template>
  <div class="container">
    <div class="form-content-area mt-4">
      <h4>Create a new Task</h4>
      <p>Want to View already created tasks, <router-link to="/my-tasks">Click here</router-link>
      </p>
      <form>
        <div class="form-group mb-4">
          <label for="taskTitle">Task Title</label>
          <input type="text" class="form-control" v-model="taskTitle" placeholder="Enter Task Title">
        </div>
        <div class="form-group mb-4">
          <label for="taskDescription">Task Description</label>
          <input type="text" class="form-control" v-model="taskDesc" placeholder="Enter Task Description">
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group mb-4">
              <label for="startTime">Start Time</label>
              <input type="time" class="form-control" v-model="startTime" placeholder="Enter task start time">
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group mb-4">
              <label for="startDate">Start Date</label>
              <input type="date" class="form-control" v-model="startDate" placeholder="Enter Task task start date">
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group mb-4">
              <label for="endtime">End Time</label>
              <input type="time" class="form-control" v-model="endTime" placeholder="Enter task end time">
            </div>
            <div class="col-md-6">
              <div class="form-group mb-4">
                <label for="endDate">End Date</label>
                <input type="date" class="form-control" v-model="endDate" placeholder="Enter Task task end date">
              </div>
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
          <button class="btn btn-success" @click.prevent="createTask">Create Task</button>
        </div>
      </form>
    </div>
  </div>
</template>

<!-- by creating a new reactive ref & initializing it to an empty string, const key=ref('') store & adding v-model to our input  and assiging const values, a 2-way data binding was established btw the store and the input form, that way they always stay in-sync. same logic with the register -->

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

//listen to event and changing value
    function getTaskPriorityVal(event) {
      taskPriority = event.target.value
    }

    function createTask() {
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

<!-- // to be able to access the value of a kind of reactive reference I needed to use a special property named this.value, because vue uses proxies in other to create reactive data items.value.push({id:item.this.value.lenght + 1, label: newInput.this.value}) whenever you call a ref function what is returned is a reactive object with the actual data stored on the value property. -->