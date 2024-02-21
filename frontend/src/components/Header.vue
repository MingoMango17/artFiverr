<template>
  <div class="mx-auto">
    <header
      class="container text-midnight py-4 px-6 flex justify-between items-center"
    >
      <!-- Logo -->

      <img class="w-20 h-auto" src="../assets/logo.svg" alt="logo" />
      <h1 class="font-dm-sans font-extrabold text-3xl text-black">Artefy</h1>

      <!-- Navigation -->
      <nav class="mx-auto flex justify-between items-center">
        <ul class="flex text-black space-x-10 font-dm-sans font-semibold">
          <li
            class="cursor-pointer hover:bg-dark-orange rounded-md py-2 px-3"
            @click="navigateToRoute('Home')"
          >
            About
          </li>
          <li
            v-if="isLoggedIn"
            class="cursor-pointer hover:bg-dark-orange rounded-md py-2 px-3"
           
            @click="navigateToRoute('Hire')"
          >
            Hire
          </li>
          <li class="cursor-pointer hover:bg-dark-orange rounded-md py-2 px-3">
            Services
          </li>
          <li class="cursor-pointer hover:bg-dark-orange rounded-md py-2 px-3">
            Contact
          </li>
        </ul>
      </nav>

      <!-- Profile -->

      <div class="profile relative">
        <FwbAvatar
          v-if="isLoggedIn"
          bordered
          :img="user.profileURL"
          rounded
          class="w-10 h-10 cursor-pointer"
          @click="toggleDropdown"
        />
        <div
          v-if="isLoggedIn"
          v-show="showDropdown"
          class="absolute mt-2 right-0 bg-white rounded shadow-md"
        >
          <!-- Dropdown content goes here -->
          <a
            @click="navigateToRoute('YourRouteName')"
            class="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            >Profile</a
          >
          <a
            @click="handleSignout"
            class="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            >Logout</a
          >
        </div>
      </div>

      <!-- Login and Sign Up Buttons -->
      <div class="buttons flex space-x-10">
        <button
          v-if="!isLoggedIn"
          class="login-btn font-dm-sans hover:bg-dark-orange rounded-md py-2 px-3"
          @click="navigateToRoute('LogIn')"
        >
          Log In
        </button>

        <button
          v-if="!isLoggedIn"
          class="signup-btn bg-army-green text-white rounded-md py-2 px-3 font-dm-sans"
          @click="navigateToRoute('Signup')"
        >
          Sign Up
        </button>
        <button v-if="isLoggedIn" class="login-btn font-dm-sans hover:bg-dark-orange rounded-md py-2 px-3 "
          @click="handleSignout">Log
          Out</button>
      </div>
    </header>
    <hr />
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { getAuth, signOut } from "firebase/auth";
import { ref, computed } from "vue";
import { FwbAvatar } from "flowbite-vue";

const router = useRouter();
const auth = getAuth();

const open = ref(false);

const store = useStore();

const isLoggedIn = computed(() => store.getters.checkLogin);
const user = computed(() => store.getters.getUser);
const showDropdown = ref(false);

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
};
console.log('user here ' + user.name);


const navigateToRoute = (routeName) => {
  router.push({ name: routeName });
  showDropdown.value = false; // close the dropdown after navigation
};

const handleSignout = () => {
  signOut(auth).then(() => {
    console.log("Successfully logged out");
    store.dispatch("logout");
    router.push({ name: "Home" });
    showDropdown.value = false; // close the dropdown after logout
  });
};


</script>
