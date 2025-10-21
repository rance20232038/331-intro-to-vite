<script setup lang="ts">
import type { Event } from '@/types'

defineProps<{
  event: Event
}>()
</script>

<template>
  <div class="event-details">
    <span>{{ event.category }}</span>
    <span>{{ event.organizer }}</span>
  </div>
</template>

<style scoped>
.event-details {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  margin-top: 10px;
}
</style>
