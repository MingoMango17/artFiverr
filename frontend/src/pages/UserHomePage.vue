<template>
  <SearchBar />
  <div class="mt-10 flex font-dm-sans">
    <div class="mr-10 w-1/4">
      <div
        class="rounded-lg overflow-hidden shadow-lg cursor-pointer"
        @click="navigateToArtistRoute('Artist', 5)"
      >
        <img :src="placeholder" :alt="'alternative'" class="w-full h-auto" />
      </div>
      <div class="flex items-center mt-3">
        <img
          src="../assets/profile_sample.png"
          alt="Artist"
          class="rounded-full h-6 w-6"
        />
        <div class="ml-5">
          <p>Zian Rinzler Valles</p>
        </div>
        <div class="flex items-center ml-auto">
          <img
          src="../assets/heart.png"
          alt="Artist"
          class="mr-2 h-5 w-5"
        />
          <p>70</p>
        </div>
      </div>
    </div>
    <div class="mr-10 w-1/4">
      <div
        class="rounded-lg overflow-hidden shadow-lg cursor-pointer"
        @click="navigateToArtistRoute('Artist', 5)"
      >
        <img :src="placeholder" :alt="'alternative'" class="w-full h-auto" />
      </div>
      <div class="flex items-center mt-3">
        <img
          src="../assets/profile_sample.png"
          alt="Artist"
          class="rounded-full h-6 w-6"
        />
        <div class="ml-5">
          <p>Zian Rinzler Valles</p>
        </div>
        <div class="flex items-center ml-auto">
          <img
          src="../assets/heart.png"
          alt="Artist"
          class="mr-2 h-5 w-5"
        />
          <p>70</p>
        </div>
      </div>
    </div>
    <div class="mr-10 w-1/4">
      <div
        class="rounded-lg overflow-hidden shadow-lg cursor-pointer"
        @click="navigateToArtistRoute('Artist', 5)"
      >
        <img :src="placeholder" :alt="'alternative'" class="w-full h-auto" />
      </div>
      <div class="flex items-center mt-3">
        <img
          src="../assets/profile_sample.png"
          alt="Artist"
          class="rounded-full h-6 w-6"
        />
        <div class="ml-5">
          <p>Zian Rinzler Valles</p>
        </div>
        <div class="flex items-center ml-auto">
          <img
          src="../assets/heart.png"
          alt="Artist"
          class="mr-2 h-5 w-5"
        />
          <p>70</p>
        </div>
      </div>
    </div>
    <div class="mr-10 w-1/4">
      <div
        class="rounded-lg overflow-hidden shadow-lg cursor-pointer"
        @click="navigateToArtistRoute('Artist', 5)"
      >
        <img :src="placeholder" :alt="'alternative'" class="w-full h-auto" />
      </div>
      <div class="flex items-center mt-3">
        <img
          src="../assets/profile_sample.png"
          alt="Artist"
          class="rounded-full h-6 w-6"
        />
        <div class="ml-5">
          <p>Zian Rinzler Valles</p>
        </div>
        <div class="flex items-center ml-auto">
          <img
          src="../assets/heart.png"
          alt="Artist"
          class="mr-2 h-5 w-5"
        />
          <p>70</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SearchBar from "../components/SearchBar.vue";
import Pagination from "../components/Pagination.vue";
import placeholder from "../images/placeholder.jpg";
import placeholder2 from "../images/images.jpg";

import { useRouter, useRoute } from "vue-router";

const router = useRouter();

const navigateToArtistRoute = (routeName, artistId) => {
  router.push({ name: routeName, params: { artistId: artistId } });
};
</script>
