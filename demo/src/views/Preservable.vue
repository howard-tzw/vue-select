<script setup lang="ts">
import { ref, watch } from 'vue'
import countries from '../mocks/countryCodes.js'

const selected = ref(null)
const options = ref(countries)

watch(selected, () => {
  console.log('preservable watch: ', selected.value)
})
</script>

<template>
  <div>
    <div class="section">
      <h2 class="title">Preservable</h2>
      <v-select preservable v-model="selected" :options="options" />
    </div>
  </div>
</template>

<style lang="scss"></style>
