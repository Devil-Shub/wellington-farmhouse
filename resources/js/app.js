import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/dist/vuetify.min.css';
// Import one of available themes
import 'vue-toast-notification/dist/theme-default.css';
import Vue from "vue";
import Vuelidate from "vuelidate";
import Vuetify from 'vuetify';
import VueSocialauth from 'vue-social-auth';
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueToast from 'vue-toast-notification';
import VueFeatherIcon from 'vue-feather-icon'
import * as VueGoogleMaps from "vue2-google-maps";
import { router } from "./_helpers/router";
import store from './store';
import moment from 'moment';
import VueMoment from 'vue-moment'
import App from "./app/App";

// Import Vue FilePond
import vueFilePond from 'vue-filepond';
// Import FilePond styles
import 'filepond/dist/filepond.min.css';
// Import FilePond plugins
// Please note that you need to install these plugins separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginImageCrop from 'filepond-plugin-image-crop';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';
import FilePondPluginFileEncode from 'filepond-plugin-file-encode';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';

// Create component
const FilePond = vueFilePond(
  FilePondPluginImageExifOrientation,
  FilePondPluginImagePreview,
  FilePondPluginImageCrop,
  FilePondPluginFileEncode,
FilePondPluginFileValidateType
);

// setup fake backend
import { configureFakeBackend } from "./_helpers/fake-backend";
configureFakeBackend();

Vue.use(VueAxios, axios);
Vue.use(VueSocialauth, {
  providers: {
    google: {
      clientId: '1016499886624-ukbs4u4khrer8mv1fi20foo348rkb3kr.apps.googleusercontent.com',
      redirectUri: 'http://wellington.leagueofclicks.com/auth/google/callback' // Your client app URL
    },
    facebook: {
      clientId: '802496520156159',
      redirectUri: 'http://127.0.0.1:8000/auth/facebook/callback' // Your client app URL
    }
  }
});
Vue.use(VueGoogleMaps, {
  load: {
    apiKey: 'AIzaSyAQEbFYBxoq9qSepomK_1KEM7TxU3vSOyw',
    libraries: "places" // necessary for places input
  }
})

import JwPagination from 'jw-vue-pagination';
Vue.component('jw-pagination', JwPagination);

Vue.use(Vuelidate);
Vue.use(Vuetify);
Vue.use(VueToast);
Vue.use(VueFeatherIcon)

Vue.filter('formatDate', function(value) {
    if (value) {
        return moment(String(value)).format('MM/DD/YYYY')
    }
});

//chat system

import Echo from 'laravel-echo'

window._ = require('lodash');
window.Popper = require('popper.js').default;
window.Pusher = require('pusher-js');

try {
  window.$ = window.jQuery = require('jquery');

  require('bootstrap');
} catch (e) {}

window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
let token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
  window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
  console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: 'd608cfd55d17f1ce3c41',
    cluster: 'ap2',
    encrypted: true
});

//chat system

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
  store,
  render: h => h(App)
});
