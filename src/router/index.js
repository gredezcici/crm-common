import TopBar from '.././components/TopBar.vue'
import LoginView from '.././components/Login.vue'
import QueryForm from '../components/Views/QueryForm.vue'
import Home from '../components/Views/Home.vue'

const routes = [
  {
    path: '/login',
    component: LoginView
  },
  {
    path: '/',
    component: TopBar,
    name: 'TopBar',
    children: [
      {
        path: 'home',
        alias: '',
        component: Home,
        name: 'Home Page',
        meta: {description: 'Home'}
      },
      {
        path: 'queryBuilder',
        alias: '',
        component: QueryForm,
        name: 'Query',
        meta: {description: 'query page'}
      }
    ]
  }
]

export default routes
