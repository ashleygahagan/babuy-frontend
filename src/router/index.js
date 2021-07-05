import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import UsersShow from "../views/users/Show.vue";
import UsersEdit from "../views/users/Edit.vue";
import ProductsIndex from "../views/products/Index.vue";
import ProductsNew from "../views/products/New.vue";
import ProductsShow from "../views/products/Show.vue";
import ProductsEdit from "../views/products/Edit.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/signup",
    name: "signup",
    component: Signup,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/logout",
    name: "logout",
    component: Logout,
  },
  {
    path: "/users/:id",
    name: "users-show",
    component: UsersShow,
  },
  {
    path: "/users/:id/edit",
    name: "users-edit",
    component: UsersEdit,
  },
  {
    path: "/products",
    name: "products-index",
    component: ProductsIndex,
  },
  {
    path: "/products/new",
    name: "products-new",
    component: ProductsNew,
  },
  {
    path: "/products/:id",
    name: "products-show",
    component: ProductsShow,
  },
  {
    path: "/products/:id/edit",
    name: "products-edit",
    component: ProductsEdit,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
