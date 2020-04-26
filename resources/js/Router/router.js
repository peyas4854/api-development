import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import home1 from '../components/ExampleComponent';
import home2 from '../components/home2';
import home3 from '../page/home1';


const routes = [
  { path: '/home1', component: home1 },
  { path: '/home2', component: home2 },
  { path: '/home3', component: home3 },
]

const router = new VueRouter({
    routes,
    hasbang:false,
    mode:'history',
});
export default router
