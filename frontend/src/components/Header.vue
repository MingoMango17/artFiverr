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
            Home
          </li>
          <li
            class="cursor-pointer hover:bg-dark-orange rounded-md py-2 px-3"
            @click="navigateToRoute('AboutUs')"
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
          <li
            class="cursor-pointer hover:bg-dark-orange rounded-md py-2 px-3"
            @click="navigateToRoute('ContactUs')"
          >
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
          class="absolute mt-2 right-1/2 transform translate-x-1/2 bg-white rounded-lg shadow-md font-dm-sans w-56 z-10"
        >
          <!-- Dropdown content goes here -->

          <div class="name-container flex my-3 mx-3">
            <img
              :src="user.profileURL"
              alt="profile-pic"
              class="rounded-full h-8 w-8"
            />
            <div class="infos block">
              <h1 class="text-sm font-medium ml-3 my-auto">
                {{ user.name }}
              </h1>
              <h1 class="text-xs text-text-gray ml-3 my-auto">
                {{ user.email }}
              </h1>
            </div>
          </div>

          <hr />
          <div
            class="px-4 py-2 text-gray-800 hover:bg-gray-200 flex hover:cursor-pointer"
            @click="navigateToRoute('ProfileSettings')"
          >
            <!-- Image icon -->
            <img
              src="../assets/settings.png"
              alt="Settings Icon"
              class="w-4 h-4 mr-2"
            />
            <h1 class="text-sm">Profile Settings</h1>
          </div>
          <div
            class="px-4 py-2 text-gray-800 hover:bg-gray-200 flex hover:cursor-pointer"
          >
            <!-- Image icon -->
            <img
              src="../assets/upgrade.png"
              alt="Upgrade Icon"
              class="w-4 h-4 mr-2"
            />
            <h1 class="text-sm">Transactions</h1>
          </div>
          <div
            class="px-4 py-2 text-gray-800 hover:bg-gray-200 flex hover:cursor-pointer"
            @click="handleSignout"
          >
            <!-- Image icon -->
            <img
              src="../assets/sign-out.png"
              alt="Settings Icon"
              class="w-4 h-4 mr-2"
            />
            <h1 class="text-sm">Sign Out</h1>
          </div>
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

if (!user.value.profileURL) {
  user.value.profileURL =
    "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png";
}

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
};

const navigateToRoute = (routeName) => {
  router.push({ name: routeName });
  showDropdown.value = false; // close the dropdown after navigation
};

const handleSignout = () => {
  signOut(auth).then(() => {
    console.log("Successfully logged out");
    store.dispatch("logout");
    router.push({ name: "LogIn" });
    showDropdown.value = false; // close the dropdown after logout
  });
};
</script>
