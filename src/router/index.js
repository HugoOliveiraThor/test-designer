import Vue from "vue"
import Router from "vue-router"
import Index from "@/temas/myfarm/templates/Index"
// Não vamos precisar por enquanto
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "Index",
      component: Index,
    },
  ],
})
