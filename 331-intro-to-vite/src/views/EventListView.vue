<script setup lang="ts">
import EventCard from '@/components/EventCard.vue'
import { type Event } from '@/types'
import { ref, onMounted, computed, watchEffect } from 'vue'
import EventService from '@/services/EventService'
import { useRouter, useRoute } from 'vue-router'

const events = ref<Event[] | null>(null)
const totalEvents = ref(0)
const perPage = ref(3) // 默认每页显示3个
const props = defineProps({
  page: {
    type: Number,
    required: true
  }
})

const router = useRouter()
const route = useRoute()

const page = computed(() => props.page)
const totalPages = computed(() => Math.ceil(totalEvents.value / perPage.value))
const hasNextPage = computed(() => {
  return page.value < totalPages.value
})

// 从URL查询参数中获取perPage设置，如果没有则使用默认值
onMounted(() => {
  const perPageParam = route.query.perPage as string
  if (perPageParam && [2, 4, 6].includes(parseInt(perPageParam))) {
    perPage.value = parseInt(perPageParam)
  }
  
  watchEffect(() => {
    EventService.getEvents(perPage.value, page.value)
      .then((response) => {
        events.value = response.data
        totalEvents.value = parseInt(response.headers['x-total-count'])
      })
      .catch((error) => {
        console.error('There was an error!', error)
        if (!navigator.onLine ||
          error.code === 'NETWORK_ERROR' ||
          error.code === 'ERR_NETWORK' ||
          error.message?.includes('Network Error') ||
          error.message?.includes('Failed to fetch')) {
          router.push({ name: 'network-error-view' })
        }
      })
  })
})

// 更改每页显示数量
const changePerPage = (newPerPage: number) => {
  perPage.value = newPerPage
  // 重置到第一页
  router.push({ 
    name: 'event-list-view', 
    query: { page: 1, perPage: newPerPage } 
  })
}
</script>

<template>
  <h1 class="text-center text-3xl font-bold text-gray-800 my-6">Events For Good</h1>
  
  <!-- 分页设置 -->
  <div class="flex justify-center mb-6">
    <div class="bg-white rounded-lg shadow p-4">
      <span class="mr-3 font-medium text-gray-700">Items per page:</span>
      <button 
        @click="changePerPage(2)" 
        :class="['px-3 py-1 mx-1 rounded', perPage === 2 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300']"
      >
        2
      </button>
      <button 
        @click="changePerPage(4)" 
        :class="['px-3 py-1 mx-1 rounded', perPage === 4 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300']"
      >
        4
      </button>
      <button 
        @click="changePerPage(6)" 
        :class="['px-3 py-1 mx-1 rounded', perPage === 6 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300']"
      >
        6
      </button>
    </div>
  </div>
  
  <div class="flex flex-col items-center">
    <div v-if="events && events.length > 0">
      <EventCard v-for="event in events" :key="event.id" :event="event" />
    </div>
    <div v-else-if="events && events.length === 0">
      <p class="text-gray-600">No events found.</p>
    </div>
    <div v-else>
      <p class="text-gray-600">Loading events...</p>
    </div>

    <div class="flex justify-between items-center w-full max-w-md mt-8" v-if="events && events.length > 0">
      <RouterLink
        id="page-prev"
        :to="{ name: 'event-list-view', query: { page: page - 1, perPage: perPage } }"
        rel="prev"
        v-if="page != 1"
        class="px-4 py-2 bg-white text-blue-600 border border-blue-600 rounded hover:bg-blue-50 flex-1 text-left no-underline"
      >
        &#60; Previous
      </RouterLink>
      
      <!-- 页码显示 -->
      <span class="text-gray-600 font-medium mx-4" v-if="totalPages > 0">
        Page {{ page }} of {{ totalPages }}
      </span>
      
      <RouterLink
        id="page-next"
        :to="{ name: 'event-list-view', query: { page: page + 1, perPage: perPage } }"
        rel="next"
        v-if="hasNextPage"
        class="px-4 py-2 bg-white text-blue-600 border border-blue-600 rounded hover:bg-blue-50 flex-1 text-right no-underline"
      >
        Next &#62;
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
/* 移除了所有自定义CSS，全部使用Tailwind CSS */
</style>
