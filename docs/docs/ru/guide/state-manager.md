---
prev:
  text: Бесконечная прокрутка
  link: /ru/guide/infinite-scroll
next:
  text: AJAX
  link: /ru/guide/ajax
---

# Менеджер состояний

## Стандартная обработка событий

В обычной ситуации для интеграции достаточно передать переменную в `v-model`
```html
<v-select
        :options="$store.state.options"
        v-model="$store.state.selected"
></v-select>
```

<CodePen url="rNPbvQE" height="350"/>

## Дополнительная обработка событий

Если вам необходимы дополнительные действия при изменении переменной вы можете воспользоваться сочетанием свойства
`value` и событием `update:model-value`.

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

