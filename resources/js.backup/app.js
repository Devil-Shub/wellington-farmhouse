//Imports
import 'vuetify/dist/vuetify.min.css'; // vuetify style css
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import * as VeeValidate from 'vee-validate';
import App from './App'
import routes from './routes.js'

//Load Plugins
Vue.use(VueRouter)
Vue.use(Vuetify)
Vue.use(VeeValidate)

//Router configuration 
const router = new VueRouter({
  mode: 'history',
  routes 
})

export const vm = new Vue({
    vuetify : new Vuetify(),
    el: '#app',
    render: h => h(App),
    router
});
