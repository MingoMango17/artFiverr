<template>
    <div class="font-dm-sans h-screen bg-brownish">
        <div class="bg-white rounded-lg pb-5">
            <div class="coverphoto relative">
                <img src="../assets/test-cover.png" alt="" class="w-full max-h-96 object-cover hover:cursor-pointer" />
                <div class="image-container absolute z-15 bottom-0 left-0 mx-10 -my-20 bg-white p-3 rounded-full">
                    <img src="../assets/sample-art.jpg" alt="" class="rounded-full w-40 h-40 hover:cursor-pointer" />
                </div>
            </div>

            <div class="whole-container mt-20">

                <div class="name-container mx-10 flex">
                    <div class="first w-2/4 flex">
                        <h1 class="text-4xl font-bold">Zian Rinzler Valles</h1>
                    <div class="availablework flex ml-3 justify-center items-center">
                        <img src="../assets/online.png" alt="check" class="w-5 h-5" />
                        <p class="text-slime-green text-xs ml-1">Available for work</p>
                    </div>
                    </div>
                  
                    <div class="buttons px-5 mx-auto">
                        <button class="bg-white py-2 px-3 rounded-xl text-sm text-black border border-stone-300 font-bold mr-20">
                            Book a session
                        </button>

                        <button class="bg-blue-500  py-2 px-3 rounded-xl text-sm text-white border border-stone-300 font-bold mr-20">
                            Share profile
                        </button>
                    </div>

                </div>

                <div class="aboutme mx-10 mt-5 flex">
                    <p class="w-2/4 text-lg">
                        Passionate artist capturing emotions on canvas. 🎨 Exploring the
                        vibrant palette of life through brushstrokes. Let colors tell
                        stories and emotions dance on the canvas. Join me on this visual
                        journey! ✨ #ArtisticSoul #CanvasDreams
                    </p>

                    <div class="right-side flex mx-auto items-center">
                        <div class="rate flex-col mr-8">
                            <div class="flex items-center mb-2">
                                <img src="../assets/rate.png" alt="rate" class="w-8 h-8 mr-2" />
                                <p class="font-medium">₱500 - ₱1000</p>
                            </div>
                            <p class="text-center text-xs">Estimated Rate</p>
                        </div>

                        <div class="review flex-col mr-8">
                            <div class="flex items-center mb-2">
                                <img src="../assets/review.png" alt="review" class="w-8 h-8 mr-2" />
                                <p class="font-medium">4.8/5</p>
                            </div>
                            <p class="text-center text-xs">Total Reviews</p>
                        </div>
                        <div class="clients flex-col mr-8">
                            <div class="flex items-center mb-2">
                                <img src="../assets/client.png" alt="client" class="w-8 h-8 mr-2" />
                                <p class="font-medium">10</p>
                            </div>
                            <p class="text-center text-xs">Total Clients</p>
                        </div>
                    </div>
                </div>

                <div class="contacts mx-10 mt-8 flex">
                    <div class="email flex items-center">
                        <img src="../assets/email.png" alt="email" class="w-10 h-10 my-auto" />
                        <p class="ml-2 text-text-gray text-sm">zhaztedv@gmail.com</p>
                    </div>

                    <div class="flex items-center ml-7">
                        <img src="../assets/phone.png" alt="phone" class="w-10 h-10 my-auto" />
                        <p class="ml-2 text-text-gray text-sm">09561458880</p>
                    </div>

                    <div class="flex items-center ml-7">
                        <img src="../assets/fb.png" alt="fb" class="w-10 h-10 my-auto" />
                        <p class="ml-2 text-text-gray text-sm">www.fb.com/zrv</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
