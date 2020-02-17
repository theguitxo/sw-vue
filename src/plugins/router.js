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
    // view with the result of a search and, if it's necessary, the search form
    {
      path: '/results',
      name: 'results',
      component: () => import(/* webpackChunkName: "results" */ '@/views/Results/Results.vue'),
    },
    // view with only the search form
    {
      path: '/search',
      name: 'search',
      component: () => import(/* webpackChunkName: "search" */ '@/views/Search/Search.vue'),
    },
    // view that shows all the information about an item
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
