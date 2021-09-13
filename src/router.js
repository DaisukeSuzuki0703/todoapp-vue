import Todo from './App.vue'
const routes = [
  {
    name: 'Top',
    path: '/',
    component: Todo,
  },
  {
    name: 'Top',
    path: '/finished',
    component: Todo,
  },
  {
    name: 'Top',
    path: '/unfinish',
    component: Todo,
  },
];

export default routes;