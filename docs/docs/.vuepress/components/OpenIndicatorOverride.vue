<template>
  <div>
    <v-select
      :options="['Canada', 'United States']"
      :components="{ OpenIndicator }"
    />
  </div>
</template>

<script setup>
const OpenIndicator = {
  template: '<span>🔽</span>',
};
</script>