import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({

    state: {
        user: {},
        productSearch: '',
    },
    getters: {
        User: state => state.user,
        productSearchBy: state => state.productSearch,
    },
    mutations: {
        set_User(state, data) {
            state.user = data;
            console.log('set user', state.user);
        },
        set_productSearch(state, val) {
            state.productSearch = val;
        }

    },
    actions: {

    }

})
