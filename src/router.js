import firebase from 'firebase'
import Vue      from 'vue'
import Router   from 'vue-router'
import App      from './views/app/App.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: App,
      beforeEnter: (to, from, next) => {
        if (firebase.auth().currentUser) {
          next()
        } else {
          next({ name: 'SignLogin' })
        }
      },
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import(/* webpackChunkName: "Home" */ './views/app/Home.vue')
        }
      ]
    },
    {
      path: '/sign',
      name: 'Sign',
      component: () => import(/* webpackChunkName: "Sign" */ './views/sign/Sign.vue'),
      beforeEnter: (to, from, next) => {
        if (!firebase.auth().currentUser) {
          next()
        } else {
          next({ name: 'Home' })
        }
      },
      children: [
        {
          path: 'login',
          name: 'SignLogin',
          component: () => import(/* webpackChunkName: "SignLogin" */ './views/sign/SignLogin.vue')
        },
        {
          path: 'up',
          name: 'SignUp',
          component: () => import(/* webpackChunkName: "SignUp" */ './views/sign/SignUp.vue')
        }
      ]
    }
  ]
})
export default router;
