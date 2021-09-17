import Todo from './App.vue'
const routes = [
  {
    name: 'all',
    path: '/',
    component: Todo,
  },
  {
    name: 'completed',
    path: '/completed',
    component: Todo,
  },
  {
    name: 'incomplete',
    path: '/incomplete',
    component: Todo,
  },
];

export default routes;