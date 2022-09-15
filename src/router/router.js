import { createRouter, createWebHashHistory } from "vue-router";

import courseNews from '../components/forNews/courseNews.vue'
import DkNews from '../components/forNews/DkNews.vue'
import ITNews from '../components/forNews/ITNews.vue'
import vakansiyNews from '../components/forNews/vakansiyNews.vue'
import hammasi from '../hammasi.vue'
let routes = [
    {
path:'/',
component:hammasi
    },
 
    {
        path:'/courses',
        name:'courses',
        component:courseNews
    },
    {
        path:'/dkNews',
        name:'dkNews',
        component:DkNews
    },
    {
        path:'/ITnews',
        name:'ITnews',
        component:ITNews
    },
    {
        path:'/vakansynews',
        name:'vakansynews',
        component:vakansiyNews
    },
    {
        path:'/:catchAll(.*)',
        name:'notFound',
    component:hammasi
    }
 
]


const router = createRouter({
    routes,
    history: createWebHashHistory(),
    

})

export default router