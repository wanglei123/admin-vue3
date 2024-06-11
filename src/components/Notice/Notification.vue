<template>
<!--  如果value是字符串的话，就不受max的影响-->
  <el-badge
    :value="value"
    :max="100"
    :style="{'--toimc-notice-bg-color': color || 'var(--el-color-danger)',
    '--toimc-notice-font-size': size + 'px' || 'var(--el-badge-size)'}"
    class="item">
    <slot>
      <Icon
        icon="ep:bell"
        :style="{color : iconColor ? iconColor : '#333', fontSize: iconSize ? `${iconSize}px` : '18px'}" />
    </slot>
  </el-badge>
</template>

<script setup lang="ts">
import Icon from '../Icon/Iconify.vue'
import { type IconifyIcon } from '@iconify/vue'
import {BadgeProps} from 'element-plus'

interface NotificationProps extends Partial<BadgeProps> {
  icon: string | IconifyIcon
  iconSize?: number
  iconColor?: string
  size: number
  color: string
}

withDefaults(defineProps<NotificationProps>(), {
  icon: 'ep:bell',
  size: 14,
  color: ''
})



</script>

<style lang="scss" scoped>
$color: var(--toimc-notice-bg-color);
$size: var(--toimc-notice-font-size);

:deep(.el-badge__content){
  background-color: $color;
  font-size: $size;
}

</style>