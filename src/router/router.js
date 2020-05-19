import Vue from 'vue'
import VueRouter from 'vue-router'

import vCatalog from '../components/Catalog/v-catalog'
import vCart from '../components/Cart/v-cart'
import vFeature from '../components/Feature/v-feature'


Vue.use(VueRouter);

  const routes = [
  {
    path: '/',
    name: 'Catalog',
    component: vCatalog
  },
  {
    path: '/cart',
    name: 'Cart',
    component: vCart,
    props: true
  },
  {
    path: '/feature',
    name: 'Feature',
    component: vFeature,
    props: true
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
