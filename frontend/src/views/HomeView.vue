<script setup lang="ts">
import { Message } from '@/lib/primevue';
import { storeToRefs } from 'pinia';
import { onBeforeMount } from 'vue';

import { useConfigStore, useHelloStore } from '@/store';

// Store
const helloStore = useHelloStore();
const { getConfig } = storeToRefs(useConfigStore());
const { getHello } = storeToRefs(helloStore);

// Actions
const ecosystem: Array<{ text: string, href: string }> = [
  {
    text: 'Vue 3',
    href: 'https://vuejs.org/'
  },
  {
    text: 'Pinia',
    href: 'https://pinia.vuejs.org/'
  },
  {
    text: 'PrimeVue',
    href: 'https://primevue.org/'
  },
  {
    text: 'Express',
    href: 'https://expressjs.com/'
  },
];

onBeforeMount( () => {
  helloStore.helloWorld();
});
</script>

<template>
  <Message
    v-if="getConfig?.notificationBanner"
    severity="warn"
  >
    {{ getConfig?.notificationBanner }}
  </Message>

  <div class="flex flex-column mr-8 ml-8">
    <div class="flex justify-content-center mb-5">
      <h1 class="font-bold">
        {{ getHello }}
      </h1>
    </div>
    <div class="flex justify-content-center mb-5">
      <div class="text-xl text-center">
        <h2>Ecosystem</h2>
        <a
          v-for="(eco, i) in ecosystem" 
          :key="i"
          :href="eco.href"
          class="mx-3"
          target="_blank"
        >
          {{ eco.text }}
        </a>
      </div>
    </div>
  </div>
</template>
