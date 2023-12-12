---
prev:
 text: Проверки
 link: /ru/guide/validation
next:
 text: Разбивка на страницы
 link: /ru/guide/pagination
---


# Ограничение выбора

## Параметр Selectable

Параметр `selectable` определяет, является ли опция выбираемой или нет. Если `selectable` возвращает значение false для
данной опции, она будет отображаться с классом `vs__dropdown-option--disabled`. Опция будет отключена и ее невозможно 
будет выбрать.

```js
selectable: {
  type: Function,
  /**
   * @param {Object|String} option
   * @return {boolean}
   */
  default: option => true,
},
```

В примере `selectable` используется для предотвращения выбора книг определенного автора. Параметры, 
передаваемые компоненту, являются объектами:

```json
{
  "title": "Right Ho Jeeves",
  "author": { "firstName": "P.D", "lastName": "Woodhouse" }
}
```

Этот объект будет передан в `selectable`, чтобы мы могли проверить, должен ли автор быть выбранным или нет.

<UnselectableExample />

@[code{1-8} vue{6}](../../.vuepress/components/UnselectableExample.vue)

## Ограничения количества выбранных опций

`selectable` также может быть использована, чтобы ограничить количество вариантов, которые могут быть выбраны в
компоненте. В этом случае пользователь может выбрать любого автора, но может выбрать максимум три книги.

<LimitSelectionQuantity />

@[code{1-10} vue{8}](../../.vuepress/components/LimitSelectionQuantity.vue)
