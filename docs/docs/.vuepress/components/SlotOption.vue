<template>
  <v-select :options="books" label="title">
    <template #option="{ title, author }">
      <strong style="display:block;margin: 0">{{ title }}</strong>
      <em>{{ author.firstName }} {{ author.lastName }}</em>
    </template>
  </v-select>
</template>

<script>
export default {
  data: () => ({
    books: [
      {
        title: "Old Man's War",
        author: {
          firstName: 'John',
          lastName: 'Scalzi',
        },
      },
    ],
  }),
}
</script>
