<template>
  <img :src="config.public.cdn + '/fattoria.png'" class="h-[50vh] object-contain p-4" />
  <NuxtLink to="/beneficiari">
    <img
      src="https://www.altoastico.it/ae00812/images/PSR/Banner_PSR_beneficiari.png"
      class="h-[33vh] object-contain p-4"
      alt="benificiari altoastico" />
  </NuxtLink>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();

useSeoMeta({
  title: "Fattoria Piovega - Formaggi Salumi e Altre Freschezze",
  description:
    "Fattoria piovega: produzione latte formaggi (capra e mucca) e salumi a Primolano sulla ciclabile trento bassano.",
});
</script>
