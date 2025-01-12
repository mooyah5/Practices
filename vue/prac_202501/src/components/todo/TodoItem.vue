<script setup lang="ts">
defineProps({
  todo: { name: String, idx: Number, isDone: Boolean },
})
</script>

<template>
  <div style="display: flex; gap: 4px; padding: 2px 0">
    <input
      :id="todo.idx"
      type="checkbox"
      :checked="todo.isDone"
      @change="$emit('update:isDone', !todo.isDone)"
    />
    <label :for="todo.idx" style="color: white">{{ todo.text }}</label>
    <button @click="$emit('delete', todo.idx)">삭제</button>
  </div>
</template>
