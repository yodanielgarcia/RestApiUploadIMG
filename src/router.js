/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'

import CreateIMG from '@/views/CreateIMG'
import searchIMG from '@/views/searchIMG'

Vue.use(Router)
export default new Router({
    mode: 'history',
    routes: [{
            path: '/searchIMG',
            name: 'searchIMG',
            component: searchIMG,
        },
        {

            path: '/CreateIMG',
            name: 'CreateIMG',
            component: CreateIMG,
        }
    ]
})