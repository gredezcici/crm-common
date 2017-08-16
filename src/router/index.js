import TopBar from '.././components/TopBar.vue'
import LoginView from '.././components/Login.vue'
import QueryForm from '../components/Views/QueryForm.vue'

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
        path: 'queryBuilder',
        alias: '',
        component: QueryForm,
        name: 'My DashBoard',
        meta: {description: 'query page'}
      }
    ]
  }
]

export default routes
