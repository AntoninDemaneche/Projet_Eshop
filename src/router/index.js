import Vue from "vue";
import Router from 'vue-router';
import Home from "../views/Home.vue";
import Dashboard from "../components/Dashboard.vue";
import NewEmployee from "../components/NewEmployee.vue";
import ViewEmployee from "../components/ViewEmployee.vue";
import EditEmployee from "../components/EditEmployee.vue";
import One_city from "../views/One_city.vue";
import City from "../views/City.vue";
import Lyon from "../views/Lyon.vue"
import Login from '../components/Login';
import Register from '../components/Register';

import * as firebase from "firebase/app";
import "firebase/auth";

Vue.use(Router);

let router = new Router({
 routes: [
    {
      path: "/home",
      name: "home",
      component: Home,
    },
    {
      path: "/lyon",
      name: "lyon",
      component: Lyon,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: "/register",
      name: "register",
      component: Register,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: "/one_city",
      name: "one_city",
      component: One_city,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: "/city",
      name: "city",
      component: City,
      props: true,
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import(/* webpackChunkName: "about" */ "../views/About.vue")
    },
    {
      path: "/dash",
      name: "dashboard",
      component: Dashboard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/new",
      name: "new-employee",
      component: NewEmployee,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/view",
      name: "view-employee",
      component: ViewEmployee,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/edit/:employee_id",
      name: "edit-employee",
      component: EditEmployee,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/:employee_id",
      name: "view-employee",
      component: ViewEmployee
    }
    
    ]
});

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if(!firebase.auth().currentUser ){
      next({
        path:'/login',
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      next();
    }
  } else if(to.matched.some(record => record.meta.requiresGuest)) {
    if(firebase.auth().currentUser) {
      next({
        path:'/dash',
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;