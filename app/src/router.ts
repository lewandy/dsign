import { createRouter, createWebHistory, Router } from "vue-router";

const Contracts = () => import("@/pages/Documents.vue");
const Contacts = () => import("@/pages/Contacts.vue");

const routes = [
  { path: "/", name: "contracts.list", component: Contracts },
  { path: "/contacts", name: "contacts.list", component: Contacts },
];

const router: Router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
