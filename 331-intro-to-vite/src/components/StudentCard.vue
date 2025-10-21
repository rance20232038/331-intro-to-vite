<script setup lang="ts">
import type { Student } from '@/types'

defineProps<{
  student: Student
}>()
</script>

<template>
  <div class="student-card">
    <div class="student-header">
      <img :src="student.image" :alt="student.name" class="student-image" />
      <div class="student-basic-info">
        <h3>{{ student.name }} {{ student.surname }}</h3>
        <p class="student-id">{{ student.studentId }}</p>
      </div>
    </div>

    <div class="student-details">
      <div class="gpa-section">
        <span class="label">GPA:</span>
        <span class="value">{{ student.gpa.toFixed(2) }}</span>
      </div>

      <div class="pens-section">
        <span class="label">Pens:</span>
        <span class="value">{{ student.penAmount }}</span>
      </div>

      <p class="description">{{ student.description }}</p>
    </div>
  </div>
</template>

<style scoped>
.student-card {
  padding: 20px;
  width: 320px;
  border: 1px solid #e0e0e0;
  margin-bottom: 18px;
  border-radius: 12px;
  background-color: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.student-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.student-header {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.student-image {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 15px;
  border: 2px solid #42b983;
}

.student-basic-info h3 {
  margin: 0 0 5px 0;
  color: #2c3e50;
  font-size: 18px;
}

.student-id {
  margin: 0;
  color: #7f8c8d;
  font-size: 14px;
  font-weight: 500;
}

.student-details {
  border-top: 1px solid #f0f0f0;
  padding-top: 15px;
}

.gpa-section, .pens-section {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
}

.label {
  font-weight: 600;
  color: #34495e;
}

.value {
  color: #2c3e50;
  font-weight: 500;
}

.description {
  margin: 10px 0 0 0;
  color: #546e7a;
  font-style: italic;
  font-size: 14px;
  line-height: 1.4;
}
</style>
