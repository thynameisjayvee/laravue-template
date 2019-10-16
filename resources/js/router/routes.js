function page (path) {
  return () => import(/* webpackChunkName: '' */ `~/pages/${path}`).then(m => m.default || m)
}

export default [
  {
    path: '/',
    name: 'welcome',
    component: page('welcome.vue')
  },
  {
    path: '/welcome2',
    name: 'welcome2',
    meta: {
      // layout: 'basic'
    },
    component: page('welcome2.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: page('login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: page('register.vue')
  },
  {
    path: '*',
    component: page('errors/404.vue')
  }
]
