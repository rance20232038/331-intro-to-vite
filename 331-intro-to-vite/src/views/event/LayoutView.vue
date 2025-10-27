<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useEventStore } from '@/stores/event'
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'
import type { Event } from '@/types'

const route = useRoute()
const store = useEventStore()
const { event } = storeToRefs(store)

// 从路由元数据获取事件数据
onMounted(() => {
  if (route.meta.event) {
    store.setEvent(route.meta.event as Event)
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
