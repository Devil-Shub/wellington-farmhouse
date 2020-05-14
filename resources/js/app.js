import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/dist/vuetify.min.css';
import Vue from "vue";
import Vuelidate from "vuelidate";
import Vuetify from 'vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'

import { router } from "./_helpers/router";
import App from "./app/App";

// setup fake backend
import { configureFakeBackend } from "./_helpers/fake-backend";
configureFakeBackend();

Vue.use(VueAxios, axios)
Vue.use(Vuelidate);
Vue.use(Vuetify);

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
