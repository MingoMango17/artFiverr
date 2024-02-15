<template>
  <div
    class="main-container flex items-center justify-center py-12 px-4 max-w-screen-md mx-auto  shadow-lg rounded-md mt-10 bg-gradient-to-r from-orange-100 to-stone-300 font-dm-sans"
  >
    
    <img src="../assets/login3d.png" alt="3D Image" class="w-3/6 h-auto mx-5" />

    <div class="text-center">
      <h1 class="text-black text-3xl font-bold">Welcome to Artefy</h1>

      <!-- Sign-in form -->
      <form class="mt-4">
        <div class="mb-4">
          <input
            type="email"
            id="email"
            name="email"
            required
            class="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter your email"
          />
        </div>

        <div class="mb-4">
          <input
            type="password"
            id="password"
            name="password"
            required
            class="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter Password"
          />
        </div>
        <button
          type="submit"
          class="bg-army-green text-white p-2 rounded-md hover:bg-blue-600 w-full"
        >
          Sign In
        </button>
      </form>

      <div
        class="flex flex-col sm:flex-row items-center justify-center sm:justify-between mt-5"
      >
        <h1 class="mb-2 sm:mb-0">Don't have an account yet?</h1>
        <router-link to="/signup" class="text-blue-500 hover:underline"
          >Sign Up</router-link
        >
      </div>
    </div>
  </div>
</template>
