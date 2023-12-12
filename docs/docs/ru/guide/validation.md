---
prev:
  text: Localization
  link: /ru/guide/localization
next:
  text: Ограничение выбора
  link: /ru/guide/selectable
---

# Проверки

## Обязательное

Если вам нужно убедиться, что опция выбрана до отправки формы, вы можете использовать атрибут `required` в сочетании со
строкой поиска.

Однако поисковая строка в компоненте фактически не хранит значение, поэтому простое добавление требуемого атрибута не
сработает. Вместо этого мы будем привязывать атрибут динамически, так что он будет присутствовать только в том случае,
если у нас нет выделения.

<ValidationRequired />

```html
<v-select :options="books" label="title" v-model="selected">
    <template #search="{attributes, events}">
        <input
                class="vs__search"
                :required="!selected"
                v-bind="attributes"
                v-on="events"
        />
    </template>
</v-select>
```