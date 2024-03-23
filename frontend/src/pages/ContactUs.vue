<template>
  <form @submit.prevent="submitForm">
    <div class="flex flex-col mt-8 font-dm-sans bg-white rounded-lg shadow-lg p-5">
      <div class="coverphoto relative mb-16">
        <img :src="imgCoverPhoto" alt="" class="rounded-lg w-full max-h-96 object-cover hover:cursor-pointer" @click="triggerUpload"/>
        <input type="file" ref="fileInput" @change="handleImageUpload" style="display: none" />
        <div class="image-container absolute z-15 bottom-0 left-0 mx-10 -my-20 bg-white p-3 rounded-full">
          <img :src="user.profileURL" alt="" class="rounded-full w-40 h-40 hover:cursor-pointer" />
        </div>
      </div>

      <div class="whole-container mt-20">

        <div class="name-container mx-10 flex">
          <div class="first w-2/4 flex">
            <h1 class="text-4xl font-bold">{{ user.name }}</h1>
            <div class="availablework flex ml-3 justify-center items-center">
              <img src="../assets/online.png" alt="check" class="w-5 h-5" />
              <p class="text-slime-green text-xs ml-1">Available for work</p>
            </div>
          </div>
        </div>

        <div class="aboutme mx-10 mt-5 flex">
          <!-- <p class="w-2/4 text-lg">
            {{ user.about || descriptionPlaceholder}}
          </p> -->
          <textarea v-model="user.about" type="text" placeholder="Tell us about yourself" required
                    class="rounded-md w-2/4 text-lg h-40" />

          <div class="right-side flex mx-auto items-center">
            <div class="rate flex-col mr-8">
              <div class="flex items-center mb-2">
                <img src="../assets/rate.png" alt="rate" class="w-8 h-8 mr-2" />
                <p class="font-medium">
                  <input v-model="user.minRate" type="number" placeholder="Min" required
                    class="rounded-md ml-2 w-20" />
                  -
                  <input v-model="user.maxRate" type="number" placeholder="Max" required
                    class="rounded-md ml-2 w-20" />
                </p>
              </div>
              <p class="text-center text-xs">Estimated Rate</p>
            </div>

            <div class="review flex-col mr-8">
              <div class="flex items-center mb-2">
                <img src="../assets/review.png" alt="review" class="w-8 h-8 mr-2" />
                <p class="font-medium">{{ user.reviews || 'N/A' }}</p>
              </div>
              <p class="text-center text-xs">Total Reviews</p>
            </div>
            <div class="clients flex-col mr-8">
              <div class="flex items-center mb-2">
                <img src="../assets/client.png" alt="client" class="w-8 h-8 mr-2" />
                <p class="font-medium">{{ user.totalClients || 'N/A' }}</p>
              </div>
              <p class="text-center text-xs">Total Clients</p>
            </div>
          </div>
        </div>

        <div class="contacts mx-10 mt-8 flex">
          <div class="email flex items-center">
            <img src="../assets/email.png" alt="email" class="w-10 h-10 my-auto" />
            <input v-model="user.email" type="text" placeholder="Email" required class="rounded-md ml-2" readonly />
          </div>

          <div class="flex items-center ml-7">
            <img src="../assets/phone.png" alt="phone" class="w-10 h-10 my-auto" />
            <input v-model="user.number" type="text" placeholder="Phone number" required class="rounded-md ml-2" />
          </div>

          <div class="flex items-center ml-7">
            <img src="../assets/fb.png" alt="fb" class="w-10 h-10 my-auto" />
            <input v-model="user.fb" type="text" placeholder="FB link" required class="rounded-md ml-2" />
          </div>
        </div>
      </div>
      <div
        class="mt-5 h-48 border-4 border-dashed border-gray-400 flex justify-center items-center cursor-pointer flex-col"
        :class="{ 'border-blue-700': isDragging }" @dragover.prevent @dragenter="handleDragEnter"
        @dragleave="handleDragLeave" @drop="handleDrop">
        <span>Drop Photos Here</span>
        <img src="../assets/photos.png" alt="photos" />
      </div>
      <div v-if="previewImages.length" class="mt-4 flex flex-wrap items-center justify-center">
        <div v-for="(previewImage, index) in previewImages" :key="index"
          class="relative w-48 h-48 m-2 overflow-hidden rounded-lg shadow-xl">
          <img :src="previewImage" alt="Preview" class="w-full h-full object-cover" />
          <button
            class="absolute top-1 right-0 h-5 w-5 bg-red-700 rounded-full text-white text-xs flex items-center justify-center"
            @click="deleteImage(index)">
            X
          </button>
        </div>
      </div>
      <textarea v-model="albumDescription" placeholder="Description" class="mt-4 rounded-md" />
      <button class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" type="submit">
        Save & Upload
      </button>
    </div>

  </form>
  <LoadingModal :is-loading="isLoading" />
</template>


<script setup>
import { useStore } from 'vuex';
import { db, storage } from "../firebase";
import { doc, setDoc } from 'firebase/firestore';
import { ref, computed } from 'vue';
import LoadingModal from "../components/LoadingModal.vue";

const previewImages = ref([])
const fileList = ref([])
const isDragging = ref(false)
const isLoading = ref(false)
const albumName = ref()
const albumDescription = ref('')
const imgCoverPhoto = ref('https://via.placeholder.com/1920x1080/eee/000?text=Add+Photo');
const dropPhotoPlaceholder = ref()
const fileInput = ref(null);
const selectedFile = ref(null);
const descriptionPlaceholder = "Passionate artist capturing emotions on canvas. 🎨 Exploring the vibrant palette of life through brushstrokes. Let colors tell stories and emotions dance on the canvas. Join me on this visual journey! ✨ #ArtisticSoul #CanvasDreams"

const imageUrls = ref([])

const store = useStore();

const user = computed(() => store.getters.getUser);
const name = user.value.name;
const userID = user.value.uid;
const userProfileURL = user.value.profileURL;

user.value.about = descriptionPlaceholder;


const triggerUpload = () => {
  fileInput.value.click();
}

const handleImageUpload = (event) => {
  console.log('event');
  selectedFile.value = event.target.files[0];
  const reader = new FileReader();
    reader.onload = (e) => imgCoverPhoto.value = e.target.result;
    reader.readAsDataURL(selectedFile.value);
}

const handleDrop = (event) => {
  event.preventDefault();
  isDragging.value = false; // Reset the drag state
  const files = event.dataTransfer.files;
  // console.log(files);
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    if (file.type.match("image.*")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        previewImages.value.push(e.target.result);
      };
      reader.readAsDataURL(file);
      // console.log(file);
      fileList.value.push(file);
    }
  }
}

const handleDragEnter = (event) => {
  event.preventDefault();
  isDragging.value = true;
}

const handleDragLeave = (event) => {
  event.preventDefault();
  isDragging.value = false;
}

const deleteImage = (index) => {
  previewImages.value.splice(index, 1);
}

const generateRandomId = (length) => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomId = '';
  for (let i = 0; i < length; i++) {
    randomId += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return randomId;
}

const uploadImages = async () => {
  console.log("Uploading images...");
  for (let i = 0; i < previewImages.value.length; i++) {
    const storageRef = storage.ref();
    const fileRef = storageRef.child(`${name}-artworks-${generateRandomId(20)}`);
    await fileRef.put(fileList.value[i])
      .then(async (snapshot) => {
        await fileRef.getDownloadURL()
          .then((url) => {
            imageUrls.value.push(url);
          })
      })
      .catch(e => {
        console.error('Error uploading image:', e);
      })
  }
  previewImages.value = [];
}

const submitForm = async () => {
  isLoading.value = true
  if (!previewImages.value.length) {
    alert("Please put some images");
    isLoading.value = false;
    return;
  }
  await uploadImages();

  const formData = {
    artist: name,
    albumName: albumName.value,
    albumDescription: albumDescription.value,
    id: userID,
    artistProfileUrl: userProfileURL,
    imageUrls: imageUrls.value,
  };

  console.log(formData);

  const docRef = doc(db, 'artistPages', userID);
  await setDoc(docRef, formData);

  imageUrls.value = [];
  isLoading.value = false
}

</script>
