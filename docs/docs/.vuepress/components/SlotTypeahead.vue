<script setup>
const options = ['Albania', 'Algeria', 'American Samoa',
  'Andorra', 'Angola', 'Anguilla', 'Antarctica'];
</script>

<template>
  <v-select
      :options="options"
      :auto-select="true"
      :complete-search="true"
  >
    <template v-slot:typeahead="{ canCompleteSearch, completedText }">
      <div class="vs__search_position vs__search_complete"
           v-if="canCompleteSearch && completedText!==''">
        {{ completedText }}
        <small>&nbsp;&nbsp;&nbsp;will be selected</small>
      </div>
    </template>
  </v-select>
</template>

<style scoped>

</style>