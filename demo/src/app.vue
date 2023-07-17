<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
html,
body {
  margin: 0;
  height: 1000px;
  font-family: -apple-system, sans-serif;
  background-color: #fafafa;
}

.title {
  @apply text-lg;
}

.section {
  @apply p-5;
}
</style>
