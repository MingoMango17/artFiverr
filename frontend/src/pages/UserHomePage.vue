<template>
  <!-- <SearchBar /> -->
  <div class="h-screen">
    <div class="mt-10 flex font-dm-sans h-screen" v-for="artists in artistsList">
      <div class="mr-10 w-1/4" v-for="artist in artists">
        <div class="rounded-lg overflow-hidden shadow-lg cursor-pointer relative w-full w-1/4 h-4/5"
          @click="navigateToArtistRoute('Artist', artist.id)">
          <!-- <img :src="artist.imageUrl" :alt="'alternative'" class="w-full h-auto min:" /> -->
          <img :src="artist.imageUrl" alt="Image" class="object-contain w-full h-full">
        </div>
        <div class="flex items-center mt-3">
          <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" alt="Artist"
            class="rounded-full h-6 w-6" />
          <div class="ml-5">
            <p>{{ artist.name }}</p>
          </div>
          <div class="flex items-center ml-auto">
            <img src="../assets/heart.png" alt="Artist" class="mr-2 h-5 w-5" />
            <p>{{ artist.likes }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SearchBar from "../components/SearchBar.vue";
import Pagination from "../components/Pagination.vue";
import placeholder from "../images/placeholder.jpg";

import { useRouter, useRoute } from "vue-router";
import { ref } from 'vue';

const router = useRouter();

const artistsList = ref([]);

artistsList.value = [
  {
    name: 'Zian Valles',
    id: 5,
    likes: 5,
    imageUrl: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/166334952/original/7e5996f72f03bbb763b6c8cbd44d2087232f4206/draw-anime-illustration-oc-or-fanart.png',
  },
  {
    name: 'Godwin Juevesano',
    id: 6,
    likes: 45,
    imageUrl: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/129902945/original/07457a7c62a8ff6efd6bb754de76101041ea2d24/do-digital-art-and-i-love-to-make-cartoon-character-598e.png'
  },
  {
    name: 'Albert Einstein',
    id: 5,
    likes: 30,
    imageUrl: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/351078627/original/9ba624e3402c0080e0932a48295d60a30626dc40/draw-digital-illustration-portrait-digital-painting-and-any-concept-art.jpg'
  },
  {
    name: 'Leonardo Dicaprio',
    id: 5,
    likes: 12,
    imageUrl: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/171282080/original/260b9a71ffd3430bc3b7cbc943139090a2750cd3/convert-raster-into-vector.jpg',
  },
]

const chunkSize = 4;
const chunkedLists = [];
for (let i = 0; i < artistsList.value.length; i += chunkSize) {
  const chunk = artistsList.value.slice(i, i + chunkSize);
  chunkedLists.push(chunk);
}



artistsList.value = chunkedLists;

const navigateToArtistRoute = (routeName, artistId) => {
  router.push({ name: routeName, params: { artistId: artistId } });
};
</script>
