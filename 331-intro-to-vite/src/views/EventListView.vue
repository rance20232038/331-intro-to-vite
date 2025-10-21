<script setup lang="ts">
import EventCard from '@/components/EventCard.vue'
import type { Event } from '@/types'
import { ref, onMounted } from 'vue'
import axios from 'axios'

// 将事件列表初始化为空数组
const events = ref<Event[]>([])

onMounted(() => {
  // 将URL替换为您的实际Mock服务器URL
  axios
    .get('https://my-json-server.typicode.com/rance20232038/mock-server/events')
    .then((response) => {
      console.log('Received data:', response.data)
      events.value = response.data
    })
    .catch((error) => {
      console.error('There was an error!', error)
    })
})
</script>

<template>
  <h1>Events For Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  text-align: center;
  margin: 20px 0;
  color: #2c3e50;
}
</style>
