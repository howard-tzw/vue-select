---
sidebarDepth: 0
prev:
  text: AJAX
  link: /ru/use-cases/ajax
next:
  text: Плавающая метка
  link: /ru/use-cases/floating-label
---

# Применение в циклах

Могут быть случаи, когда вы включаете Vs Vue3 Select в циклы данных, такие как таблица. Это может создать некоторые 
проблемы при отправке событий из компонента, поскольку вы не будете знать, какой экземпляр Vs Vue3 Select его отправил.

Вы можете решить эту проблему с помощью анонимной функции. `@input` обрабатывается встроенной анонимной функцией, 
позволяющей передавать выбранную страну методу `updateCountry` вместе со `country` и объектом `person`.

<LoopedSelect />

@[code](../../../.vuepress/components/LoopedSelect.vue)
