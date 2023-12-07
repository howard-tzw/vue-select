<template>
  <v-select
      :options="['Vue.js', 'React', 'Angular']"
      :components="{ Deselect, OpenIndicator }"
  />
</template>

<script setup>
const Deselect = {
  template: '❌'
}
const OpenIndicator = {
  template: '<span>🔽</span>'
}
</script>
