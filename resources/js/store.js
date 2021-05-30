import Vue from 'vue';
import Vuex from 'vuex'
import axios from 'axios';

axios.defaults.withCredentials = true;

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        drawer: true,
        user: null,
        rol: null,
        carrito: null,
    },
    mutations: {
        SET_USER(state, user){
            state.user = user;
        },
        SET_ROL(state, rol){
            state.rol = rol
        },
        SET_CARRITO(state, carrito){
            state.carrito = carrito;
        }
    },
    actions: {
        async getUser({ commit }){
            await axios.get('/api/user').then( async response => {
                commit('SET_USER', response.data);
                localStorage.setItem('auth', 'true');
                await axios.get('/api/rol-user/' + response.data.id).then( res => {
                    commit('SET_ROL', res.data.rol);
                    localStorage.setItem('rol', res.data.rol);
                });
                axios.get('/api/carrito-user/' + response.data.id).then( res => {
                    commit('SET_CARRITO', res.data);
                });
            }).catch( () => {
                commit('SET_USER', null);
                commit('SET_ROL', null);
                commit('SET_CARRITO', null);
                localStorage.setItem('auth', 'false');
                localStorage.setItem('rol', 'null');
            });
        },
        getCarrito({ commit, state }){
            axios.get('/api/carrito-user/' + state.user.id).then( res => {
                commit('SET_CARRITO', res.data);
            });
        },
        addProducto({ dispatch, state }, producto_id, cantidad){
            axios.post('/api/carrito-producto', {
                carrito_id: state.carrito.id,
                producto_id: producto_id,
                cantidad: cantidad
            }).then( () => {
                dispatch('getCarrito');
            });
        },
        cantidadProducto({ dispatch, state }, cantidad, producto_id){
            axios.put('/api/carrito-producto/' + state.carrito.id + '/' + producto_id, cantidad).then( () => {
                dispatch('getCarrito');
            });
        },
        quitarProducto({ dispatch, state}, cantidad, producto_id){
            axios.delete('/api/carrito-producto' + state.carrito.id + '/' + producto_id, cantidad).then( () => {
                dispatch('getCarrito');
            });
        }
    },
    getters: {
        
    }
});