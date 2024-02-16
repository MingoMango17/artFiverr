<template>
    <div class="flex items-center justify-center space-x-2">
      <button
        :disabled="currentPage === 1"
        @click="previousPage"
        class="px-4 py-2 bg-gray-200 text-gray-700 rounded-md cursor-pointer"
      >
        Previous
      </button>
      <span class="text-gray-700">Page {{ currentPage }} of {{ totalPages }}</span>
      <button
        :disabled="currentPage === totalPages"
        @click="nextPage"
        class="px-4 py-2 bg-gray-200 text-gray-700 rounded-md cursor-pointer"
      >
        Next
      </button>
    </div>
  </template>
  
  <script>
  import { ref, computed } from 'vue';
  
  export default {
    props: {
      currentPage: {
        type: Number,
        required: true
      },
      totalPages: {
        type: Number,
        required: true
      }
    },
    setup(props, { emit }) {
      const currentPage = ref(props.currentPage);
  
      const previousPage = () => {
        if (currentPage.value > 1) {
          currentPage.value--;
          emit('update:currentPage', currentPage.value);
        }
      };
  
      const nextPage = () => {
        if (currentPage.value < props.totalPages) {
          currentPage.value++;
          emit('update:currentPage', currentPage.value);
        }
      };
  
      return {
        currentPage,
        previousPage,
        nextPage
      };
    }
  };
  </script>
  