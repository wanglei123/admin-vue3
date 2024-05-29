<template>
 <i :class="className"></i>
</template>

<script lang="ts" setup>
import type {NetIconProps} from '@/components/types'

const props = withDefaults(defineProps<NetIconProps>(), {
  url: '',
  prefix: 'icon-',
  fontFamily: 'iconfont',
  type: ''
})

onBeforeMount(() => {
  if(props.url){
    const existingLink = document.querySelector(`link[href="${props.url}"]`)
    if(!existingLink){
      const link = document.createElement('link')
      link.href = props.url
      document.head.appendChild(link)
    }
  }
})

const className = computed(() => `${props.fontFamily} ${props.prefix}${props.type}`)

</script>

<style lang="scss" scoped>

</style>