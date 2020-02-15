import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/results',
      name: 'results',
      component: () => import(/* webpackChunkName: "results" */ '@/views/Results/Results.vue'),
    },
    {
      path: '/search',
      name: 'search',
      component: () => import(/* webpackChunkName: "search" */ '@/views/Search/Search.vue'),
    },
    {
      path: '/file',
      name: 'file',
      component: () => import(/* webpackChunkName: "file" */ '@/views/File/File.vue'),
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
