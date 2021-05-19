import Vue from 'vue';
import Vuex from 'vuex'
import axios from 'axios';

axios.defaults.withCredentials = true;

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        drawer: true,
        user: null,
    },
    mutations: {
        SET_USER(state, user){
            state.user = user;
        },
    },
    actions: {
        async getUser({ commit }){
            await axios.get('/api/user').then( response => {
                commit('SET_USER', response.data);
                localStorage.setItem('auth', 'true');
            }).catch( () => {
                commit('SET_USER', null);
                localStorage.setItem('auth', 'false');
            });
        },
    },
    getters: {
        
    }
});