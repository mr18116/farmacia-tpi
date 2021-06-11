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
        actualizandoCarrito: false,
        addCarrito: false,
        compra: false,
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
        },
        SET_AC(state, estado){
            state.actualizandoCarrito = estado;
        },
        SET_ADDC(state, estado){
            state.addCarrito = estado;
        },
        SET_COMPRA(state, estado){
            state.compra = estado;
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
            axios.get('/api/carrito-user/' + state.user.id).then(async res => {
                await commit('SET_CARRITO', res.data);
                commit('SET_AC', false);
                commit('SET_ADDC', false);
            }).catch( () => {
                commit('SET_AC', false);
                commit('SET_ADDC', false);
            });
        },
        addProducto({ dispatch, state, commit }, { producto_id, cantidad }){
            commit('SET_AC', true);
            commit('SET_ADDC', true);
            axios.post('/api/carrito-producto', {
                carrito_id: state.carrito.id,
                producto_id: producto_id,
                cantidad: cantidad
            }).then( () => {
                dispatch('getCarrito');
            }).catch( () => {
                commit('SET_AC', false);
                commit('SET_ADDC', false);
            });
        },
        cantidadProducto({ dispatch, state, commit }, { cantidad, producto_id }){
            commit('SET_AC', true);
            axios.put('/api/carrito-producto/' + state.carrito.id + '/' + producto_id, {
                cantidad: cantidad
            }).then( () => {
                dispatch('getCarrito');
            }).catch( () => {
                commit('SET_AC', false);
            });
        },
        quitarProducto({ dispatch, state, commit}, producto_id){
            commit('SET_AC', true);
            axios.delete('/api/carrito-producto/' + state.carrito.id + '/' + producto_id).then( () => {
                dispatch('getCarrito');
            }).catch( () => {
                commit('SET_AC', false);
            });
        },
        quitarTodosProductos({ dispatch, state, commit}){
            commit('SET_AC', true);
            axios.delete('/api/carrito-producto/' + state.carrito.id).then( () => {
                dispatch('getCarrito');
            }).catch( () => {
                commit('SET_AC', false);
            });
        },
        comprando({commit}, estado){
            commit('SET_COMPRA', estado);
        }
    },
    getters: {
        productosCarrito: state => {
            if (state.carrito != null) {
                return state.carrito.carrito_has_productos;
            } else {
                return [];
            }
        },
        totalCarrito: state => {
            let total = 0;
            if (state.carrito != null) {
                if (state.carrito.carrito_has_productos.length > 0) {
                    state.carrito.carrito_has_productos.forEach( p => {
                        total += p.cantidad*p.producto.precio;
                    });;
                }
            }
            return Math.round(total * 100)/100;
        },
        nProductosCarrito: state => {
            if (state.carrito != null) {
                if (state.carrito.carrito_has_productos.length > 0) {
                    let cantidad = 0;
                    state.carrito.carrito_has_productos.forEach( p => {
                        cantidad += p.cantidad;
                    });
                    return cantidad;
                } else {
                    return "0";
                }
            } else {
                return "0";
            }
        }
    }
});