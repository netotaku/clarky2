import { createRouter, createWebHistory } from 'vue-router'
import Page from '../views/Page.vue'
import four0four from '../views/404.vue'
import sitedata from "../json/site.json"

let routes = [];

for(let r in sitedata.routes){
  routes.push({
    path: r,
    name: sitedata.routes[r].label,
    component: Page
  })
}

routes.push({
  path: '/:pathMatch(.*)*',
  name: "404",
  component: four0four
})

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
