<script setup>
const options = ['VueJs', 'ReactJs', 'Angular'];
</script>

<template>
  <v-select :options="options" :auto-select="true" :complete-search="true" input-id="inp">
    <template #header="{id,selectedValue, open}">
      <label :for="id" class="fly-label"
             :class="{'fly-label_top': (selectedValue && selectedValue.length>0) || open}">Fly label</label>
    </template>
  </v-select>
</template>

<style scoped>
.v-select {
  margin-top: 40px;
}

:deep(.vs__dropdown-toggle) {
  border-width: 0 0 1px 0;
  --vs-border-radius: 0;
}

.fly-label {
  position: absolute;
  height: var(--vs-height);
  display: flex;
  align-items: center;
  padding-left: 8px;
  top: 0;
  left: 0;
  transition: all var(--vs-transition-duration) var(--vs-transition-timing-function);
}

.fly-label.fly-label_top {
  top: -30px;
  padding-left: 0;
  font-size: 12px;
}
</style>