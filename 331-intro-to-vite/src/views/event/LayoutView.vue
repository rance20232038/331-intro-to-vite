<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useEventStore } from '@/stores/event'
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'
import type { Event } from '@/types'
import EventService from '@/services/EventService'

const route = useRoute()
const store = useEventStore()
const { event } = storeToRefs(store)

// 获取事件数据
onMounted(async () => {
  if (route.params.id) {
    try {
      const id = parseInt(route.params.id as string)
      const response = await EventService.getEvent(id)
      store.setEvent(response.data)
    } catch (error) {
      console.error('Failed to fetch event:', error)
    }
  }
})
</script>

<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <nav>
      <RouterLink :to="{ name: 'event-detail-view' }">Details</RouterLink>
      |
      <RouterLink :to="{ name: 'event-register-view' }">Register</RouterLink>
      |
      <RouterLink :to="{ name: 'event-edit-view' }">Edit</RouterLink>
    </nav>
    <RouterView :event="event" />
  </div>
  <div v-else>
    <p>Loading event...</p>
  </div>
</template>
