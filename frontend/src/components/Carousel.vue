<template>
    <div class="carousel relative overflow-hidden">
      <div class="carousel-inner flex">
        <div v-for="(item, index) in items" :key="index" :class="{ 'carousel-item': true, 'active': index === activeIndex }">
          <!-- Your carousel item content here -->
          <img :src="item.image" alt="carousel-item" class="w-full" />
          <div class="carousel-caption bg-gray-800 bg-opacity-75 text-white p-2">
            <h5 class="text-lg font-semibold">{{ item.title }}</h5>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>
  
      <!-- Previous and Next buttons -->
      <button @click="prev" class="carousel-control-prev absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-full" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </button>
      <button @click="next" class="carousel-control-next absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-full" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Sample data
  const items = ref([
    { 
      image: 'https://via.placeholder.com/800x400', 
      title: 'First Slide', 
      description: 'This is the first slide' 
    },
    { 
      image: 'https://via.placeholder.com/800x400', 
      title: 'Second Slide', 
      description: 'This is the second slide' 
    },
    { 
      image: 'https://via.placeholder.com/800x400', 
      title: 'Third Slide', 
      description: 'This is the third slide' 
    }
  ]);
  
  const activeIndex = ref(0);
  
  const next = () => {
    activeIndex.value = (activeIndex.value + 1) % items.value.length;
  };
  
  const prev = () => {
    activeIndex.value = (activeIndex.value - 1 + items.value.length) % items.value.length;
  };
  </script>
  
  <style scoped>
  .carousel {
    position: relative;
  }
  
  .carousel-inner {
    transition: transform 0.5s ease;
  }
  
  .carousel-item {
    flex: 0 0 100%;
  }
  
  .carousel-item img {
    width: 100%;
    height: auto;
  }
  </style>
  