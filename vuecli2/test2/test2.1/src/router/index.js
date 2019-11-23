import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/home'
import A from '@/components/A'
import B from '@/components/B'
import A1 from '@/components/A1'


Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      // name: 'HelloWorld',
      // component: HelloWorld
      name:"Home",
      component:Home,
      children:[
        {
          path:'/a',//路径
          component: A,
          children:[
            {
              path:'/a1',
              component:A1
            }
          ]
        },
        {
          path:'/b',
          component:B
        }
      ]
    },

  ]
})
