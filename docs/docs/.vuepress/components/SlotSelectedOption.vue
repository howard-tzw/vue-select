<template>
  <v-select v-model="selected" :options="books" label="title">
    <template #selected-option="{ title, author }">
      <div style="display: flex; align-items: baseline">
        <strong>{{ title }}</strong>
        <em style="margin-left: 0.5rem;opacity:0.7">by {{ author.firstName }} {{ author.lastName }}</em>
      </div>
    </template>
  </v-select>
</template>

<script>
const book = {
  title: "Clean Architecture",
  author: {
    firstName: 'Robert',
    lastName: 'Martin',
  },
}
export default {
  data: () => ({
    books: [
      book,
      {
        title: "Old Man's War",
        author: {
          firstName: 'John',
          lastName: 'Scalzi',
        },
      }
    ],
    selected: book,
  }),
}
</script>
