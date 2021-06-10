import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/Login.vue'),
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('../views/Signup.vue'),
    },
    {
        path: '/detalle/:id',
        name: 'ProductoDetalle',
        component: () => import('../views/ProductoDetalle.vue')
    },
    {
        path: '/inventario',
        name: 'Inventario',
        component: () => import('../views/Administrador/Inventario.vue'),
    },
    {
        path: '/ventas',
        name: 'Ventas',
        component: () => import('../views/Administrador/Ventas.vue'),
    },
    {
        path: '/compras',
        name: 'Compras',
        component: () => import('../views/ComprasUsuario.vue'),
    },
    {
        path: '/carrito',
        name: 'Carrito',
        component: () => import('../views/Carrito.vue'),
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('../views/Administrador/Dashboard.vue')
    },
    {
        path: '/search/:search',
        name: 'Search',
        component: () => import('../views/SearchProductos.vue')
    },
    {
        path: '/nosotros',
        name: 'Nosotros',
        component: () => import('../views/SobreNosotros.vue'),
    }, 
    {
        path: '/:categoria',
        name: 'Categoria',
        component: () => import('../views/Categoria.vue'),
    },   
    {
        path: '*',
        name: 'Error',
        component: () => import('../views/Error404.vue')
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.name == 'Login' || to.name == 'Register') {
        if (localStorage.getItem('auth') == 'true') {
            next({ path: '/' });
        } else {
            next();
        }
    } else if ((to.name == 'Inventario' || to.name == 'Ventas' || to.name == "Dashboard") && localStorage.getItem('rol') != 'administrador') {
        next({ path: from.path });
    } else if (to.name == 'Compras') {
        if (localStorage.getItem('auth') == 'false') {
            next({ path: '/login' });
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router;
