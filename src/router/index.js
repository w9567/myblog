import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
// import Head from '@/components/page/Head'
// import Foot from '@/components/page/Foot'
// import Music from '@/components/comm/Music'
// import Mine from '@/components/comm/Mine'
// import Love from '@/components/comm/LoveGallery'
// import MessageWall from '@/components/comm/MessageWall'
// import Notes from '@/components/comm/Notes'
// import SimplePersonal from '@/components/comm/SimplePersonal'
const SimplePersonal = () => import('@/components/comm/SimplePersonal')
const Notes = () => import('@/components/comm/Notes')
const MessageWall = () => import('@/components/comm/MessageWall')
const Love = () => import('@/components/comm/LoveGallery')
const Mine = () => import('@/components/comm/Mine')
const Music = () => import('@/components/comm/Music')
const Foot = () => import('@/components/page/Foot')
const Head = () => import('@/components/page/Head')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Main,
      children: [
        {
          path: '/Head',
          component: Head
        },
        {
          path: '/Foot',
          component: Foot
        },
        {
          path: '/Music',
          component: Music
        },
        {
          path: '/SimplePersonal',
          component: SimplePersonal
        }
      ]
    },
    {
      path: '/Mine',
      component: Mine
    },
    {
      path: '/Love',
      component: Love
    },
    {
      path: '/Notes',
      component: Notes
    },
    {
      path: '/MessageWall',
      component: MessageWall
    }
  ]
})
