<script setup lang="ts">
import { defineProps, withDefaults } from 'vue'

const props = withDefaults(
  defineProps<{
    resource?: string
  }>(),
  {
    resource: 'page'
  }
)
</script>

<template>
  <div class="not-found">
    <h1>Oops!</h1>
    <h3>The {{ resource }} you're looking for is not here.</h3>
    <router-link :to="{ name: 'event-list-view' }">Back to the home page</router-link>
  </div>
</template>

<style scoped>
.not-found {
  text-align: center;
  padding: 50px;
}
</style>
