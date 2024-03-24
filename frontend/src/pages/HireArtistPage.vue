<template>
  <LoadingModal :is-loading="isLoading" />
  <div class="hire-an-artist-page" v-if="!isLoading">
    <div class="artist-profile bg-white rounded-lg shadow-lg p-6 items-center font-dm-sans">
      <div class="coverphoto relative">
        <img src="../assets/test-cover.png" alt=""
          class="w-full rounded-lg max-h-96 object-cover hover:cursor-pointer" />
        <div class="image-container absolute z-15 bottom-0 left-0 mx-10 -my-20 bg-white p-3 rounded-full">
          <img :src="artistData.artistProfileUrl" alt="" class="rounded-full w-40 h-40 hover:cursor-pointer" />
        </div>
      </div>

      <div class="profile-container my-5 flex items-center mt-20 mx-10 flex">

        <div class="name-container ml-3 text-4xl flex">
          <div class="name-container flex">
            <div class="first w-full flex">
              <h1 class="text-4xl font-bold">Zian Rinzler Valles</h1>
              <div class="availablework flex ml-3 justify-center items-center">
                <img src="../assets/online.png" alt="check" class="w-5 h-5" />
                <p class="text-slime-green text-xs ml-1">Available for work</p>
              </div>
            </div>


          </div>
        </div>
        <div class="gettouch ml-auto">
          <button @click="navigateToRoute('ArtistProfile')"
            class="bg-dark-navy rounded-full py-2 px-3 text-white text-sm hover:cursor-pointer">
            Get in touch
          </button>
        </div>
      </div>

      <div>
        <div class="aboutme mx-10 mt-5 flex">
          <!-- <p class="w-2/4 text-lg">
            {{ user.about || descriptionPlaceholder}}
          </p> -->
          <p class="rounded-md w-2/4 text-lg h-40">
            Passionate artist capturing emotions on canvas. 🎨 Exploring the
            vibrant palette of life through brushstrokes.
            Let colors tell stories and emotions dance on the canvas.
            Join me on this visual journey! ✨ #ArtisticSoul #CanvasDreams
          </p>

          <div class="right-side flex mx-auto items-center">
            <div class="rate flex-col mr-8">
              <div class="flex items-center mb-2">
                <img src="../assets/rate.png" alt="rate" class="w-8 h-8 mr-2" />
                <p class="font-medium">
                <p>0</p>
                -
                <p>5</p>
                </p>
              </div>
              <p class="text-center text-xs">Estimated Rate</p>
            </div>

            <div class="review flex-col mr-8">
              <div class="flex items-center mb-2">
                <img src="../assets/review.png" alt="review" class="w-8 h-8 mr-2" />
                <p class="font-medium">N/A</p>
              </div>
              <p class="text-center text-xs">Total Reviews</p>
            </div>
            <div class="clients flex-col mr-8">
              <div class="flex items-center mb-2">
                <img src="../assets/client.png" alt="client" class="w-8 h-8 mr-2" />
                <p class="font-medium">N/A</p>
              </div>
              <p class="text-center text-xs">Total Clients</p>
            </div>
          </div>
        </div>
      </div>

      <!-- <img src="../assets/sample-art.jpg" alt="Artist" class="w-4/5 h-auto" /> -->
      <!-- <fwb-carousel :pictures="pictures" /> -->
      <Carousel :images="artistData.imageUrls" />

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
          <p class="mb-2">{{ artistData.artist }}</p>

          <button class="bg-dark-navy rounded-full py-2 px-3 text-white text-sm">
            Get in touch
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { FwbCard, FwbCarousel } from 'flowbite-vue';
import { onBeforeMount, onMounted, ref } from 'vue';
import { useRouter } from "vue-router";
import { db } from "../firebase";
import { collection, getDocs, query, where } from 'firebase/firestore';
import LoadingModal from "../components/LoadingModal.vue";
import Carousel from "../components/Carousel.vue";
import sample from '../assets/profile_sample.png';

const router = useRouter();
const isLoading = ref(false);
const artistData = ref();

const userID = router.currentRoute.value.params.artistId;
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
