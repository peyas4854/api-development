import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const loadLayout = layout => () => import(`../components/layouts/${layout}.vue`)
const loadView = view => () => import(`../views/${view}.vue`)
const routes = [{
        path: '/',
        component: loadLayout("BackendLayout"),
        children: [
        {path: '',component: loadView("dashboard")},
        {path: '/product',component: loadView("product")},
        { path: '/review',component: loadView("review")},
        ]
    },
    {
        path: '/frontend',
        component: loadLayout("DefaultLayout"),

    },

]

const router = new VueRouter({
    routes,
    hasbang: false,
    mode: 'history',
});
export default router
