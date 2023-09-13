<script setup lang="ts">
import { ref } from 'vue'

const options = [
  {
    label: 'foo',
  },
  {
    label: 'bar',
  },
]
const selected = ref(options[0])

const optionList = ['foo', 'bar']
const selectedOption = ref(optionList[0])
</script>

<template>
  <div>
    <div class="section">
      <h2 class="title">Good</h2>
      <v-select
        :preservable="false"
        :clearable="false"
        v-model="selected"
        :options="options"
      >
      </v-select>

      <div class="h-5"></div>

      <h2 class="title">NG (fixed)</h2>

      <v-select
        :preservable="false"
        :clearable="false"
        v-model="selectedOption"
        :options="optionList"
      >
        <!-- <template #option="{ code, name }">
          {{ name }} with code: {{ code }}
        </template> -->
      </v-select>
    </div>
  </div>
</template>

<style scoped></style>
