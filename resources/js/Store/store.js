import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({

    state: {
        user: {

        },
    },
    getters: {
        User: state => state.user,
    },
    mutations: {
        set_User(state, data) {
            console.log('set user');
            state.user = data;
        }

    },
    actions: {

    }

})
