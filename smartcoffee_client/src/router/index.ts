import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from '../components/Tabs.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/view'
    },
    {
        path: '/view',
        component: () => import('@/components/Tabs.vue'),
        children: [
            {
                path: '',
                redirect: '/view/brew'
            },
            {
                path: 'brew',
                component: () => import('@/components/brew/Brew.vue')
            },
            {
                path: 'history',
                component: () => import('@/components/history/History.vue')
            },
            {
                path: 'social',
                component: () => import('@/components/social/Social.vue')
            }
        ]
    },
    {
        path: '/home',
        component: () => import('@/components/brew/Brew.vue')
    },
    {
        path: '/tabs/',
        component: Tabs,
        children: [
            {
                path: '',
                redirect: '/tabs/tab1'
            },
            {
                path: 'tab1',
                component: () => import('@/views/Tab1.vue')
            },
            {
                path: 'tab2',
                component: () => import('@/views/Tab2.vue')
            },
            {
                path: 'tab3',
                component: () => import('@/views/Tab3.vue')
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
