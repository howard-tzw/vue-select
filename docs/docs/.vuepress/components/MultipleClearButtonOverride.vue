<template>
  <v-select
      v-model="selected"
      multiple
      :options="['Canada', 'United States']"
      :components="{ Deselect }"
  />
</template>

<script setup>
import {ref} from "vue";
import Deselect from "./CustomDeselect.vue";

const selected = ref(['Canada']);
</script>