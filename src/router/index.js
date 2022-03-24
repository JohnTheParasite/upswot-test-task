import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Todo from '../views/Todo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/todo',
    name: 'Todo',
    component: Todo
  }
]

const router = new VueRouter({
  mode: "history",
  routes
})

function isLogged() {
  return localStorage.getItem("logged") === "true"
}

router.beforeEach((to, from, next) => {
  if (to.name !== "Login" && !isLogged()) next({ name: "Login" })
  if (to.name === "Login" && isLogged()) next({ name: "Todo" })
  next()
})

export default router
