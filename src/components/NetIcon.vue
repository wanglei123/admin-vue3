<template>
 <i :class="className"></i>
</template>

<script lang="ts" setup>
const props = defineProps({
  url: {
    type: String,
    default: ''
  },
  prefix: {
    type: String,
    default: 'icon-'
  },
  fontFamily: {
    type: String,
    default: 'iconfont'
  },
  type: {
    type: String,
    default: ''
  }
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