<script setup lang="ts">
import { ref } from 'vue';

import { GridRow } from '@/components/form';
import { Spinner } from '@/components/layout';
import { Button, Column, DataTable, Divider, FilterMatchMode, InputSwitch, InputText } from '@/lib/primevue';

import type { Ref } from 'vue';

type DemoObject = {
  name: string;
  value: string;
  toggle: boolean;
};

// State
const initialDatatableValues: Ref<DemoObject[]> = ref([
  { id: 0, name: 'Item 1', value: 'a', toggle: false },
  { id: 1, name: 'Item 2', value: 'b', toggle: false },
  { id: 2, name: 'Item 3', value: 'c', toggle: true },
  { id: 3, name: 'Item 4', value: 'd', toggle: true }
]);
const panelObject: Ref<DemoObject | undefined> = ref(undefined);
const selectedDatatableObjects: Ref<Array<DemoObject>> = ref([]);
const showSidePanel: Ref<boolean> = ref(false);

// Datatable filter(s)
const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS }
});
</script>

<template>
  <h3 class="pt-5 font-bold">Datatable</h3>

  <div class="flex">
    <div class="flex-grow-1">
      <DataTable
        v-model:selection="selectedDatatableObjects"
        v-model:filters="filters"
        :loading="false"
        :value="initialDatatableValues"
        data-key="id"
        class="p-datatable-sm"
        responsive-layout="scroll"
        :paginator="true"
        :rows="10"
        paginator-template="RowsPerPageDropdown CurrentPageReport PrevPageLink NextPageLink "
        current-page-report-template="{first}-{last} of {totalRecords}"
        :rows-per-page-options="[10, 20, 50]"
        :global-filter-fields="['name', 'value']"
      >
        <template #empty>
          <div class="flex justify-content-center">
            <h3>No items found.</h3>
          </div>
        </template>
        <template #loading>
          <Spinner />
        </template>
        <template #header>
          <div class="flex justify-content-end">
            <span class="p-input-icon-left ml-4">
              <i class="pi pi-search" />
              <InputText
                v-model="filters['global'].value"
                placeholder="Search"
              />
            </span>
          </div>
        </template>
        <Column
          selection-mode="multiple"
          header-style="width: 3rem"
        />
        <Column
          field="name"
          header="Name"
          :sortable="true"
        />
        <Column
          field="value"
          header="Value"
          :sortable="true"
        />
        <Column header="Toggle">
          <template #body="{ data }">
            <InputSwitch v-model="data.toggle" />
          </template>
        </Column>
        <Column header="Actions">
          <template #body="{ data }">
            <Button
              class="p-button-lg p-button-rounded p-button-text p-0"
              aria-label="help text"
              @click="
                () => {
                  showSidePanel = true;
                  panelObject = data;
                }
              "
            >
              <font-awesome-icon icon="fa-solid fa-circle-info" />
            </Button>
          </template>
        </Column>
      </DataTable>
    </div>
    <Divider
      v-if="showSidePanel && panelObject"
      layout="vertical"
    />
    <div
      v-if="showSidePanel && panelObject"
      class="flex-shrink-0 w-4 side-panel"
    >
      <div class="flex pl-2">
        <font-awesome-icon
          icon="fa-solid fa-circle-info"
          style="font-size: 2rem"
        />
        <h2 class="mt-0 ml-3 flex-grow-1">Side panel</h2>
        <Button
          icon="pi pi-times"
          text
          rounded
          @click="showSidePanel = false"
        />
      </div>
      <div class="pl-2 sidebar">
        <GridRow
          label="Name"
          :value="panelObject.name"
        />
        <GridRow
          label="Value"
          :value="panelObject.value"
        />
      </div>
    </div>
  </div>
</template>
