<template>
  <div class="demo-body">
    <h1 id="top">Top of page</h1>
    <button id="btn" @click="toggleScroll">Toggle scroll</button>
    <h1 id="bottom">Bottom of page</h1>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { enableScroll, disableScroll } from 'ts-scroll-lock'

const isActive = ref(false)

const toggleScroll = () => {
  if (isActive.value) enableScroll()
  else disableScroll()
  isActive.value = !isActive.value
}
</script>

<style scoped>
.demo-body {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 5000px;
}
</style>
