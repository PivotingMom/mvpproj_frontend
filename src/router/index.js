import { createWebHistory, createRouter } from "vue-router";
import Home from '../pages/Home.vue';
import Register from '../pages/Register.vue';
import Dashboard from '../pages/Dashboard.vue';
//pages from task manager folder
import CreateTask from '../pages/TaskManager/CreateTask.vue';
import ViewTask from '../pages/TaskManager/ViewTask.vue';
import EditTask from '../pages/TaskManager/EditTask.vue';
import CreateEntry from '../pages/Journal/CreateEntry.vue';
import ViewEntry from '../pages/Journal/ViewEntry.vue';
import EditEntry from '../pages/Journal/EditEntry.vue';
import Profile from '../pages/Profile.vue';

import { WrapAsyncComponent } from "./helpers";

const routes = [
  {
    path: '/my-profile',
    name: 'Profile',
    component: WrapAsyncComponent(Profile)
  },
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
    component: WrapAsyncComponent(ViewTask),
    meta: {
      requiresAuth: true
    }
  },

  {
    path: '/my-tasks',
    name: 'ViewTask',
    component: WrapAsyncComponent(ViewTask),
    meta: {
      requiresAuth: true
    }
  },
    {
    path: '/edit-task/:id?',
    name: 'EditTask',
    component: WrapAsyncComponent(EditTask),
    meta: {
      requiresAuth: true
    }
  },
    {
    path: '/create-entry',
    name: 'CreateEntry',
    component: CreateEntry,
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: '/my-entry',
    name: 'ViewEntry',
    component: WrapAsyncComponent(ViewEntry),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/edit-entry/:id?',
    name: 'EditEntry',
    component: WrapAsyncComponent(EditEntry),
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