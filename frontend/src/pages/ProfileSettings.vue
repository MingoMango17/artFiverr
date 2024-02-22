<template>
    <div class="main-container font-dm-sans">
        <div class="cover-photo bg-gradient-to-r from-emerald-500 to-emerald-900 w-full h-96 relative hover:cursor-pointer">
            <div class="image-container absolute z-15 bottom-0 left-0 mx-10 -my-20 bg-white p-3 rounded-full">
                <img src="../assets/sample-art.jpg" alt="" class="rounded-full w-40 h-40 hover:cursor-pointer" />
            </div>
        </div>
        <div class="upper-container flex mx-64 mt-8">
            <div class="name-avail flex-1 block">
                <h1 class="text-3xl font-bold">Zian Rinzler Valles</h1>

                <div class="flex items-center relative">
                    <p class="mr-2 text-gray-500">{{ selectedOption }}</p>
                    <img src="../assets/arrow-down.png" alt="" class="w-3 h-3 hover:cursor-pointer"
                        @click="toggleDropdown" />
                </div>

                <!-- showDropDownContent here -->
                <div v-show="showDropdown" class="absolute bg-white w-36 z-10 rounded-lg mt-1 py-2 px-3 ">
                    <div class="options">
                        <div class="availcontainer hover:bg-gray-200 flex hover:cursor-pointer rounded-lg py-1"
                            @click="selectOption('Available')">
                            <img src="../assets/online.png" alt="check" class="w-5 h-5" />
                            <p class="mx-3">Available</p>
                        </div>
                        <div class="availcontainer flex hover:bg-gray-200  hover:cursor-pointer rounded-lg"
                            @click="selectOption('Unavailable')">
                            <img src="../assets/red-circle.png" alt="check" class="w-5 h-5" />
                            <p class="mx-3">Unavailable</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="button">
                <button class="bg-blue-500 rounded-lg text-sm text-white p-3">
                    Save changes
                </button>
            </div>
        </div>

        <div class="lower-container mt-28 mx-10">
            <div class="first-container flex">
                <div class="left-side flex-1">
                    <h1 class="text-3xl font-bold">Personal Information</h1>
                    <div class="input-name my-10 w-full">
                        <fwb-input v-model="name" label="First name" placeholder="" required />
                    </div>
                    <div class="input-phone my-10 w-full">
                        <fwb-input v-model="phone" label="Contact Number" placeholder="" required />
                    </div>
                </div>
                <div class="right-side ml-72 flex-1">
                    <h1 class="text-3xl font-bold">Social Media</h1>
                    <div class="input-name my-10 w-full">
                        <fwb-input v-model="facebook" label="Facebook" placeholder="" />
                    </div>
                    <div class="input-phone my-10 w-full">
                        <fwb-input v-model="instagram" label="Instagram" placeholder="" />
                    </div>
                </div>
            </div>

            <div class="second-container flex">
                <div class="left-side flex-1">
                    <h1 class="text-3xl font-bold">Price Range</h1>
                    <div class="my-10 flex">
                        <div class="minimum">
                            <fwb-input v-model="minimum" label="Minimum" placeholder="Php 0" size="sm" required />
                        </div>

                        <div class="maximum ml-10">
                            <fwb-input v-model="maximum" label="Maximum" placeholder="Php 0" size="sm" required />
                        </div>
                    </div>
                </div>
                <div class="right-side ml-72 flex-1">
                    <h1 class="text-3xl font-bold">About You</h1>
                    <div class="input-name my-10">
                        <textarea v-model="aboutMeText" rows="4" cols="50" class="w-full rounded-md" required></textarea>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { FwbInput, FwbButton } from "flowbite-vue";

const name = ref("");

const showDropdown = ref(false);

const toggleDropdown = () => {
    showDropdown.value = !showDropdown.value;
};

const selectedOption = ref("Available");


const selectOption = (option) => {
    selectedOption.value = option;
    showDropdown.value = false; // Close the dropdown after selecting an option
};

</script>
