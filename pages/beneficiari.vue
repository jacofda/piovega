<template>
  <div class="mx-auto w-full max-w-3xl space-y-10 lg:max-w-5xl pb-6 flex flex-col justify-center items-center">
    <NuxtLink title="home" to="/">
      <img :src="config.public.cdn + '/fattoria.png'" class="h-[20vh] object-contain p-4" />
    </NuxtLink>

    <p class="text-4xl">MISURA/INTERVENTO 4.4.3</p>

    <p class="text-xl">
      “Strutture funzionali all’incremento e la valorizzazione della biodiversità naturalistica-Dotazione necessarie al
      miglioramento della consistenza tra le attività agricolo/zootecniche e fauna selvatica” PSR Veneto
      2014-2020.Reg.(UE) n.1305/2013,Art.14.DGR n.319 del 18 Marzo 2021.
    </p>

    <p class="text-3xl">DESCRIZIONE OPERAZIONE</p>

    <p class="text-xl">
      La nostra azienda ha messo in opera i recinti dei nostri pascoli, usando come supporto i pali in castagno con la
      punta trattata, applicandogli isolatori in plastica e come conduttori per l’elettrificazione abbiamo optato alla
      fune per recinzione di diametro 6mm.
    </p>

    <p class="text-xl">
      La recinzione è composta da 6 giri di corda elettrificata lungo tutto il recinto e le aperture sono state create
      con i kit molla (cancello) appositi per poter mantenere la chiusura e protezione anche nelle parti di passaggio.
    </p>

    <p class="text-xl">
      Il recinto è stato alimentato da un kit elettrificatore con alimentazione autonoma a batteria con carica tramite
      pannello solare.
    </p>

    <p class="text-xl">
      Lungo il percorso del recinto sono stati affissi dei cartelli di pericolo che segnalano la presenza di tensione
      nei conduttori.
    </p>

    <div class="text-left">
      <p class="text-2xl mb-4">
        <b>FINALITÀ</b>
        : Protezione degli animali dagli attacchi di grandi carnivori.
      </p>

      <p class="text-2xl mb-4">
        <b>RISULTATI</b>
        : Protezione di bovini e caprini al pascolo.
      </p>

      <p class="text-2xl mb-4">
        <b>IMPORTO FINANZIATO</b>
        : € 2525,00
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();

useSeoMeta({
  title: "Beneficiari - Fattoria Piovega ",
  description:
    "La nostra azienda ha messo in opera i recinti dei nostri pascoli, usando come supporto i pali in castagno con la punta trattata",
});
</script>
