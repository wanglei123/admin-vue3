<template>
  <svg aria-hidden="true">
    <use :xlink:href="symbolId" :fill="color" />
  </svg>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
const props = defineProps({
  prefix: {
    type: String,
    default: 'icon'
  },
  type: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: 'currentColor'
  }
})
// 格式要与vite.config.js中symbolId的格式一致
const symbolId = computed(() => `#${props.prefix}-${props.type}`)


</script>