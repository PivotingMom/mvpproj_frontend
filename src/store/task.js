//import { useLocalStorage } from '@vueuse/core';
import { defineStore } from 'pinia';
import { createNewTask, getAllTasks, deleteSingleTask, getSingleTask, updateTask } from '../services/task.service';

/*
const defaultTasks =  [
        {
            id: 1,
            taskTitle: 'Testing',
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
            taskTitle: 'Testing 2',
            taskDesc: 'Hello world lorem ipsum Hello world lorem ipsum',
            startDate: '09/11/2005',
            startTime: '19:45',
            endDate: '09/09/2010',
            endTime: '08:45',
            taskPriority: 'Low',
            taskStatus: 'Completed'
        }
    ];
*/

export const useTaskStore = defineStore('task', {
  //id: 'task',
  state: () => ({
    //tasks: useLocalStorage('tasks', defaultTasks),
    tasks: [],
    singleTask: {},
    /*
    singleTask: {
        id: 2,
        taskTitle: 'Testing 2',
        taskDesc: 'Hello world lorem ipsum Hello world lorem ipsum',
        startDate: '09/11/2005',
        startTime: '19:45',
        endDate: '09/09/2010',
        endTime: '08:45',
        taskPriority: 'Low',
        taskStatus: 'Completed'
    },
    */
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
        //this.isSuccess = true
        setTimeout(() => {
          window.location.href = '/my-tasks'
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
            console.log('All tasks data')
            console.log(response);
            this.tasks = response.data.map(item => {
                return {
                    id: item[0],
                    clientId: item[1],
                    taskTitle:  item[2],   
                    taskDesc: item[3],
                    startDate: item[4],
                    startTime: item[5],
                    endDate: item[6],
                    endTime: item[7],
                    taskPriority: item[8],
                    taskStatus: item[9]
                }
            })
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
            const item = response.data;
            console.log(response.data)
            this.singleTask = {
                    id: item[0],
                    clientId: item[1],
                    taskTitle:  item[2],   
                    taskDesc: item[3],
                    startDate: item[4],
                    startTime: item[5],
                    endDate: item[6],
                    endTime: item[7],
                    taskPriority: item[8],
                    taskStatus: item[9]
            }
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

/*
watch(pinia.state, (state)=> {
    localStorage.setItem ("tasks", JSON.stringify, state);
}, { deep: true } );
*/