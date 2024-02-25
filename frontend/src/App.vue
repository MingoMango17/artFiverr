<template>
  <div class="bg-brownish h-lvh">
    <router-view />
  </div>
</template>

<script setup>
// import HelloWorld from './components/HelloWorld.vue';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useStore } from 'vuex';

const store = useStore();
const isLoggedIn = ref(false);
const router = useRouter();

let auth;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      store.dispatch('login');
    } else {
      store.dispatch('logout')
    }
  })
});
</script> 