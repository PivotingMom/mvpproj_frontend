<!-- Template component  containing a parent container, a header a  table element for listing , a row element that helps in responsive state , button,a v-for directive that makes it easy to loop over and render arrays and objects in a template  and it is also reactive like the v-model---->
    <template>
      <div class="container">
        <h4 class="mt-4">My Tasks</h4>
        <div class="table-responsive">
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
<!-- because i want my list to be reactive/dynamic I have to store them as a reactive reference that way they be reactive to changes, so by writing "i will likean li for  each item in items li v-for <"items in items >{{items}}li, item being a variable. And for vue to be efficient when re-rendering, its recommended to add a special key attribute to all loops, set to a unique id per item such as an ID from a database. <li v-for="item in items" key="item.id'>{{item.label}}</li> (attribute binding)--li v-for="{id,label} in items" :key="id">{{label}} (destrctured) </li>we need to https://vueschool.io/lessons/vue-fundamentals-capi-list-rendering-in-vue -->
            <tbody v-for="(task, index) in tasks" :key="task.id">
              <tr>
                <th scope="row">{{ index + 1 }}</th>
                <td>{{ task.taskTitle }}</td>
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
    
          <div class="arrow bounce" v-if="windowWidth < 960">
            <i class="bi-arrow-right"></i>
          </div>
        </div>
    
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
    import "bootstrap-icons/font/bootstrap-icons.css"
import { defineComponent } from 'vue'
import { useTaskStore } from '../../store/task';
var taskId = null


    // //responsiveness I went searching for how to make my screen responsive in vue because the container styling wasn't giving me was I wanted. then i found https://stackoverflow.com/questions/47219272/how-can-i-use-window-size-in-vue-how-do-i-detect-the-soft-keyboard
    //https://thewebdev.info/2021/08/14/how-to-get-the-window-size-whenever-it-changes-in-a-vue-js-app/

export default defineComponent({
  data() {
    return {
      windowWidth: window.innerWidth,
    }
  },

  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize)
    })
  },

  methods: {
    onResize() {
      this.windowWidth = window.innerWidth
    }
  },

 async  setup() {
    const taskStore = useTaskStore();
//to fulfill the editTask method I want this instance to push the router to the edit-task api ending with the dynamic id as param/args
    function editTask(id) {
      this.$router.push(`/edit-task/${id}`);
    }

    function promptDelete(id) {
      taskId = id
    }

    function deleteTask() {
      taskStore.deleteSelectedTAsk(taskId)
    }

    await taskStore.fetchAllTasks();
    console.log(taskStore.getAllTask)

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

    .bi-arrow-right {
      float: right;
      font-size: 30px;
    }

    .arrow {
      text-align: center;
      margin: 8% 0;
    }

    .bounce {
      -moz-animation: bounce 2s infinite;
      -webkit-animation: bounce 2s infinite;
      animation: bounce 2s infinite;
    }

    @keyframes bounce {

      0%,
      20%,
      40%,
      60%,
      80%,
      100% {
        transform: translateX(0);
      }

      40% {
        transform: translateX(-30px);
      }

      60% {
        transform: translateX(-15px);
      }
    }
  </style>
