<template>
  <div>
    <el-switch
      v-model="copyFlag"
      class="mb-2"
      inactive-text="复制svg图标"
      active-text="复制图标名称"
    />
  </div>
  <ul class="flex flex-wrap border rounded">
    <li v-for="(i) in iconData"
        :key="index"
        @click="handleClick(i)"
        class="w-1/8 border-r border-b flex flex-col justify-center items-center cursor-pointer hover:bg-sky-100">
      <component :is="Icon" :icon="'ep:' + i" class="text-3xl mb-3"></component>
      <div>{{convertToCamelCase(i)}}</div>
    </li>
  </ul>
  <svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" transform="translate(0,0) rotate(0)  ">
    <path fill="currentColor" d="M512 832a320 320 0 1 0 0-640a320 320 0 0 0 0 640m0 64a384 384 0 1 1 0-768a384 384 0 0 1 0 768"/><path fill="currentColor" d="m292.288 824.576l55.424 32l-48 83.136a32 32 0 1 1-55.424-32zm439.424 0l-55.424 32l48 83.136a32 32 0 1 0 55.424-32zM512 512h160a32 32 0 1 1 0 64H480a32 32 0 0 1-32-32V320a32 32 0 0 1 64 0zM90.496 312.256A160 160 0 0 1 312.32 90.496l-46.848 46.848a96 96 0 0 0-128 128L90.56 312.256zm835.264 0A160 160 0 0 0 704 90.496l46.848 46.848a96 96 0 0 1 128 128z"/>
  </svg>
</template>

<script setup lang="ts">
import { ElMessage } from 'element-plus'
import {loadIcon,loadIcons, Icon} from '@iconify/vue'
import iconData from './icon-ep.json'
import { useClipboard } from '@vueuse/core'

// true 复制name
// false 复制svg
const copyFlag = ref(true)
const source = ref('')
const { text, copy, copied, isSupported } = useClipboard({ source })

onBeforeMount(async () => {
  await loadIcons()
})

function objectToSvg(svgObject: any){
  const {body, hFlip, height, left, rotate, top, vFlip, width} = svgObject
  const svgString = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" transform="translate(${left},${top}) rotate(${rotate})${hFlip ? 'scale(-1, 1)' : ''} ${vFlip ? 'scale(-1, 1)' : ''} ">
        ${body}
        </svg>`
  return svgString
}

const handleClick = async (i: string) => {
  if(!copyFlag.value){
    const res = await loadIcon('ep:' + i)
    source.value = objectToSvg(res)
  } else {
    source.value = convertToCamelCase(i)
  }
  copy()
  copied && ElMessage({
    message: '复制成功',
    type: 'success',
  })

}

function convertToCamelCase(str) {
  // 但是上面的代码只会将短横线后面的字符变为大写，而整个单词的首字母仍然是小写
  // 因此，我们需要进一步处理，将结果字符串的第一个字符转为大写
  const camelCaseStr = str.charAt(0).toUpperCase() + str.slice(1).replace(/-([a-z])/g, (match, group1) => group1.toUpperCase());

  // 还需要处理如果原始字符串以短横线开头的情况，这会导致第一个字符变为大写短横线后的字符
  // 所以我们需要特别检查这种情况
  if (str.charAt(0) === '-') {
    return camelCaseStr.slice(1);
  }

  return camelCaseStr;
}

</script>

<style scoped>

</style>