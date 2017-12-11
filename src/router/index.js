import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Pontos_de_coleta from '@/components/Pontos_de_coleta' 

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
    	path:'/Pontos_de_coleta',
    	name:'Pontos_de_coleta',
    	component:Pontos_de_coleta
    }
  ]
})
