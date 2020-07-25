/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

// an EventHub to share events between components
Vue.prototype.$hub = new Vue();

import VueInternationalization from 'vue-i18n';
import Locale from './vue-i18n-locales.generated';
Vue.use(VueInternationalization);
const lang = document.documentElement.lang.substr(0, 2);
const i18n = new VueInternationalization({
    locale: lang,
    messages: Locale
});
// register the plugin on vue
import Toasted from 'vue-toasted';

Vue.use(Toasted)

let success = {
    theme: "toasted-primary",
    type: success,
    position: "top-right",
    duration: 5000,
    className: ['bg-success', 'text-white']
}
// register the toast with the custom message
Vue.toasted.register('Success',
    (payload) => {
        // if there is no message passed show default message
        if (!payload.message) {
            return "Oops! Something Went Wrong.."
        }
        // if there is a message show it with the message
        return payload.message;
    },
    success
)

let error = {
    theme: "toasted-primary",
    type: 'error',
    position: "top-right",
    duration: 5000,

}
Vue.toasted.register('errors',
    (payload) => {
        // if there is no message passed show default message
        if (!payload.message) {
            return "Oops! Something Went Wrong.."
        }
        // if there is a message show it with the message
        return payload.message;
    },
    error
)
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

//Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('app', require('../js/App.vue').default);
Vue.component('preloader', require('./components/base/preloader.vue').default);
Vue.component('datatable', require('./components/base/datatable.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
//import router from './Router/router.js';

import router from './Router/router.js';
import store from './Store/store.js';


const app = new Vue({
    el: '#app',
    router,
    i18n,
    store

});
