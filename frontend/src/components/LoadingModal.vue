<template>
    <div v-if="isLoading" class="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
        <div class="bg-white p-5 rounded-lg shadow-lg">
            <div class="flex items-center justify-center mb-4">
                <svg class="animate-spin h-8 w-8 text-gray-600 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.373A8 8 0 0112 4v4a7.946 7.946 0 00-4 1.073V17.38z">
                    </path>
                </svg>
                <span class="text-lg font-semibold">Loading...</span>
            </div>
            <p class="text-gray-700">Please wait while the content is loading.</p>
        </div>
    </div>
</template>
  
<script>
export default {
    props: {
        isLoading: {
            type: Boolean,
            default: false
        }
    }
}
</script>