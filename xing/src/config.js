import index from './components/index.vue'
import home from './components/home.vue'
import course from './components/course.vue'
import mystudy from './components/mystudy.vue'
import setting from './components/setting.vue'
import login from './components/login.vue'
import register from './components/register.vue'
import other from './components/other.vue'
module.exports = function (VueRouter) {
  const router = new VueRouter({
    mode: 'history',
    routes: [
      {
        path: '/',
        redirect: {name: 'home'}
      },
      {
        name: 'other',
        path: '/other',
        component: other
      },
      {
        name: 'login',
        path: '/login',
        component: login
      },
      {
        name: 'register',
        path: '/register',
        component: register
      },
      {
        name: 'setting',
        path: '/setting',
        component: setting
      },
      {
        name: 'index',
        path: '/index',
        component: index,
        children: [
          {
            name: 'home',
            path: 'home',
            component: home
          },
          {
            name: 'course',
            path: 'course',
            component: course
          },
          {
            name: 'mystudy',
            path: 'mystudy',
            component: mystudy
          }
        ]
      },
      {
        name: 'error',
        path: '*',
        redirect: '/'
      }
    ]
  })
  return router
}
