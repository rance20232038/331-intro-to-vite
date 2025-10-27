<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useMessageStore } from '@/stores/message'
import type { Event } from '@/types'

const props = defineProps<{
  event: Event
}>()

const router = useRouter()
const messageStore = useMessageStore()

const register = () => {
  messageStore.updateMessage('You are successfully registered for ' + props.event.title)
  setTimeout(() => {
    messageStore.resetMessage()
  }, 3000)
  router.push({ name: 'event-detail-view', params: { id: props.event.id } })
}
</script>

<template>
  <div class="register">
    <h1>Register for {{ event.title }}</h1>
    <button @click="register" class="register-btn">Register Me!</button>
  </div>
</template>

<style scoped>
.register {
  text-align: center;
  padding: 20px;
}

.register-btn {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.register-btn:hover {
  background-color: #369b6f;
}
</style>
