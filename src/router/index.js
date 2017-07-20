import TopBar from '.././components/TopBar.vue'
import LoginView from '.././components/Login.vue'

const routes = [
  {
    path: '/login',
    component: LoginView
  },
  {
    path: '/',
    component: TopBar,
    name: ''
  }
]

export default routes
