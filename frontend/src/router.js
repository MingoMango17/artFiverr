import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/HomePage.vue';
import InternalPageRoot from './components/InternalPageRoot.vue';
import SignupPage from './components/SignupPage.vue';
import UserHomePage from './components/UserHomePage.vue';
import LogInPage from './components/LogInPage.vue';

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
            path: 'home',
            name: 'User Home',
            component: UserHomePage,
          },
          {
            path: 'login',
            name: 'LogIn',
            component: LogInPage,
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