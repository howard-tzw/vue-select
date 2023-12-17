---
prev:
  text: Using in Loops
  link: /guide/loops
next:
  text: Keydown Events
  link: /guide/keydown
---

# Floating Label  

<Badge type="tip" text="v1.2.0+" vertical="top" />

A popular solution is to position the field label above the field itself when it is empty and inactive. When the field gains focus or is filled with a value, the label moves upward. This mechanism can be implemented using the `header` slot and CSS styles.

<FlyLabel :options="['VueJs','ReactJs','Angular']"/>

@[code](../.vuepress/components/FlyLabel.vue)