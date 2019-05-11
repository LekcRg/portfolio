import Vue from "vue";
import VueRouter from "vue-router";
import axios from "axios";

Vue.use(VueRouter);

const guard = axios.create({
  baseURL: "http://webdev-api.loftschool.com"
});

import skills from "./components/skills";
import works from "./components/works";
import blog from "./components/blog";
import header from "./components/header";
import nav from "./components/nav";

const routes = [
  {
    path: "/",
    components: {
      default: skills,
      header: header,
      nav: nav
    }
  },
  {
    path: "/works",
    components: {
      default: works,
      header: header,
      nav: nav
    }
  },
  {
    path: "/blog",
    components: {
      default: blog,
      header: header,
      nav: nav
    }
  }
];

const router = new VueRouter({ routes });

router.beforeEach((to, from, next) => {
  guard
    .get("/user", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
    .then(response => {
      next();
      console.log("xx");
    })
    .catch(error => {
      console.log("error in router");
      // localStorage.removeItem("token");
      window.location.href = "//google.com";
    });
});

export default router;
