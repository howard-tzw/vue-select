<template>
  <div>
    <v-select
        v-model="selected"
        placeholder="choose a country"
        :components="{ Deselect }"
        :options="['Canada', 'United States']"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";

const selected = ref(['Canada']);

const Deselect = {
  template: '<span>❌</span>',
};
</script>