<script setup lang="ts">
import type { Student } from '@/types'

defineProps<{
  student: Student
}>()
</script>

<template>
  <div class="p-[20px] w-[320px] border border-gray-300 mb-[18px] rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-[2px]">
    <div class="flex items-center mb-4">
      <img :src="student.image" :alt="student.name" class="w-[60px] h-[60px] rounded-full object-cover mr-4 border-2 border-green-500" />
      <div class="student-basic-info">
        <h3 class="m-0 mb-1 text-gray-800 text-lg">{{ student.name }} {{ student.surname }}</h3>
        <p class="m-0 text-gray-500 text-sm font-medium">{{ student.studentId }}</p>
      </div>
    </div>

    <div class="border-t border-gray-100 pt-4">
      <div class="flex justify-between mb-2">
        <span class="font-semibold text-gray-700">GPA:</span>
        <span class="text-gray-800 font-medium">{{ student.gpa.toFixed(2) }}</span>
      </div>

      <div class="flex justify-between mb-2">
        <span class="font-semibold text-gray-700">Pens:</span>
        <span class="text-gray-800 font-medium">{{ student.penAmount }}</span>
      </div>

      <p class="m-0 mt-2 text-gray-600 italic text-sm leading-relaxed">{{ student.description }}</p>
    </div>
  </div>
</template>

<style scoped>
/* 移除了所有自定义CSS，全部使用Tailwind CSS */
</style>
