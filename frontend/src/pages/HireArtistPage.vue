<template>
  <LoadingModal :is-loading="isLoading" />
  <div class="hire-an-artist-page" v-if="!isLoading">
    <div class="artist-profile bg-white rounded-lg shadow-lg p-6 items-center font-dm-sans">
      <div class="coverphoto relative">
        <img src="../assets/test-cover.png" alt="" class="w-full max-h-96 object-cover hover:cursor-pointer" />
        <div class="image-container absolute z-15 bottom-0 left-0 mx-10 -my-20 bg-white p-3 rounded-full">
          <img src="../assets/sample-art.jpg" alt="" class="rounded-full w-40 h-40 hover:cursor-pointer" />
        </div>
      </div>
      <div class="profile-container my-5 flex items-center mt-20">
        <div class="box-pic w-12 h-12">
          <img :src="artistData.artistProfileUrl" alt="Artist" class="rounded-full h-auto w-auto" />
        </div>
        <div class="name-container ml-3">
          <p>{{ artistData.artist }}</p>
          <p class="text-slime-green text-xs">Available for work</p>
        </div>
        <div class="gettouch ml-auto">
          <button @click="navigateToRoute('ArtistProfile')"
            class="bg-dark-navy rounded-full py-2 px-3 text-white text-sm hover:cursor-pointer">
            Get in touch
          </button>
        </div>
      </div>


      <!-- <img src="../assets/sample-art.jpg" alt="Artist" class="w-4/5 h-auto" /> -->
      <!-- <fwb-carousel :pictures="pictures" /> -->
      <Carousel />
      <!-- description here -->

      <div class="description my-10 mx-10">
        <p class="text-lg">
          {{ artistData.albumDescription }}
        </p>
      </div>

      <div class="flex items-center mt-6">
        <!-- Left line -->
        <hr class="flex-grow border-t-2 border-gray-500" />

        <!-- Image container in the middle -->
        <div class="mx-4">
          <img :src="artistData.artistProfileUrl" alt="Your Image" class="w-16 h-16 rounded-full" />
        </div>

        <!-- Right line -->
        <hr class="flex-grow border-t-2 border-gray-500" />
      </div>

      <div class="name-container ml-3 flex items-center justify-center my-4">
        <div class="text-center">
          <p class="mb-2">Zian Rinzler Valles</p>

          <button class="bg-dark-navy rounded-full py-2 px-3 text-white text-sm">
            Get in touch
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { FwbCarousel } from 'flowbite-vue';
import { onBeforeMount, onMounted, ref } from 'vue';
import { useRouter } from "vue-router";
import { db } from "../firebase";
import { collection, getDocs, query, where } from 'firebase/firestore';
import LoadingModal from "../components/LoadingModal.vue";
import Carousel from "../components/Carousel.vue";

const router = useRouter();
const isLoading = ref(false);
const artistData = ref();

const userID = router.currentRoute.value.params.artistId;
const pictures = [
  { src: '../assets/profile_sample.png', alt: 'image 1' },
  { src: 'https://www.uwb.edu/ias/wp-content/uploads/2023/05/gml-textures-colorful-painting-standard.jpg', alt: 'image 2' },
  { src: '../assets/profile_sample.png', alt: 'image 3' },
]
const navigateToRoute = (routeName) => {
  router.push({ name: routeName });
};

const getArtistData = async () => {
  const q = query(collection(db, 'artistPages'), where("id", "==", userID));

  const querySnapshot = await getDocs(q);
  if (!querySnapshot.empty) {
    artistData.value = querySnapshot.docs[0].data();
  } else {
    artistData.value = null; // Handle case where no user is found with the given email
  }
}

onBeforeMount(async () => {
  isLoading.value = true;
  await getArtistData();

  isLoading.value = false;
})
</script>
