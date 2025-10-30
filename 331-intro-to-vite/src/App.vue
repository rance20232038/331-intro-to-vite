<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useMessageStore } from '@/stores/message'
import { SpeedInsights } from '@vercel/speed-insights/vue'

// 使用 message store
const messageStore = useMessageStore()
</script>

<template>
  <SpeedInsights />
  <div class="text-center font-sans text-gray-700 antialiased min-h-screen bg-gray-100">
    <header class="bg-white shadow-lg">
      <div id="flashMessage" class="animate-fade bg-yellow-200 text-yellow-800 p-2 text-center" v-if="messageStore.message">
        <h4 class="text-lg font-medium">{{ messageStore.message }}</h4>
      </div>
      <div class="wrapper max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav class="py-6 flex justify-center space-x-4">
          <RouterLink to="/" exact-active-class="text-green-500" class="font-bold text-blue-600 hover:text-blue-800 px-3 py-2 rounded-md hover:bg-blue-50">Event</RouterLink>
          <RouterLink to="/students" exact-active-class="text-green-500" class="font-bold text-blue-600 hover:text-blue-800 px-3 py-2 rounded-md hover:bg-blue-50">Students</RouterLink>
          <RouterLink to="/about" exact-active-class="text-green-500" class="font-bold text-blue-600 hover:text-blue-800 px-3 py-2 rounded-md hover:bg-blue-50">About</RouterLink>
        </nav>
      </div>
    </header>

    <RouterView />
  </div>
</template>

<style>
/* 移除了所有自定义CSS，全部使用Tailwind CSS */
</style>
