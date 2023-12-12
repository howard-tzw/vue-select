<template>
  <v-select
      v-model="selected"
      placeholder="choose a country"
      :components="{ Deselect }"
      :options="['Canada', 'United States']"
  />
</template>

<script setup>
import {ref} from "vue";
import Deselect from "./CustomDeselect.vue";

const selected = ref(['Canada']);
</script>