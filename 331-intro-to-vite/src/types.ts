export interface Event {
  id: number
  category: string
  title: string
  description: string
  location: string
  date: string
  time: string
  petsAllowed: boolean
  organizer: string
}

// 更新学生类型以匹配实际API数据结构
export interface Student {
  id: number
  studentId: string
  name: string
  surname: string
  gpa: number
  image: string
  penAmount: number
  description: string
}
