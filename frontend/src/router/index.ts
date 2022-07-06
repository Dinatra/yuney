import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import Profile from "@/views/Profile.vue";
import { useAuthStore } from "@/store/auth";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const auth = useAuthStore();
  const isLogged: boolean = auth.isLogged;
  const protectedRoute: any = ["Profile"];
  const offlineRoute: any = ["Login", "Home", "Register"];
  const routeName = to.name;

  if (offlineRoute.includes(routeName) && !isLogged) next();
  else if (protectedRoute.includes(routeName) && isLogged) next();
  else if (offlineRoute.includes(routeName) && isLogged) {
    next("/profile");
  } else {
    next("/login");
  }
});

export default router;
