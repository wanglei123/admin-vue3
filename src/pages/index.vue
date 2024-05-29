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
  <div>
    <component :is="Icon" :icon="iconRef"></component>
  </div>
  <SvgIcon type="bangonglou" class="text-blue text-2xl w-5 h-5"/>
  <div>netIcon</div>
  <div>
    <NetIcon url="//at.alicdn.com/t/c/font_4565743_huu4z2efdn4.css" type="xiyifang" class="w-5 h-5 text-red text-3xl" />
  </div>
  <div>
    <IconFontIcon type="kongzhonghuayuan" class="w-5 h-5 text-red text-3xl" />
  </div>
  <div>
    <IconFontIcon type="weibolu" class="w-3 h-4 text-blue text-3xl" />
  </div>


</template>

<script setup lang="ts">
import { registerSW } from 'virtual:pwa-register'
import { Icon, loadIcons } from '@iconify/vue';
import json from '@iconify/json/json/mdi.json'
import IconFontIcon from '@/components/IconFontIcon.vue'


const arr = Object.keys(json.icons)
const iconRef = ref(arr[0])

// icons 预加载 从网络上读取数据
onBeforeMount(async () => {
  await loadIcons(arr.map(o => json.prefix + ':' + o))
})

onMounted(() => {
  setInterval(() => {
    iconRef.value = json.prefix + ':' + arr[Math.floor(Math.random() * arr.length)]
  }, 1000)
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
