import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Index from '../Index.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Index',
    component: Index,
  },
];

const ROUTER = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default ROUTER;
