<template>
  <div>
    <Notification value="10023" :scale="scale" color="green" size="16" />
  </div>
  <button @click="scale = 0.5">scale 0.5</button>
  <button @click="scale = 1">scale 1</button>
  <button @click="scale = 1.5">scale 1.5</button>
</template>

<script setup lang="ts">
const scale = ref(0.5)

</script>

<style scoped>

</style>