import Vue from "vue";
import App from "./App.vue";
import VueResource from "vue-resource";
import VueRouter from "vue-router";
import Routes from "./routes.js";

Vue.use(VueResource);
Vue.use(VueRouter);

//Register routes
const router = new VueRouter({
  routes: Routes,
  mode: "history"
});

//custom directive globally

// Vue.directive("rainbow", {
//   bind(el, binding, vnode) {
//     el.style.color =
//       "#" +
//       Math.random()
//         .toString()
//         .slice(2, 8);
//   }
// });

// Vue.directive("theme", {
//   bind(el, binding, vnode) {
//     if (binding.value === "wide") {
//       el.style.maxWidth = "1200px";
//     } else if (binding.value === "narrow") {
//       el.style.maxWidth === "400px";
//     }
//     if (binding.arg === "column") {
//       el.style.background = "#ddd";
//       el.style.padding = "20px";
//     }
//   }
// });

//Filters
Vue.filter("to-uppercase", function(value) {
  return value.toUpperCase();
});

new Vue({
  el: "#app",
  render: h => h(App),
  router: router
});
