import Vue from "vue";
import VueRouter from "vue-router";
import store from "../Store/store.js";
Vue.use(VueRouter);

const loadLayout = layout => () =>
    import(`../components/layouts/${layout}.vue`);
const loadView = view => () => import(`../views/${view}.vue`);
const loadFront = view => () => import(`../views/front/${view}.vue`);

const routes = [
    {
        path: "/",
        component: loadLayout("AdminLayout"),
        children: [
            {
                path: "",
                component: loadView("dashboard")
            },
            {
                path: "/product",
                component: loadView("product")
            },
            {
                path: "/review",
                component: loadView("review")
            },
            {
                path: "/profile/:id",
                component: loadView("profile_id"),
                name: "profile"
            },
            {
                path: "/user",
                component: loadView("userList"),
                name: "user"
            }
        ]
    },
    {
        path: "/home",
        component: loadLayout("FrontLayout"),

        children: [
            {
                path: "",
                component: loadFront("index")
            },
            {
                path: "/singleproduct/:id",
                component: loadView("singleproduct"),
                name: "singleproduct"
            }
        ]
    },
    {
        path: "/login",
        component: loadFront("login")
    },
    {
        path: "/*",
        component: loadView("error")
    }
];

const router = new VueRouter({
    routes,
    hasbang: false,
    mode: "history"
});
// router.beforeEach((to, from, next) => {
//     //console.log('Global -- beforeEach - fired')

//     // re-route
//     if (to.path === '/dashboard') {
//         console.log('Global -- go index')
//         console.log('pp', typeof (store.getters))
//         console.log('pp', store.state.user)
//         next('/')
//     }
//     // Abort navigation based on some criteria:
//     else if (to.path === '/dashboard' && store.state.user.userType == 'Admin') {
//         console.log('Global -- admin')

//         next('/dashboard')
//     } else {
//         next()
//     }
// })
export default router;
