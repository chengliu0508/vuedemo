import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import step from '@/components/step'
import Father from '@/components/Father'
import Editor from '@/components/editor'
import goodslist from '@/components/children/goodslist'
import infolist from '@/components/children/infolist'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'Home', component: Home},
    {path: '/step', name: 'step', component: step},
    {path: '/editor', name: 'editor', component: Editor},
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
