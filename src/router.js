import Todo from './App.vue'
const routes = [
  {
    name: 'all',
    path: '/',
    component: Todo,
  },
  {
    name: 'finished',
    path: '/finished',
    component: Todo,
  },
  {
    name: 'unfinish',
    path: '/unfinish',
    component: Todo,
  },
];

export default routes;