import TopBar from '.././components/TopBar.vue'
import LoginView from '.././components/Login.vue'
import QueryBuilder from '.././components/Views/QueryBuilder.vue'

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
        component: QueryBuilder,
        name: 'QueryBuilder',
        meta: {description: 'query page'}
      }
    ]
  }
]

export default routes
