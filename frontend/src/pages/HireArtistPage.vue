<template>
  <div class="hire-an-artist-page">
    <div
      class="artist-profile bg-white rounded-lg shadow-lg p-6 items-center font-dm-sans"
    >
      <div class="title-container">
        <h1 class="text-2xl">Places We Won't Walk</h1>
      </div>

      <div class="profile-container my-5 flex items-center">
        <div class="box-pic w-12 h-12">
          <img
            src="../assets/profile_sample.png"
            alt="Artist"
            class="rounded-full h-auto w-auto"
          />
        </div>
        <div class="name-container ml-3">
          <p>Zian Rinzler Valles</p>
          <p class="text-slime-green text-xs">Available for work</p>
        </div>
        <div class="gettouch ml-auto">
          <button
            class="bg-dark-navy rounded-full py-2 px-3 text-white text-sm"
          >
            Get in touch
          </button>
        </div>
      </div>

      <div class="art-image flex justify-center items-center">
        <!-- Added 'flex justify-center items-center' classes -->
        <img
          src="../assets/sample-art.jpg"
          alt="Artist"
          class="w-auto h-auto"
        />
      </div>

      <div class="flex items-center mt-6">
        <!-- Left line -->
        <hr class="flex-grow border-t-2 border-gray-500" />

        <!-- Image container in the middle -->
        <div class="mx-4">
          <img
            src="../assets/profile_sample.png"
            alt="Your Image"
            class="w-16 h-16 rounded-full"
          />
        </div>

        <!-- Right line -->
        <hr class="flex-grow border-t-2 border-gray-500" />
      </div>

      <div class="name-container ml-3 flex items-center justify-center my-4">
        <div class="text-center">
          <p class="mb-2">Zian Rinzler Valles</p>

          <button
            class="bg-dark-navy rounded-full py-2 px-3 text-white text-sm"
          >
            Get in touch
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
