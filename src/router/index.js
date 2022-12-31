import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TechnologiesView from '../views/TechnologiesView.vue'
import ScopesView from '../views/ScopesView.vue'
import OfferView from '../views/OfferView.vue'
import GoodPracticesView from '../views/GoodPracticesView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/nauka-programowania/technologie',
    name: 'TechnologiesView',
    component: TechnologiesView
  },
  {
    path: '/nauka-programowania/zakres',
    name: 'ScopesView',
    component: ScopesView
  },
  {
    path: '/nauka-programowania/oferta',
    name: 'OfferView',
    component: OfferView
  },
  {
    path: '/nauka-programowania/dobre-praktyki',
    name: 'GoodPracticesView',
    component: GoodPracticesView
  },
]

const router = new VueRouter({
  routes
})

export default router
