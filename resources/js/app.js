require('./bootstrap');

window.Vue = require('vue');

import router from './router' // Routes with vue-router

import store from './store' // Store with vuex

import Can from './packages/can' // Package for permissions for role

import HttpCode from './packages/http_code' // Http:status code

import VueBus from 'vue-bus'; 


/**
 * !VUE:
 * Use of extensions or components external
 */
Vue.use(Can)
Vue.use(VueBus)
Vue.use(HttpCode)


/**
 * !RESTRICTING ACCESS TO PAGES 
 */
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.restricted)) {
        if (Vue.can.permission(to.meta)) {
            next()
        } else {
            next({
                path: '/'
            })
            window.message('error', 'No intentes acceder a sitios restringidos para tu rol.', 'title')
        }
    }
    else next()
})


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
new Vue({
    store,
    el: '#app',
    router,
    template: '<App/>',
    components: {
        App: () => import('./App' /* webpackChunkName: "js/vue/app" */),
    }
})
