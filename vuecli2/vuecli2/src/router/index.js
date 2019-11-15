import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import First from '@/components/First'
import A from '@/components/A'
import B from '@/components/B'
import A1 from '@/components/A1'
import B1 from '@/components/B1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'first',
      component: First,
      children:[
         {
      path:"/a",
      component:A,
      children:[
        {
          path:'/a1',
          component:A1
        }
      ]
    },
    {
      path:"/b",
      component:B
    },
    {
      path:'/b1',
      component:B1
    }
      ]
    },


  ]
})
