import Todo from './App.vue'
const routes = [
  {
    name: 'Top',
    path: '/',
    component: Todo,
  },
  {
    name: 'Top',
    path: '/complete',
    component: Todo,
  },
  {
    name: 'Top',
    path: '/uncomplete',
    component: Todo,
  },
];

export default routes;