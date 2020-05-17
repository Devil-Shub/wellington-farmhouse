import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/dist/vuetify.min.css';
// Import one of available themes
import 'vue-toast-notification/dist/theme-default.css';
import Vue from "vue";
import Vuelidate from "vuelidate";
import Vuetify from 'vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueToast from 'vue-toast-notification';
import VueFeatherIcon from 'vue-feather-icon'


import { router } from "./_helpers/router";
import App from "./app/App";

// setup fake backend
import { configureFakeBackend } from "./_helpers/fake-backend";
configureFakeBackend();

Vue.use(VueAxios, axios)
Vue.use(Vuelidate);
Vue.use(Vuetify);
Vue.use(VueToast);
Vue.use(VueFeatherIcon)
global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;

new Vue({
  vuetify : new Vuetify({
      defaultAssets: {
        font: true,
        icons: 'mdi'
      },
      icons: {
        iconfont: 'mdi',
      }
    }),
  el: "#app",
  router,
  render: h => h(App)
});
