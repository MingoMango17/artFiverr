<template>
  <!-- <SearchBar /> -->
  <LoadingModal :is-loading="isLoading"/>
  <div class="h-screen">
    <div class="mt-10 flex font-dm-sans" v-for="artists in artistsList">
      <div class="mr-10 w-1/4" v-for="artist in artists">
        <div class="rounded-lg overflow-hidden shadow-lg cursor-pointer relative w-full w-1/4 h-4/5"
          @click="navigateToArtistRoute('Artist', artist.id)">
          <img src="../assets/sample-art.jpg" alt="Image" class="object-contain h-full w-full">
        </div>
        <div class="flex items-center mt-3">
          <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" alt="Artist"
            class="rounded-full h-6 w-6" />
          <div class="ml-5">
            <p>{{ artist.artist }}</p>
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
import LoadingModal from "../components/LoadingModal.vue";

import { useRouter, useRoute } from "vue-router";
import { ref, computed, onMounted } from 'vue';
import { useStore } from "vuex";
import { db } from "../firebase";
import { collection, getDocs, query, where } from 'firebase/firestore'

const store = useStore();
const router = useRouter();

const artistsList = ref([]);

const isLoading = ref(false);

const getArtistPages = async () => {
  const q = query(collection(db, 'artistPages'))
  const querySnapshot = await getDocs(q);

  if (!querySnapshot.empty) {
    for (let i = 0; i < querySnapshot.docs.length; i++) {
      artistsList.value.push(querySnapshot.docs[i].data());
    }
    // console.log(artistsList.value);
  } else {
    artistsList.value = [];
  };
}

const navigateToArtistRoute = (routeName, artistId) => {
  router.push({ name: routeName, params: { artistId: artistId } });
};


onMounted(async () => {
  isLoading.value = true;
  await getArtistPages();
  const chunkSize = 4;
  const chunkedLists = [];
  for (let i = 0; i < artistsList.value.length; i += chunkSize) {
    const chunk = artistsList.value.slice(i, i + chunkSize);
    chunkedLists.push(chunk);
  }
  artistsList.value = chunkedLists;
  console.log(artistsList.value)
  isLoading.value = false;
});
</script>
