import Vue from "vue";
import VueRouter from "vue-router";
import axios from "axios";

Vue.use(VueRouter);

import skills from "./components/skills";
import works from "./components/works";
import blog from "./components/blog";
import header from "./components/header";
import nav from "./components/nav";

const routes = [
  {
    path: "/admin",
    components: {
      default: skills,
      header: header,
      nav: nav
    }
  },
  {
    path: "/admin/works",
    components: {
      default: works,
      header: header,
      nav: nav
    }
  },
  {
    path: "/admin/blog",
    components: {
      default: blog,
      header: header,
      nav: nav
    }
  }
];

const router = new VueRouter({ routes });

const guard = axios.create({
  baseURL: "http://webdev-api.loftschool.com"
});

router.beforeEach((to, from, next) => {
  guard
    .get("/user", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
    .then(response => {
      next();
    })
    .catch(error => {
      window.location.href = "//google.com";
    });
});

export default new VueRouter({ routes, mode: "history" });
