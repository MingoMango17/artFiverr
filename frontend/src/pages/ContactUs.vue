<template>
  <div class="flex flex-col items-center mt-8 font-dm-sans">
    <div class="album-name flex flex-col items-center justify-center p-5">
      <p class="font-bold text-2xl">Add New Album</p>
      <p class="text-base text-gray-400 mt-3">Title(required)</p>
      <input type="text" required class="rounded-md mt-3 w-64" />
    </div>
    <div
      class="w-1/2 h-48 border-4 border-dashed border-gray-400 flex justify-center items-center cursor-pointer flex-col"
      :class="{ 'border-blue-700': isDragging }"
      @dragover.prevent
      @dragenter="handleDragEnter"
      @dragleave="handleDragLeave"
      @drop="handleDrop"
    >
      <span>Drop Photos Here</span>
      <img src="../assets/photos.png" alt="photos" />
    </div>
    <div
      v-if="previewImages.length"
      class="mt-4 flex flex-wrap items-center justify-center"
    >
      <div
        v-for="(previewImage, index) in previewImages"
        :key="index"
        class="relative w-48 h-48 m-2 overflow-hidden rounded-lg shadow-xl"
      >
        <img
          :src="previewImage"
          alt="Preview"
          class="w-full h-full object-cover"
        />
        <button
          class="absolute top-1 right-0 h-5 w-5 bg-red-700 rounded-full text-white text-xs flex items-center justify-center"
          @click="deleteImage(index)"
        >
          X
        </button>
      </div>
    </div>
    <button
      class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      @click="uploadImages"
    >
      Save & Upload
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      previewImages: [],
      isDragging: false,
    };
  },
  methods: {
    handleDrop(event) {
      event.preventDefault();
      this.isDragging = false; // Reset the drag state
      const files = event.dataTransfer.files;
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (file.type.match("image.*")) {
          const reader = new FileReader();
          reader.onload = (e) => {
            this.previewImages.push(e.target.result);
          };
          reader.readAsDataURL(file);
        }
      }
    },
    handleDragEnter(event) {
      event.preventDefault();
      this.isDragging = true;
    },
    handleDragLeave(event) {
      event.preventDefault();
      this.isDragging = false;
    },
    deleteImage(index) {
      this.previewImages.splice(index, 1);
    },
    uploadImages() {
      // Implement your upload logic here
      console.log("Uploading images...");
    },
  },
};
</script>
