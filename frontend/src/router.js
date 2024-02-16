import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import InternalPageRoot from './pages/InternalPageRoot.vue';
import SignupPage from './pages/SignupPage.vue';
import UserHomePage from './pages/UserHomePage.vue';
import ChatPage from './pages/ChatPage.vue'
import HireArtistPage from './pages/HireArtistPage.vue';
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
            path: 'hire',
            name: 'Hire',
            component: UserHomePage,
          },
          {
            path: 'chat',
            name: 'Chat',
            component: ChatPage,
          },
          {
            path: 'artist/:artistId',
            name: 'Artist',
            component: HireArtistPage,
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