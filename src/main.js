import Vue from 'vue';
import Vuex from 'vuex';
import vuetify from './plugins/vuetify';
import router from './plugins/router';
import store from './plugins/store';
import App from './App.vue';

Vue.use(Vuex);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app');
