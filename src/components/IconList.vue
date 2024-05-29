<template>
  <ul class="flex flex-wrap border rounded">
    <li v-for="(i) in iconData"
        :key="index"
        class="w-1/8 border-r border-b flex flex-col justify-center items-center cursor-pointer hover:bg-sky-100">
      <component :is="Icon" :icon="'ep:' + i"></component>
      <div>{{i}}</div>
    </li>
  </ul>

</template>

<script setup lang="ts">
import {loadIcons, Icon} from '@iconify/vue'
import iconData from './icon-ep.json'

onBeforeMount(async () => {
  await loadIcons()
})
</script>

<style scoped>

</style>