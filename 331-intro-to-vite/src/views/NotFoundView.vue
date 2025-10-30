<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    resource?: string
  }>(),
  {
    resource: 'page'
  }
)
</script>

<template>
  <div class="not-found text-center p-[50px] max-w-2xl mx-auto">
    <h1 class="text-4xl font-bold text-red-600 mb-6">Oops!</h1>
    <h3 class="text-xl text-gray-700 mb-6">The {{ resource }} you're looking for is not here.</h3>
    <router-link 
      :to="{ name: 'event-list-view' }" 
      class="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors duration-200 no-underline"
    >
      Back to the home page
    </router-link>
  </div>
</template>

<style scoped>
/* 移除了所有自定义CSS，全部使用Tailwind CSS */
</style>
