<script setup lang="ts">
import { Button, Message } from '@/lib/primevue';
import { storeToRefs } from 'pinia';

import { useConfigStore, useHelloStore } from '@/store';

// Store
const helloStore = useHelloStore();
const { getConfig } = storeToRefs(useConfigStore());
const { getHello } = storeToRefs(helloStore);
</script>

<template>
  <Message
    v-if="getConfig?.notificationBanner"
    severity="warn"
  >
    {{ getConfig?.notificationBanner }}
  </Message>

  <div class="flex flex-column">
    <div class="flex justify-content-center mb-5">
      <h1 class="font-bold">
        {{ getHello }}
      </h1>
    </div>
    <div class="flex justify-content-center mb-5">
      <Button @click="helloStore.helloWorld()">Make an API call!</Button>
    </div>
  </div>
</template>
