import Vue from 'vue'
import VueRouter from 'vue-router'

/***********************************************************************************
 *                                                          * VUE: vue-router config
 ***********************************************************************************/
Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'guest',
            component: () => import("../layouts/Guest" /* webpackChunkName: "js/layouts/guest.layout" */),
            meta: {},
            children: [
                {
                    path: '/',
                    name: 'init',
                    component: () => import('../pages/Init'  /* webpackChunkName: "js/pages/init.page" */),
                    meta: {
                        restricted: false,
                        //permission:''
                    },
                },
            ]
        }
    ]
});
