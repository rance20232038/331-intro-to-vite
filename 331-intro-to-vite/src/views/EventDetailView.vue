<script setup lang="ts">
import { ref, onMounted, defineProps } from 'vue'
import { type Event } from '@/types'
import EventService from '@/services/EventService'
import { useMessageStore } from '@/stores/message'  // 添加这行

const event = ref<Event | null>(null)
const props = defineProps({
  id: {
    type: String,
    required: true
  }
})
const messageStore = useMessageStore()  // 添加这行

onMounted(() => {
  EventService.getEvent(parseInt(props.id))
    .then((response) => {
      event.value = response.data
    })
    .catch((error) => {
      console.error('There was an error!', error)
    })
})

// 添加编辑功能
const editEvent = () => {
  messageStore.updateMessage('Event data has been updated successfully!')
  setTimeout(() => {
    messageStore.resetMessage()
  }, 3000)
}
</script>

<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
    <!-- 添加编辑按钮 -->
    <button @click="editEvent">Edit Event</button>
  </div>
</template>