import Vue from 'vue'
import Router from 'vue-router'
import Area from '@/components/Area'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Area',
      component: Area
    }
  ]
})
