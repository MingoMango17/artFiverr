<template>
  <div class="flex items-center justify-center m-10">
    <input
      v-model="searchQuery"
      type="text"
      placeholder="Search..."
      class="w-96 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:border-blue-500"
    />
    <button
      @click="search"
      class="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
    >
      Search
    </button>
  </div>
</template>

<script></script>
