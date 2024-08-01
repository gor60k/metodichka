import { createRouter, createWebHistory } from 'vue-router';
import IndividualsView from "@/views/individuals-view/IndividualsView";
import PocupatelsView from "@/views/pocupatels-view/PocupatelsView";
import OrganizationsView from "@/views/organizations-view/OrganizationsView";
import SelladresssView from "@/views/selladresss-view/SelladresssView";
import StudListView from "@/views/stud-view/stud-list-view/StudListView";
import StudView from "@/views/stud-view/stud-view/StudView";
import StudCreateView from "@/views/stud-view/stud-view/StudCreateView";
import ProductsView from "@/views/product-view/ProductsView";
import ProxyListView from "@/views/proxy-view/proxy-list-view/ProxyListView";
import ProxyView from "@/views/proxy-view/proxy-view/ProxyView";
import ProxyCreateView from "@/views/proxy-view/proxy-view/ProxyCreateView";
import { ROUTE_PATHS } from '@/utils/routes';

const routes = [
  {
    path: '/',
    component: ProxyListView
  },
  {
    path: '/|',
    component: StudListView
  },
  {
    path: ROUTE_PATHS.products,
    component: ProductsView
  },
  {
    path: ROUTE_PATHS.individuals,
    component: IndividualsView
  },
  {
    path: '/organizations',
    component: OrganizationsView
  },
  {
    path: ROUTE_PATHS.pocupatels,
    component: PocupatelsView
  },
  {
    path: ROUTE_PATHS.selladresss,
    component: SelladresssView
  },
  {
    path: ROUTE_PATHS.proxy.list,
    component: ProxyListView
  },
  {
    path: ROUTE_PATHS.proxy.proxy,
    component: ProxyView
  },
  {
    path: ROUTE_PATHS.create,
    component: ProxyCreateView
  },
  {
    path: ROUTE_PATHS.stud.stud,
    component: StudView
  },
  {
    path: ROUTE_PATHS.create1,
    component: StudCreateView
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
