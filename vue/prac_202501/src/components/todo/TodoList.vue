<script setup lang="ts">
import { ref } from 'vue'
import TodoItem from './TodoItem.vue'

let idx = 1

const newTodo = ref('')

const todos = ref([
  { idx: idx++, text: 'HTML 배우기', isDone: true },
  { idx: idx++, text: 'JavaScript 배우기', isDone: true },
  { idx: idx++, text: 'Vue 배우기', isDone: false },
])

const addTodo = () => {
  todos.value.push({ idx: idx++, text: newTodo.value, isDone: false })
  newTodo.value = ''
}

const deleteTodo = (idx) => {
  todos.value = todos.value.filter((t) => t.idx !== idx)
}
</script>

<template>
  <form style="margin-bottom: 10px; display: flex; gap: 4px" @submit.prevent="addTodo()">
    <input v-model="newTodo" />
    <button>추가</button>
  </form>
  <TodoItem v-for="todo in todos" :todo="todo" :key="todo.idx" @delete="deleteTodo" />
</template>
