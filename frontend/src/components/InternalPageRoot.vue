<template>
    <div class="bg-brownish h-screen">
        <div class="w-5/6 mx-auto">
            <Header/>
            <router-view/>
        </div>
    </div>
</template>


<script setup>
    import Header from './Header.vue';
    import HomePage from './HomePage.vue';
    import SignupPage from './SignUpPage.vue';

</script>