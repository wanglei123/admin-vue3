<template>
  <NetIcon  v-bind="props" />
</template>

<script setup lang="ts">
import type {NetIconProps} from '@/components/Icon/types'
import NetIcon from '@/components/Icon/NetIcon.vue'

const props = withDefaults(defineProps<NetIconProps>(), {
  url: '/font_4565743_huu4z2efdn4',
  prefix: 'icon-',
  fontFamily: 'iconfont',
  type: ''
})

</script>

<style scoped>

</style>