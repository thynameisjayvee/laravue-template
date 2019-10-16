import Vue from 'vue'
import routes from './routes'
import Router from 'vue-router'
import Meta from 'vue-meta'

Vue.use(Router)
Vue.use(Meta)

const router = new Router({
  mode: "history",
  routes
})

export default router
