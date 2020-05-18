import Vue from "vue";
import Router from "vue-router";

import { authenticationService } from "../_services/authentication.service";
import { Role } from "./role";

import HomePage from "../home/HomePage";
//layouts
import AdminLayout from "../components/layout/AdminLayout";
//admin components
import Dashboard from "../components/admin/Dashboard";
import Settings from "../components/admin/Settings";
import ProfilePage from "../components/admin/profile/ProfilePage";

//manager
import ListPage from "../components/admin/manager/ListPage";
import AddPage from "../components/admin/manager/AddPage";
import EditPage from "../components/admin/manager/EditPage";

//serivce
import SerivcesListPage from "../components/admin/services/ListPage";
import SerivcesAddPage from "../components/admin/services/AddPage";
import SerivcesEditPage from "../components/admin/services/EditPage";

import LoginPage from "../components/login/LoginPage";
import RegisterPage from "../components/register/RegisterPage";

Vue.use(Router);

export const router = new Router({
  mode: "history",
  routes: [
    { path: "/", component: HomePage, meta: { authorize: [Role.Customer] } },
    { path: "/confirm-email", component: HomePage },
    //admin routes
    {
      path: '/admin',
      component: AdminLayout,
      meta: { authorize: [Role.Admin] },
      children: [
        { path: 'dashboard', component: Dashboard, name: 'Dashboard' },
        { path: 'settings', component: Settings, name: 'Settings' },
        { path: 'profile', component: ProfilePage, name: 'Profile' },
        { path: 'manager', component: ListPage, name: 'Manager' },
        { path: 'manager/add', component: AddPage, name: 'Add' },
        { path: 'manager/edit/:id', component: EditPage, name: 'Edit' },
        { path: 'services', component: SerivcesListPage, name: 'Services' },
        { path: 'service/add', component: SerivcesAddPage, name: 'ServiceAdd' },
        { path: 'service/edit/:id', component: SerivcesEditPage, name: 'ServiceEdit' },
      ]
    },
    { path: "/login", component: LoginPage },
    { path: "/register", component: RegisterPage },

    { path: '/auth/:provider/callback',
      component: {
        template: '<div class="auth-component"></div>'
      }
    },

    // otherwise redirect to home
    { path: "*", redirect: "/" }
  ]
});

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const { authorize } = to.meta;
  const currentUser = authenticationService.currentUserValue;

  if (authorize) {
    if (!currentUser) {
      // not logged in so redirect to login page with the return url
      return next({ path: "/login", query: { returnUrl: to.path } });
    }

    // check if route is restricted by role
    if (authorize.length && !authorize.includes(currentUser.data.user.role_id)) {
      // role not authorised so redirect to home page
      return next({ path: "/" });
    }
  }

  next();
});

