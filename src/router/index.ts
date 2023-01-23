// Composables
import { createRouter, createWebHistory } from 'vue-router';
import Main from '../layouts/default/Main.vue';
import NewTask from '../layouts/default/NewTask.vue';
import DeletedTasks from '../layouts/default/DeletedTasks.vue'
import DeleteWindow from '../layouts/default/DeleteWindow.vue'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
  },
  {
    path: '/neue-aufgabe',
    name: 'NewTask',
    component: NewTask,
  },
  {
    path: '/geloeschte-aufgaben',
    name: "DeletedTasks",
    component: DeletedTasks
  },
  {
    path: '/aufgabe-loeschen/:id',
    name: "DeleteWindow",
    component: DeleteWindow
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
