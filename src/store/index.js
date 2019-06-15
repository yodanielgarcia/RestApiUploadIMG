import Vue from 'vue'
import Vuex from 'vuex'
/* eslint-disable */
// Module navbar
import navbar from './modules/navbar/menu'
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        navbar
    },
    state: {
        i18nReady: false
    },
    mutations: {
        i18nReady(state) {
            state.i18nReady = true
        }
    },
    actions: {

    }
})