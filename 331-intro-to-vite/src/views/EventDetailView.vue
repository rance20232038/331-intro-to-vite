<script setup lang="ts">
import { ref, onMounted } from 'vue'
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
  <div v-if="event" class="p-8 max-w-4xl mx-auto">
    <div class="bg-white rounded-lg shadow-md p-6">
      <h1 class="text-3xl font-bold text-gray-800 mb-4">{{ event.title }}</h1>
      <div class="mb-6">
        <p class="text-lg text-gray-700 mb-2">
          <span class="font-medium">Date:</span> {{ event.date }}
        </p>
        <p class="text-lg text-gray-700 mb-2">
          <span class="font-medium">Time:</span> {{ event.time }}
        </p>
        <p class="text-lg text-gray-700 mb-4">
          <span class="font-medium">Location:</span> {{ event.location }}
        </p>
      </div>
      <div class="mb-6">
        <p class="text-gray-700 leading-relaxed">{{ event.description }}</p>
      </div>
      <button 
        @click="editEvent" 
        class="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors duration-200"
      >
        Edit Event
      </button>
    </div>
  </div>
</template>