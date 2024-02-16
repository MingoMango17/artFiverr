<template>
  <SearchBar/>
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
  </div>
</template>

<script setup>
import SearchBar from "./SearchBar.vue"
import placeholder from "../images/placeholder.jpg";
import placeholder2 from "../images/images.jpg";
</script>
