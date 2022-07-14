import { createWebHistory, createRouter } from "vue-router";
import Home from '../pages/Home.vue';
import Register from '../pages/Register.vue';
import Dashboard from '../pages/Dashboard.vue';
//pages from task manager folder
import CreateTask from '../pages/TaskManager/CreateTask.vue';
import ViewTask from '../pages/TaskManager/ViewTask.vue';
import EditTask from '../pages/TaskManager/EditTask.vue';
import { suspenseHack } from "./helpers";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/create-task',
    name: 'CreateTask',
    component: CreateTask,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/my-tasks',
    name: 'ViewTask',
    component: suspenseHack(ViewTask),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/edit-task/:id?',
    name: 'EditTask',
    component: suspenseHack(EditTask),
    meta: {
      requiresAuth: true
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;