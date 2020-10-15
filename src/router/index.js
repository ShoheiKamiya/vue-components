import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import GridTablePage from '@/views/GridTablePage';
import ChartsPage from '@/views/ChartsPage';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/01-grid-table',
    component: GridTablePage,
  },
  {
    path: '/03-charts',
    component: ChartsPage,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
