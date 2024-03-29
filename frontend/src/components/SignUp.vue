<template>
    <div
      class="flex items-center justify-center bg-gradient-to-r from-orange-100 to-stone-300 py-12 px-4 sm:px-6 lg:px-8 font-dm-sans">
      <div class="max-w-md w-full space-y-8">
        <div>
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign up for an account
          </h2>
        </div>
        <form class="mt-8 space-y-6" @submit.prevent="submitForm">
          <div class="rounded-md shadow-sm -space-y-px">
            <div>
              <label for="email" class="sr-only">Email address</label>
              <input v-model="email" id="email" name="email" type="email" autocomplete="email" required
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address" />
            </div>
            <div>
              <label for="name" class="sr-only">Name</label>
              <input v-model="name" id="name" name="name" type="text" required
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Name" />
            </div>
            <div>
              <label for="password" class="sr-only">Password</label>
              <input v-model="password" id="password" name="password" type="password" autocomplete="current-password"
                required
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password" />
            </div>
          </div>
  
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input id="artist" name="userType" type="radio" v-model="is_artist"
                class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" value="artist" required />
              <label for="artist" class="ml-2 block text-sm text-gray-900">
                Artist
              </label>
            </div>
            <div class="flex items-center">
              <input id="user" name="userType" type="radio" v-model="is_artist"
                class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" value="user" required />
              <label for="user" class="ml-2 block text-sm text-gray-900">
                User
              </label>
            </div>
          </div>
  
          <img v-if="imageUrl" :src="imageUrl" alt="Selected Image" class="rounded-full w-64 h-64">
          <input type="file" @change="handleFileUpload" accept="image/*">
  
          <div>
            <button type="submit"
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Sign ups
            </button>
          </div>
        </form>
      </div>
    </div>
    <LoadingModal :is-loading="isLoading" />
  </template>
  
  <script setup>
  import LoadingModal from "./LoadingModal.vue";
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
  import { useStore } from 'vuex';
  import { db, storage } from "../firebase";
  import { doc, setDoc } from 'firebase/firestore';
  
  
  const store = useStore();
  const router = useRouter();
  
  const email = ref('');
  const password = ref('');
  const name = ref('');
  const is_artist = ref('')
  const imageUrl = ref(null);
  const selectedFile = ref(null);
  const downloadedUrl = ref(null);
  const errMsg = ref(null);
  
  const isLoading = ref(false);
  
  const users = ref();
  
  
  
  const handleFileUpload = (event) => {
    selectedFile.value = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      imageUrl.value = reader.result;
    };
    reader.readAsDataURL(selectedFile.value);
  };
  
  const generateRandomId = (length) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomId = '';
    for (let i = 0; i < length; i++) {
      randomId += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return randomId;
  }
  
  const uploadImage = async () => {
    if (selectedFile.value) {
      const storageRef = storage.ref();
      const fileRef = storageRef.child(name.value + generateRandomId(20));
      await fileRef.put(selectedFile.value)
        .then(async (snapshot) => {
          // console.log('Uploaded a file:', snapshot.metadata.name);
          await fileRef.getDownloadURL()
            .then((url) => {
              downloadedUrl.value = url;
            })
          imageUrl.value = null;
        })
        .catch(e => {
          console.error('Error uploading image:', e);
        })
    }
  };
  
  const submitForm = async () => {
    // console.log('form submitted');
    isLoading.value = true;
    await createUserWithEmailAndPassword(getAuth(), email.value, password.value)
      .then(async (data) => {
        // console.log("Successfully Registered");
        await uploadImage();
  
        //Date
        const currentDate = new Date();
        const options = {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric'
        };
  
        const formattedDate = currentDate.toLocaleDateString('en-US', options);
  
        const docRef = doc(db, 'users', data.user.uid);
  
        await setDoc(docRef, {
          name: name.value,
          is_artist: is_artist.value === 'artist' ? true : false,
          email: email.value,
          uid: data.user.uid,
          profileURL: downloadedUrl.value,
          account_created: formattedDate,
        })
        // console.log('user id here: ', data.user.uid);
  
        store.dispatch('setUserUID', data.user.uid);
        store.dispatch('setUser', {
          name: name.value,
          email: email.value,
          is_artist: is_artist.value === 'artist' ? true : false,
          profileURL: downloadedUrl.value,
          uid: data.user.uid,
        });
        // console.log('dispatched');
        router.push({ name: 'Home' });
      })
      .catch((e) => {
        console.log(e.code);
        switch (e.code) {
          case "auth/invalid-email":
            errMsg.value = "Invalid email";
            break;
          case "auth/user-not-found":
            errMsg.value = "No account with that email was found";
            break;
          case "auth/wrong-password":
            errMsg.value = "Incorrect password";
            break;
          default:
            errMsg.value = "Email or password was incorrect";
            break;
        }
        alert(errMsg.value);
        console.log(errMsg.value);
      })
    isLoading.value = false;
  };
  
  </script>
  