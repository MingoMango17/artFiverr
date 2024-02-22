import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import InternalPageRoot from './pages/InternalPageRoot.vue';
import SignupPage from './pages/SignupPage.vue';
import UserHomePage from './pages/UserHomePage.vue';
import ChatPage from './pages/ChatPage.vue'
import HireArtistPage from './pages/HireArtistPage.vue';
import LogInPage from './components/LogInPage.vue';
// import ArtistSetupPage from './pages/ArtistSetupPage.vue';
import ArtistProfile from './pages/ArtistProfile.vue';

import ProfileSettings from './pages/ProfileSettings.vue';
import ForbiddenPage from './error/ForbiddenPage.vue';

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useStore } from 'vuex';
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
        meta: {
          requiresAuth: true,
        }
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
        meta: {
          requiresAuth: true,
        }
      },
      {
        path: 'login',
        name: 'LogIn',
        component: LogInPage,
      },
      {
        path: 'profileSettings',
        name: 'ProfileSettings',
        component: ProfileSettings,
      },
      {
        path: 'artistProfile',
        name: 'ArtistProfile',
        component: ArtistProfile,
      },
      // {
      //   path: 'artist/setup',
      //   name: 'Setup',
      //   component: ArtistSetupPage,
      //   requiresAuth: true,
      // },
      
      // Add more routes as needed
    ],
  },
  {
    path: '/access-denied/',
    name: 'AccessDenied',
    component: ForbiddenPage,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});


const store = useStore();

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    )
  })
}

router.beforeEach(async (to, from, next) => {
  // if (to.matched.some((record) => record.meta.requiresAuth)) {
  //   if (await getCurrentUser()) {
  //     next();
  //   }
  // } else {
  //   next();
  // }
  const routeExists = router.hasRoute(to.name);

  if (to.meta.requiresAuth) {
    if (await getCurrentUser()) {
      next();
    } else{
      next({name: 'AccessDenied'});
    }
  } else if(!routeExists){
    next({name: 'AccessDenied'});
  } else {
    next();
  }
})
export default router;