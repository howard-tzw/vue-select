---
sidebarDepth: 0
prev:
 text: CSS стилизация
 link: /ru/styling/css
next:
 text: Спецификация WAI-ARIA
 link: /ru/accessibility/wai-aria
---

# Стилизация слотами

Vs Vue3 Select в настоящее время предлагает несколько слотов. Слоты описаны в документации [API для слотов](../../../ru/api/slots). 

В качестве примера приведем улучшенную стилизацию сообщение об отсутствии опций подходящих поисковой строке. По 
умолчанию отображается _Sorry, no matching options_. Вы можете добавить дополнительную контекстную информацию, 
используя поле в своих собственных приложениях.

<BetterNoOptions />

@[code](../../../.vuepress/components/BetterNoOptions.vue)
