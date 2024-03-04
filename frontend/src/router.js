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
import AboutUs from './pages/AboutUs.vue'
import ContactUs from './pages/ContactUs.vue'
import ProfileSettings from './pages/ProfileSettings.vue';
import ForbiddenPage from './error/ForbiddenPage.vue';
import SignUp from './components/SignUp.vue'
import { getAuth, onAuthStateChanged } from "firebase/auth";

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
      // {
      //   path: 'signup',
      //   name: 'Signup',
      //   component: SignupPage,
      // },
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
        path: 'signup',
        name: 'Signup',
        component: SignUp,
      },
      {
        path: 'profile/settings',
        name: 'ProfileSettings',
        component: ProfileSettings,
        meta: {
          requiresAuth: true,
        }
      },
      {
        path: 'artistProfile',
        name: 'ArtistProfile',
        component: ArtistProfile,
      },
      {
        path: 'aboutUs',
        name: 'AboutUs',
        component: AboutUs,
      },
      {
        path: 'contactUs',
        name: 'ContactUs',
        component: ContactUs,
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
  const routeExists = router.hasRoute(to.name);

  if (to.meta.requiresAuth) {
    if (await getCurrentUser()) {
      if (to.meta.requiresArtist) {

      }
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