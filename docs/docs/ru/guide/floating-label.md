---
prev:
  text: Применение в циклах
  link: /ru/guide/loops
next:
  text: События клавиатуры
  link: /ru/guide/keydown
---
# Плавающая метка

<Badge type="tip" text="v1.2.0+" vertical="top" />

Популярным решением является размещение метки поля поверх самого поля, когда оно пустое и неактивно. Когда поле получает
фокус или заполнено значением - метка перемещается вверх. Такой механизм можно реализовать используя слот `header` и
стилей CSS.

# Floating Field Label

A popular solution is to position the field label above the field itself when it is empty and inactive. When the field gains focus or is filled with a value, the label moves upward. This mechanism can be implemented using the `header` slot and CSS styles.

<FlyLabel :options="['VueJs','ReactJs','Angular']"/>

@[code](../../.vuepress/components/FlyLabel.vue)