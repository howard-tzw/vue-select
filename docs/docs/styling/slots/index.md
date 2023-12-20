---
prev:
 text: CSS Styling
 link: /styling/css
next:
 text: WAI-ARIA Spec
 link: /accessibility/wai-aria
---
# Slots styling

Vs Vue3 Select currently offers several slots. Slots are described in the documentation 
[API Docs for Slots](../../api/slots). 

As an example, we will give an improved stylization of the message about the lack of options suitable for the search 
bar. By default, _Sorry, no matching options_ is displayed. You can add additional contextual information
using the field in your own applications.

<BetterNoOptions />

@[code](../../.vuepress/components/BetterNoOptions.vue)
