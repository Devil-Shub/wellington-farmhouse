// app.js

require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';

import App from './components/App.vue';
Vue.use(VueAxios, axios);

import HomeComponent from './components/pages/HomeComponent.vue';

const routes = [
  {
      name: 'home',
      path: '/',
      component: HomeComponent
  }
];

const router = new VueRouter({ mode: 'history', routes: routes});
const app = new Vue(Vue.util.extend({ router }, App)).$mount('#app');