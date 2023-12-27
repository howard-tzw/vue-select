<script setup>
import {ref} from "vue";

const props = defineProps({
  value: String
})
const modelValue = ref(props.value)
const myInput = ref(null);
const copy = () => {
  if (!navigator.clipboard) {
    myInput.value.select();
    document.execCommand('copy');
    myInput.value.blur();
  } else {
    navigator.clipboard.writeText(modelValue.value);
  }
}
</script>

<template>
  <div>
    <input type="text" :value="modelValue" ref="myInput">
    <span @click="copy"></span>
  </div>
</template>

<style scoped>
div {
  background: var(--vs-dropdown-bg);
  border: var(--vs-border-width) var(--vs-border-style) var(--vs-border-color);
  border-radius: var(--vs-border-radius);
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  display: flex;
}

span {
  width: var(--vs-height);
  height: var(--vs-height);
  position: relative;
  cursor: pointer;
  opacity: 0.5;
  transition: opacity var(--vs-transition-duration) var(--vs-transition-timing-function);
}

span:hover {
  opacity: 1;
}

span::after, span::before {
  content: '';
  position: absolute;
  border: 1px solid var(--vs-border-color);
  height: 14px;
  width: 10px;
  border-radius: 2px;
  background: var(--vs-dropdown-bg);
  margin-top: 50%;
  margin-left: 50%;
}

span::after {
  top: -6px;
  left: -8px;
}

span::before {
  top: -11px;
  left: -3px;
}

input {
  flex: 1;
  color: var(--vs-search-input-color);
  height: var(--vs-height);
  padding: 0 8px;
  white-space: normal;
  background: transparent;
  border: none;
  font-size: var(--vs-font-size);
  outline: none;
}
</style>