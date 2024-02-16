<template>
    <div class="hire-an-artist-page">
      <div class="artist-profile bg-white rounded-lg shadow-lg p-6 flex items-center">
        <img :src="artist.profilePicture" :alt="artist.name" class="w-24 h-24 rounded-full mr-6">
        <div class="artist-details">
          <h2 class="text-2xl font-semibold">{{ artist.name }}</h2>
          <p class="text-gray-700">{{ artist.description }}</p>
          <p class="text-gray-700">Location: {{ artist.location }}</p>
          <p class="text-gray-700">Skills: {{ artist.skills.join(', ') }}</p>
          <p class="text-gray-700">Price: ${{ artist.price }}/hour</p>
          <!-- Add more details as needed -->
          <button @click="hireArtist" class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
            Hire {{ artist.name }}
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const artist = ref({
    name: 'Artist Name',
    profilePicture: 'path/to/profile-picture.jpg',
    description: 'Artist bio and description...',
    location: 'Artist location',
    skills: ['Skill 1', 'Skill 2', 'Skill 3'],
    price: 50 // Hourly rate or price range
  });
  
  const hireArtist = () => {
    // Handle hiring process, e.g., redirect to a form or contact page
  };
  </script>
  
  <style scoped>
  /* No changes needed for scoped styles with Tailwind CSS */
  </style>
  