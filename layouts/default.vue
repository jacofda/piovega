<template>
  <div class="" @click="layoutsStore.hideAll">
    <!-- <LayoutTheHeader /> -->
    <slot />
    <!-- <LayoutTheFooter /> -->
  </div>
</template>

<script setup lang="ts">
import { useLayoutStore } from '~/store/layouts'

useHead({
  bodyAttrs: {
    class: ``,
  },
})
const layoutsStore = useLayoutStore()
</script>
