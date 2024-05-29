<template>
  <ul class="flex flex-wrap border rounded">
    <li v-for="(i) in iconData"
        :key="index"
        class="w-1/8 border-r border-b flex flex-col justify-center items-center cursor-pointer hover:bg-sky-100">
      <component :is="Icon" :icon="'ep:' + i"></component>
      <div>{{convertToCamelCase(i)}}</div>
    </li>
  </ul>

</template>

<script setup lang="ts">
import {loadIcons, Icon} from '@iconify/vue'
import iconData from './icon-ep.json'

onBeforeMount(async () => {
  await loadIcons()
})

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