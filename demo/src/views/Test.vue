<script setup lang="ts">
import { ref } from 'vue'

// ============ 1 ============

const options = [
  {
    label: 'foo',
  },
  {
    label: 'foody',
  },
  {
    label: 'bar',
  },
]
const selected = ref()

// ============ 2 ============

const optionList = ['foo', 'bar', 'foody']
const selectedOption = ref(optionList[0])

// ============ 3 ============

const selectedOption3 = ref('foo')
</script>

<template>
  <div>
    <div class="section">
      <!-- 1 -->
      <h2 class="title">Good</h2>
      <v-select
        :preservable="false"
        :clearable="false"
        v-model="selected"
        :options="options"
      >
      </v-select>

      <div class="h-5"></div>

      <!-- 2 -->

      <h2 class="title">NG (fixed)</h2>

      <v-select
        :preservable="false"
        :clearable="false"
        v-model="selectedOption"
        :options="optionList"
      >
      </v-select>

      <div class="h-5"></div>
      <!-- 3 -->

      <h2 class="title">Good</h2>
      <v-select v-model="selected" :options="options"> </v-select>

      <div class="h-5"></div>
      <!-- 4 -->

      <h2 class="title">NG</h2>
      <v-select v-model="selectedOption3" :options="optionList"> </v-select>
    </div>
  </div>
</template>

<style scoped></style>
