---
title: Floating Label
sidebarDepth: 0
prev:
  text: Using in Loops
  link: /use-cases/loops
next:
  text: Tag Input Field
  link: /use-cases/tag-input
---

# Floating Label  

<Badge type="tip" text="v1.2.0+" vertical="top" />

A popular solution is to position the field label above the field itself when it is empty and inactive. When the field gains focus or is filled with a value, the label moves upward. This mechanism can be implemented using the `header` slot and CSS styles.

<FlyLabel :options="['VueJs','ReactJs','Angular']"/>

@[code](../../.vuepress/components/FlyLabel.vue)