<template>
    <div class="bg-brownish h-full">
        <div class="w-5/6 mx-auto">
            <Header/>
            <router-view/>
        </div>
    </div>
</template>

<script setup>
    import Header from '../components/Header.vue';
</script>