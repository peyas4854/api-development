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
        set_User(
            state,
            user
        ) {
            console.log('set user');
            // console.log('state1', state);
            // console.log('payload1', user);
            state.user = user;
        }

    },
    actions: {

    }

})
