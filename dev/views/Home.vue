<template>
  <div>
    <div class="section">
      <h2 class="title">Basic</h2>
      <v-select v-model="selected" :options="options" />
    </div>

    <div class="section">
      <h2 class="title">Custom</h2>
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

    <div class="section">
      <h2 class="title">BaseSelect</h2>
      <BaseSelect v-model="selectedOption" :options="baseSelectOptions" />
    </div>

    <div class="section">
      <h2 class="title">BaseSelect</h2>
      <ul>
        <li>no-drop: true</li>
      </ul>
      <BaseSelect
        v-model="selectedOption"
        :options="baseSelectOptions"
        no-drop
      />
    </div>

    <div class="section">
      <h2 class="title">BaseSelect</h2>
      <ul>
        <li>disabled: true</li>
      </ul>
      <BaseSelect
        v-model="selectedOption"
        :options="baseSelectOptions"
        disabled
      />
    </div>

    <div class="section">
      <h2 class="title">BaseSelect</h2>
      <ul>
        <li>no-drop: true</li>
        <li>disabled: true</li>
      </ul>
      <BaseSelect
        v-model="selectedOption"
        :options="baseSelectOptions"
        no-drop
        disabled
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import countries from '../../docs/.vuepress/data/countryCodes.js'
import BaseSelect from '../components/BaseSelect.vue'

const selected = ref(null)
const options = ref(countries)

const computedOptions = computed(() => countries)

const baseSelectOptions = ref(
  countries.map((country) => ({
    name: country.label,
    value: country.value,
  }))
)
const selectedOption = ref()

setTimeout(() => {
  selectedOption.value = baseSelectOptions.value[0]
}, 500)
</script>

<style scoped></style>
