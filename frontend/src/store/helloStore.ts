import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

import { helloService } from '@/services';
import { useAppStore } from '@/store';

import type { Ref } from 'vue';

export type HelloStoreState = {
  hello: Ref<any | null>;
};

export const useHelloStore = defineStore('hello', () => {
  // Store
  const appStore = useAppStore();

  // State
  const state: HelloStoreState = {
    hello: ref(null)
  };

  // Getters
  const getters = {
    getHello: computed(() => state.hello.value)
  };

  // Actions
  async function helloWorld() {
    try {
      appStore.beginIndeterminateLoading();
      state.hello.value = (await helloService.helloWorld()).data;
    } finally {
      appStore.endIndeterminateLoading();
    }
  }

  return {
    // State
    ...state,

    // Getters
    ...getters,

    // Actions
    helloWorld
  };
});

export default useHelloStore;
