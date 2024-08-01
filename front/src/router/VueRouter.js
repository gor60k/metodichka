import { createRouter, createWebHashHistory } from 'vue-router';
import ProxyView from '../views/ProxyView.vue';
import ProductsView from '../views/ProductsView.vue';
import IndividualsView from '../views/IndividualsView.vue';
import OrganizationsView from '../views/OrganizationsView.vue';
import CreateView from '../views/CreateView.vue';

const routes = [
  {
    path: '/',
    name: 'proxy',
    component: ProxyView,
  },
  {
    path: '/products',
    name: 'products',
    component: ProductsView,
  },
  {
    path: '/individuals',
    name: 'individuals',
    component: IndividualsView,
  },
  {
    path: '/organizations',
    name: 'organizations',
    component: OrganizationsView,
  },
  {
    path: '/create',
    name: 'create',
    component: CreateView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
