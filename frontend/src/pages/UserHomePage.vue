<template>
  <SearchBar />
  <div class="mt-10 flex">
    <div class="mr-10 w-1/4">
      <div class="rounded-lg overflow-hidden shadow-lg">
        <img :src="placeholder" :alt="'alternative'" class="w-full h-auto" />
      </div>
      <div class="flex justify-between">
        <p>Zian Rinzler Valles</p>
        <p>70 likes</p>
      </div>
    </div>
    <div class="mr-10 w-1/4">
      <div class="rounded-lg overflow-hidden shadow-lg">
        <img :src="placeholder" :alt="'alternative'" class="w-full h-auto" />
      </div>
      <div class="flex justify-between">
        <p>Zian Rinzler Valles</p>
        <p>70 likes</p>
      </div>
    </div>
    <div class="mr-10 w-1/4">
      <a href="#">
        <div class="rounded-lg overflow-hidden shadow-lg">
          <img :src="placeholder" :alt="'alternative'" class="w-full h-auto" />
        </div>
      </a>
      <div class="flex justify-between">
        <p>Zian Rinzler Valles</p>
        <p>70 likes</p>
      </div>
    </div>
    <div class="mr-10 w-1/4">
      <div class="rounded-lg overflow-hidden shadow-lg cursor-pointer" @click="navigateToArtistRoute('Artist', 5)">
        <img :src="placeholder" :alt="'alternative'" class="w-full h-auto" />
      </div>
      <div class="flex justify-between">
        <p>Zian Rinzler Valles</p>
        <p>70 likes</p>
      </div>
    </div>
  </div>
  <Pagination />
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
