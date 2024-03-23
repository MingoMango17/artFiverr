<template>
  <LoadingModal :is-loading="isLoading" />
  <div
    class="main-container flex items-center justify-center py-12 px-4 max-w-screen-md mx-auto  shadow-lg rounded-md mt-10 bg-gradient-to-r from-orange-100 to-stone-300 font-dm-sans">

    <img src="../assets/login3d.png" alt="3D Image" class="w-3/6 h-auto mx-5" />

    <div class="text-center">
      <h1 class="text-black text-3xl font-bold">Welcome to Artefy</h1>

      <!-- Sign-in form -->
      <form class="mt-4" @submit.prevent="submitForm">
        <div class="mb-4">
          <input v-model="email" type="email" id="email" name="email" required class="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter your email" />
        </div>

        <div class="mb-4">
          <input v-model="password" type="password" id="password" name="password" required
            class="mt-1 p-2 w-full border rounded-md" placeholder="Enter Password" />
        </div>
        <button type="submit" class="bg-army-green text-white p-2 rounded-md hover:bg-blue-600 w-full">
          Sign In
        </button>
      </form>

      <div class="flex flex-col sm:flex-row items-center justify-center sm:justify-between mt-5">
        <h1 class="mb-2 sm:mb-0">Don't have an account yet?</h1>
        <router-link to="/signup" class="text-blue-500 hover:underline">Sign Up</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import LoadingModal from "./LoadingModal.vue"
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useStore } from 'vuex';
import { db } from '../firebase';
import { collection, getDocs, query, where } from 'firebase/firestore'

const store = useStore();
const email = ref('');
const password = ref('');
const errMsg = ref();
const router = useRouter();
const isLoading = ref(false);

const isLoggedIn = computed(() => store.getters.checkLogin);
const userData = ref(null);


const getUserData = async () => {
  const q = query(collection(db, 'users'), where('email', '==', email.value));
  const querySnapshot = await getDocs(q);
  // querySnapshot.forEach(doc => {
  //   users.value.push({ id: doc.id, ...doc.data() });
  // });
  if (!querySnapshot.empty) {
    userData.value = querySnapshot.docs[0].data();
  } else {
    userData.value = null; // Handle case where no user is found with the given email
  }
}

// onMounted(async () => {
//   const q = query(collection(db, 'users'), where('email', '=', email.value));
//   const querySnapshot = await getDocs(q);
//   // querySnapshot.forEach(doc => {
//   //   users.value.push({ id: doc.id, ...doc.data() });
//   // });
//   userData.value = querySnapshot.data();
// });

onMounted(() => {
  console.log(isLoggedIn.value);
  if (isLoggedIn.value) router.push({ name: 'Home' });
})

const submitForm = async () => {
  // console.log('form submitted');
  isLoading.value = true;
  await signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then(async (data) => {
      console.log("Successfully Logged in");
      // store.dispatch('login');
      // console.log(data);
      await store.dispatch('setUserUID', data.user.uid);

      await getUserData();

      console.log(userData.value.name);

      await store.dispatch('setUser', {
        ...userData.value
      })

      // console.log(docRef);
      if(userData.value) router.push({ name: 'Home' });
      else alert("Can't connect to server");
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