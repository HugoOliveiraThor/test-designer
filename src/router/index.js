import Vue from "vue"
import Router from "vue-router"
import Index from "@/temas/myfarm/templates/Index"
import Button from "@/temas/myfarm/components/button/Button"
// import Index from "@/templates/Index"
// import NotFound from "@/templates/NotFound"
// Não vamos precisar por enquanto
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "Index",
      component: Index,
    },
    // {
    //   path: "*",
    //   name: "NotFound",
    //   component: NotFound,
    // },
  ],
})
