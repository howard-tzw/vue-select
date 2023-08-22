<script setup lang="ts">
import { ref, watch } from 'vue'
import countries from '../mocks/countryCodes.js'

const selected = ref(null)
const options = ref(countries)

watch(selected, () => {
  console.log('watch model: ', selected.value)
})
</script>

<template>
  <div>
    <div class="section">
      <h2 class="title">Placeholder</h2>
      <v-select
        v-model="selected"
        placeholder="Hello World"
        :options="options"
      />
    </div>
  </div>
</template>

<style lang="scss"></style>
