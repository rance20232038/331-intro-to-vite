<script setup lang="ts">
import StudentCard from '@/components/StudentCard.vue'
import type { Student } from '@/types'
import { ref, onMounted } from 'vue'
import StudentService from '@/services/StudentService'

const students = ref<Student[]>([])

onMounted(() => {
  StudentService.getStudents()
    .then((response) => {
      students.value = response.data
    })
    .catch((error) => {
      console.error('There was an error fetching students!', error)
    })
})
</script>

<template>
  <div class="p-8 max-w-6xl mx-auto">
    <h1 class="text-3xl font-bold text-gray-800 text-center mb-8">Students List</h1>
    <div class="flex flex-wrap justify-center gap-6">
      <StudentCard v-for="student in students" :key="student.id" :student="student" />
    </div>
  </div>
</template>

<style scoped>
/* 移除了所有自定义CSS，全部使用Tailwind CSS */
</style>
