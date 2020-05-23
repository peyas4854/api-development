import Vue from 'vue'
import VueRouter from 'vue-router'
// import store from '../Store/store.js';
Vue.use(VueRouter);

const loadLayout = layout => () => import(`../components/layouts/${layout}.vue`)
const loadView = view => () => import(`../views/${view}.vue`)
const loadFront = view => () => import(`../views/front/${view}.vue`)



const routes = [

    {
        path: '/',
        component: loadLayout("AdminLayout"),
        children: [{
                path: '',
                component: loadView("dashboard"),

            },
            {
                path: '/product',
                component: loadView("product"),

            },
            {
                path: '/review',
                component: loadView("review"),

            },
            {
                path: '/profile/:id',
                component: loadView("profile_id"),
                name: 'profile',

            },

            // {
            //     path: '/*',
            //     component: loadView("error")
            // },
        ],

    },
    {
        path: '/index',
        component: loadLayout("FrontLayout"),

        children: [

            {
                path: '',
                component: loadFront("index")
            },
            {
                path: '/singleproduct/:id',
                component: loadView("singleproduct"),
                name: 'singleproduct'

            },

        ]

    },
    {
        path: '/login',
        component: loadFront("login")
    },

]

const router = new VueRouter({
    routes,
    hasbang: false,
    mode: 'history',
});

export default router
