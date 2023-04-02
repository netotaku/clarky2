import { createRouter, createWebHistory } from 'vue-router'
import Page from '../views/Page.vue'
import sitedata from "../json/site.json"

let routes = [];

for(let r in sitedata){
  routes.push({
    path: r,
    name: sitedata[r].label,
    component: Page
  })
}

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
