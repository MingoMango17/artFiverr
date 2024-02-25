<template>
  <div class="main-container h-full">
    <div class="font-dm-sans flex justify-center items-center flex-col">
      <div class="aboutus text-center max-w-2xl p-4 my-10">
        <h1 class="text-4xl font-bold mb-4">About Us</h1>
        <p>
          Welcome to Artefy, where creativity meets commission! At Artefy, we
          believe in the power of art to transform ideas into tangible
          masterpieces. Our platform connects talented artists with individuals
          and businesses seeking unique and personalized art commissions.
        </p>
      </div>

      <div
        class="our-mission bg-army-green max-w-full flex rounded-xl pt-8 pr-8"
      >
        <div class="left flex-1 flex justify-center items-center">
          <img
            src="../assets/aboutus.png"
            alt="aboutus"
            class="w-full h-auto object-cover"
          />
        </div>
        <div class="right text-white flex-1">
          <h1 class="text-4xl">Our Mission</h1>

          <!-- first-info -->
          <div class="info-section flex flex-row py-5">
            <div
              class="imgcontainer justify-center items-center flex max-w-2xl"
            >
              <img
                src="../assets/paint-brush.png"
                alt="paintbrush"
                class="object-cover w-28 h-auto"
              />
            </div>
            <div class="text-container flex-col ml-10">
              <h1 class="font-extralight">Empowering Artists</h1>
              <p class="mt-5">
                Artefy passionately supports artists from diverse backgrounds,
                offering a platform for them to showcase skills and transform
                passion into a sustainable profession.
              </p>
            </div>
          </div>

          <!-- second-info -->
          <div class="info-section flex flex-row py-5">
            <div class="imgcontainer justify-center items-center flex">
              <img
                src="../assets/fingerprint.png"
                alt="fingerprint"
                class="object-cover w-40 h-auto"
              />
            </div>
            <div class="text-container flex-col ml-10">
              <h1 class="font-extralight">Celebrating Individuality</h1>
              <p class="mt-5">
                In a world of mass-produced content, Artefy dedicates itself to
                fostering a creative space where artists express unique
                perspectives, providing clients with one-of-a-kind artworks
                reflecting their distinct personality.
              </p>
            </div>
          </div>

          <!-- thid info -->

          <div class="info-section flex flex-row py-5">
            <div
              class="imgcontainer justify-center items-center flex max-w-2xl"
            >
              <img
                src="../assets/connections.png"
                alt="paintbrush"
                class="object-cover w-36 h-auto"
              />
            </div>
            <div class="text-container flex-col ml-10">
              <h1 class="font-extralight">Creating Lasting Connections</h1>
              <p class="mt-5">
                Beyond transactions, Artefy is a vibrant hub where art
                enthusiasts collaborate, inspire, and forge meaningful
                connections that extend beyond the canvas, building a lasting
                artistic community.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="testimony text-center p-5 w-full">
        <h1 class="text-4xl font-bold p-4">What our clients say about us</h1>
        <div
          class="container-box flex flex-row space-x-8 justify-center items-center py-4 mt-8"
        >
          <div
            class="box max-w-sm bg-army-green text-white rounded-lg flex justify-center items-center flex-col p-5"
          >
            <img src="../assets/quotes.png" alt="quotes" />
            <p class="text-sm my-5">
              Artefy turned my vision into reality! The artist was incredibly
              talented and attentive, delivering a unique masterpiece that
              exceeded my expectations. Highly recommend!
            </p>
            <img src="../assets/group-2.png" alt="group-2" class="" />
            <p class="text-xs mt-3">Sarah M.</p>
          </div>
          <div
            class="box max-w-sm bg-army-green text-white rounded-lg flex justify-center items-center flex-col p-5"
          >
            <img src="../assets/quotes.png" alt="quotes" />
            <p class="text-sm my-5">
              As an artist, Artefy provided the exposure and support I needed.
              The platform's transparency and seamless communication made the
              commissioning process a breeze.
            </p>
            <img src="../assets/group-2.png" alt="group-2" class="" />
            <p class="text-xs mt-3">Alex R.</p>
          </div>
          <div
            class="box max-w-sm bg-army-green text-white rounded-lg flex justify-center items-center flex-col p-5"
          >
            <img src="../assets/quotes.png" alt="quotes" />
            <p class="text-sm my-5">
              Artefy is more than a platform; it's a community. I found not just
              an artist but lasting connections. My commissioned artwork
              perfectly captured my personality. Thrilled!
            </p>
            <img src="../assets/group-2.png" alt="group-2" class="" />
            <p class="text-xs mt-3">Jason H.</p>
          </div>
        </div>
      </div>

      <div class="joinbanner rounded-xl h-72 bg-army-green text-white flex my-10">
        <div class="left my-auto flex-1 px-10">
          <h1 class="text-3xl my-5 font-extrabold">Join Artefy Today</h1>
          <p class="text-l">
            Whether you're an artist or art enthusiast, Artefy is your creative
            hub. Join us for an artistic journey and collaboration in our
            dynamic community.
          </p>
          <button class="bg-blue-500 rounded-xl py-2 px-10 my-5">
            Join Now
          </button>
        </div>
        <div class="right-side flex-1 bg-blue-500">
          <img
            src="../assets/model.png"
            alt="model"
            class="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  </div>
</template>
