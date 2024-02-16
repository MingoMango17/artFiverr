import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/HomePage.vue';
import InternalPageRoot from './components/InternalPageRoot.vue';
import SignupPage from './components/SignupPage.vue';
import UserHomePage from './components/UserHomePage.vue';

const routes = [
    {
        path: '/',
        component: InternalPageRoot,
        children: [
          {
            path: '',
            name: 'Home',
            component: HomePage
          },
          {
            path: 'signup',
            name: 'Signup',
            component: SignupPage,
          },
          {
            path: 'hire',
            name: 'Hire',
            component: UserHomePage,
          }
          // Add more routes as needed
        ]
      }
];

const router = createRouter({
    history: createWebHistory(),
    routes
  });
  
  export default router;