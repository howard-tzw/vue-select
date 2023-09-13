<script setup lang="ts">
import { computed } from 'vue'

defineOptions({ inheritAttrs: false })
const modelValue = defineModel()

// const props = withDefaults(defineProps<{}>(), {})
</script>

<template>
  <div>
    <input type="text" v-model="modelValue" />
  </div>
</template>

<style lang="scss">
@import '../css/vue-select.css';
</style>
