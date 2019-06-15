/* eslint-disable */
import 'vue-multiselect/dist/vue-multiselect.min.css'
import './assets/scss/main.scss'

import App from './App.vue'
import Vue from 'vue'
import router from './router'
import store from './store'
import i18n from './i18n'
import VeeValidate from './VeeValidate'
import AxiosPlugin from '@/plugins/axios.js'
import LodashPlugin from '@/plugins/lodash.js'
import momentPlugin from '@/plugins/moment.js'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(AxiosPlugin, '$axios')
Vue.use(LodashPlugin) // use: this.$lodash...
Vue.use(momentPlugin)

Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
    i18n,
    VeeValidate,
    router,
    store,
    render: h => h(App)
}).$mount('#app')