<template>
  <div class="" @click="layoutsStore.hideAll">
    <div class="flex flex-col justify-between items-center h-screen">
      <slot class="" />
      <footer class="mx-auto w-full max-w-3xl space-y-10 lg:max-w-5xl pb-6">
        <div
          class="flex flex-col items-center justify-center gap-5 border-t border-zinc-900/5 pt-8 dark:border-white/5 sm:flex-row">
          <p class="text-xs text-zinc-600 dark:text-zinc-400">
            © Copyright 2017 - {{ new Date().getFullYear() }} . Tutt i diritti riservati.
            <NuxtLink class="text-blue-600" to="/beneficiari">INFO</NuxtLink>
          </p>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useLayoutStore } from "~/store/layouts";

useHead({
  bodyAttrs: {
    class: ``,
  },
});
const layoutsStore = useLayoutStore();
</script>
