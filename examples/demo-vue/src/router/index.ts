import { createRouter, createWebHistory } from 'vue-router'
import DemoBody from '../components/DemoBody.vue'
import DemoDiv from '../components/DemoDiv.vue'

import type { RouteRecordRaw, RouteLocation } from 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    beforeRouteUpdate?(to: RouteLocation, from: RouteLocation): void,
  }
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'demo-body',
    component: DemoBody,
  },
  {
    path: '/demo-div',
    name: 'demo-div',
    component: DemoDiv,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
