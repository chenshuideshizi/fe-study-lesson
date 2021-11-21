import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from './views/Home'
// import News from './views/News'
import Login from './views/Login'
import NewsAdd from './views/NewsAdd'
import NewsDetail from './views/NewsDetail'
import NotFound from './views/NotFound'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/news',
        component: () => import('./views/News'),
        // meta: {
        //     requiresAuth: true,
        // },
        children: [
            {
                path: '',
                component: NewsAdd,
                name: 'newsDefault'
            },
           {
                path: 'add',
                component: NewsAdd,
                name: 'newsAdd'
           },
           {
                path: 'detail/:id',
                component: NewsDetail,
                name: 'newsDetail',
                beforeEnter(to, from, next) {
                    console.log('路由独享守卫 news detail')
                    next()
                }
           }
        ]
    },
    {
        path: '/login',
        component: Login,
    },
    {
        path: '*',
        component: NotFound,
    },
]

const router = new VueRouter({
    routes,
    // mode: 'history'
})

router.beforeEach((to, from, next) => {
    console.log('全局守卫 beforeEach', to.path)
    const needAuthed = to.matched.some(record => record.meta.requiresAuth)
    if(needAuthed) {
        const isLogin = localStorage.getItem('user')
        if(isLogin) {
            next()
        } else {
            next('/login')
        }
    } else {
        next()
    }
})

router.beforeResolve((to, from, next) => {
    console.log('全局守卫 beforeResolve', to.path)
    next()
})

router.afterEach((to) => {
    console.log('全局守卫 afterEach', to.path)
})

export default router