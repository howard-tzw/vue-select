---
prev:
 text: Infinite Scroll
 link: /guide/infinite-scroll
next:
 text: AJAX
 link: /guide/ajax
---
# State manager

## Standard event handling

In a normal situation, for integration, it is enough to pass a variable to `v-model`

```html
<v-select
        :options="$store.state.options"
        v-model="$store.state.selected"
></v-select>
```

<CodePen url="rNPbvQE" height="350"/>

## Additional event handling

If you need additional actions when changing a variable, you can use the combination
`value` prop and `update:model-value` event.

```html
<v-select
        @update:model-value="customHandler"
        :options="$store.state.options"
        :value="$store.state.selected"
></v-select>
```
```js
customHandler(val) {
    // Некоторые действия и вызов мутации
    this.$store.commit("setActiveBook", val);
}
```
<CodePen url="QWYPVMm" height="350"/>
