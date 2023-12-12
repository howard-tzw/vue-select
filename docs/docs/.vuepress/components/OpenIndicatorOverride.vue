<template>
  <v-select
      :options="['Canada', 'United States']"
      :components="{ OpenIndicator }"
  />
</template>

<script setup>
import OpenIndicator from "./CustomOpenIndicator.vue";
</script>