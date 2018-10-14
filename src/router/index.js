import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import map from '@/components/map'
import Father from '@/components/Father'
import goodslist from '@/components/children/goodslist'
import infolist from '@/components/children/infolist'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/map',
      component: map
    },
    {
      path: '/father',
      component: Father,
      redirect: '/father/goodslist',
      children: [
        {
          path: 'goodslist',
          component: goodslist
        },
        {
          path: 'infolist',
          component: infolist
        }
      ]
    }
  ]
})
