import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/layouts/mainLayout.vue')
    },
    {
        path: '/search-home-page',
        name: 'search-home',
        component: () => import('@/views/SearchHomePage.vue')
    },
    {
        path: '/inner-page',
        name: 'inner-page',
        component: () => import('@/views/InnerPage.vue')
    },
    {
        path: `/inner-photo-slider/:id`,
        name: 'photo-slider',
        component: () => import('@/components/commons/PhotoSlider.vue')
    },

    {
        path: '/register',
        name: 'register',
        component: () => import('@/views/sign/SignUp.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/sign/SignIn.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router