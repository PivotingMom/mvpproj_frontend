import { defineStore } from 'pinia';
import { createNewTask, getAllTasks, deleteSingleTask, getSingleTask, updateTask } from '../services/task.service';

export const useTaskStore = defineStore({
  id: 'task',
  state: () => ({
    tasks: [
        {
            id: 1,
            taskName: 'Testing',
            taskDesc: 'Hello world lorem ipsum Hello world lorem ipsum',
            startDate: '09/09/2003',
            startTime: '09:45',
            endDate: '09/09/2004',
            endTime: '08:45',
            taskPriority: 'High',
            taskStatus: 'Pending'
        },
        {
            id: 2,
            taskName: 'Testing 2',
            taskDesc: 'Hello world lorem ipsum Hello world lorem ipsum',
            startDate: '09/11/2005',
            startTime: '19:45',
            endDate: '09/09/2010',
            endTime: '08:45',
            taskPriority: 'Low',
            taskStatus: 'Completed'
        }
    ],
    singleTask: {
        id: 2,
        taskName: 'Testing 2',
        taskDesc: 'Hello world lorem ipsum Hello world lorem ipsum',
        startDate: '09/11/2005',
        startTime: '19:45',
        endDate: '09/09/2010',
        endTime: '08:45',
        taskPriority: 'Low',
        taskStatus: 'Completed'
    },
    isSuccess: false,
    isError: false
  }),
  getters: {
    getAllTask : (state) => {
        return state.tasks
    },
    getSingleTask: (state) => {
        return state.singleTask
    }
  },
  actions: {
    async createTask(taskPayload) {
      await createNewTask(taskPayload)
      .then((response) => {
        console.log(response.data)
        alert("Task created successfully")
        this.isSuccess = true
        setTimeout(() => {
          window.location.href = '/'
        }, 2000);
      })
      .catch((err)=> {
        console.log(err)
        alert("Unable to create task")
      })
    },
    async fetchAllTasks() {
        await getAllTasks()
        .then((response) => {
            this.tasks = response.data.tasks
        })
        .catch((err) => {
            console.log(err)
            this.tasks = []
        })
    },
    async deleteSelectedTAsk(taskId) {
        await deleteSingleTask(taskId)
        .then((response) => {
            alert("Task deleted successfully");
            window.location.reload();
            console.log(response.data)
        })
        .catch((err) => {
            alert("Unable to delete task");
            console.log(err)
        })
    },
    async fetchSingleTask(taskId) {
        await getSingleTask(taskId)
        .then((response) => {
            this.singleTask = response.data;
            console.log(response.data)
        })
        .catch((err) => {
            this.singleTask = {}
            console.log(err)
        })
    },
    async update_task(taskId, payload) {
        await updateTask(taskId, payload)
        .then((response) => {
            console.log(response.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }
  }
})