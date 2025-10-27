<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useMessageStore } from '@/stores/message'
import type { Event } from '@/types'

const props = defineProps<{
  event: Event
}>()

const router = useRouter()
const messageStore = useMessageStore()

const saveChanges = () => {
  // 这里应该实际保存更改，现在只模拟
  console.log('Saving changes for event:', props.event)

  // 设置闪存消息
  messageStore.updateMessage('Event data has been updated successfully!')

  // 3秒后清除消息
  setTimeout(() => {
    messageStore.resetMessage()
  }, 3000)

  // 跳转回详情页
  router.push({ name: 'event-detail-view', params: { id: props.event.id } })
}
</script>

<template>
  <div class="edit">
    <h1>Edit Event: {{ event.title }}</h1>
    <div class="edit-form">
      <div class="form-group">
        <label>Title:</label>
        <input type="text" :value="event.title" />
      </div>
      <div class="form-group">
        <label>Description:</label>
        <textarea :value="event.description"></textarea>
      </div>
      <div class="form-group">
        <label>Location:</label>
        <input type="text" :value="event.location" />
      </div>
      <button @click="saveChanges" class="save-btn">Save Changes</button>
    </div>
  </div>
</template>

<style scoped>
.edit {
  text-align: center;
  padding: 20px;
}

.edit-form {
  max-width: 500px;
  margin: 0 auto;
  text-align: left;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.form-group textarea {
  height: 100px;
  resize: vertical;
}

.save-btn {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;
}

.save-btn:hover {
  background-color: #369b6f;
}
</style>
