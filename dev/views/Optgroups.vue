<template>
  <div>
    <div class="section">
      <h2 class="title">feat: optgroups</h2>
      <ul>
        <li>searchable: false</li>
        <li>clearable: false</li>
      </ul>
      <v-select
        v-model="selected"
        :options="computedOptions"
        :clearable="false"
        :searchable="false"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import countries from '../../docs/.vuepress/data/countryCodes.js'

const selected = ref(null)
const options = ref(countries)

const computedOptions = computed(() => countries)
</script>

<style scoped></style>
