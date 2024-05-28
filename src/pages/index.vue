<template>
  <div>home</div>
  <div class="mb-4">
    <el-button>Default</el-button>
    <el-button type="primary">123</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </div>
  <div>
    <Icon icon="mdi-light:home" class="text-3xl cursor-pointer color-sky" />
  </div>
</template>

<script setup lang="ts">
import { registerSW } from 'virtual:pwa-register'
import { Icon } from '@iconify/vue';

onMounted(() => {
  registerSW({
    immediate: true,
    onRegisteredSW(_url, registration) {
      console.log('🚀 ~ onRegisteredSW ~ registration:', registration)
      console.log('🚀 ~ onRegisteredSW ~ _url:', _url)
      setInterval(() => {
        registration && registration.update()
      }, 3600000)
    }
  })
})
</script>

<style scoped></style>

<route lang="yaml">
meta:
  layout: default
</route>
