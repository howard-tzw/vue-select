<template>
  <div>
    <v-select
      v-model="selected"
      multiple
      :options="['Canada', 'United States']"
      :components="{ Deselect }"
    />
  </div>
</template>

<script setup>
import {ref} from "vue";

const selected = ref(['Canada']);

const Deselect = {
  template: '<span>❌</span>',
};
</script>