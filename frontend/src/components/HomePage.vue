<template>
    <div class="mx-auto bg-dirty-white flex space-x-2">
        <div class="w-2/3">
            <h1 class="mt-20 mr-10 mb-5 font-bold text-5xl text-army-green">
                Unleash your imagination; commission the finest artistry tailored to your vision.
            </h1>
            <h2 class="ml-20 ml-0 text-base">
                "Artefy: Your artistic journey, tailored for you."
            </h2>
            <div class="flex space-x-3 mt-10 mb-24">
                <div>
                    <h2 class="mr-16 font-bold text-4xl text-army-green">
                        200
                    </h2>
                    <p class="text-army-green">
                        Artists
                    </p>
                </div>
                <div>
                    <h2 class="mr-16 font-bold text-4xl text-army-green">
                        300
                    </h2>
                    <p class="text-army-green">
                        Artworks
                    </p>
                </div>
                <div>
                    <h2 class="font-bold text-4xl text-army-green">
                        500
                    </h2>
                    <p>
                        Orders Received
                    </p>
                </div>
            </div>
        </div>
        <div class="">
            <img src="../assets/artist.svg" alt="Artist"
                class="object-center"/>
        </div>
    </div>
    <div class="bg-army-green rounded-lg p-4 text-white">
        <h1>
            Need Something Done?
        </h1>
        <div class="flex space-x-4">
            <div>
                <h2 class="">
                    Browse an Artwork
                </h2>
                <p class="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec aliquam metus. Etiam mauris ligula, congue nec neque nec, elementum maximus nisl.
                </p>
            </div>
            <div>
                <h2 class="">
                    Browse an Artwork
                </h2>
                <p class="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec aliquam metus. Etiam mauris ligula, congue nec neque nec, elementum maximus nisl.
                </p>
            </div>
            <div>
                <h2 class="">
                    Browse an Artwork
                </h2>
                <p class="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec aliquam metus. Etiam mauris ligula, congue nec neque nec, elementum maximus nisl.
                </p>
            </div>
            <div>
                <h2 class="">
                    Browse an Artwork
                </h2>
                <p class="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec aliquam metus. Etiam mauris ligula, congue nec neque nec, elementum maximus nisl.
                </p>
            </div>
        </div>
    </div>
    <div class="bg-white p-10">
        <h2>
            Featured Arts
        </h2>
        <div class="flex m-10">
            <div v-for="art in featArts" class="w-1/5">
                <h2>{{ art.title }}</h2>
                <p>{{ art.artist }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';

    const featArts = ref([
        {
            title: 'Wallowing Breeze',
            artist: 'Elena Monroe',
        },
        {
            title: 'Wallowing Breeze',
            artist: 'Nhicole Munasque',
        },
        {
            title: 'Wallowing Breeze',
            artist: 'Nhicole Munasque',
        },
        {
            title: 'Wallowing Breeze',
            artist: 'Nhicole Munasque',
        },
        {
            title: 'Wallowing Breeze',
            artist: 'Nhicole Munasque',
        },
    ])
</script>