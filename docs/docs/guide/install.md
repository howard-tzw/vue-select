::: warning
Site under construction
:::

## Package manager

Install with package manager:

:::: code-group
::: code-group-item Pnpm
```bash
pnpm add vs-vue3-select
```
:::
::: code-group-item Yarn
```bash
yarn add vs-vue3-select
```
:::
::: code-group-item Npm
```bash
npm install vs-vue3-select
```
:::
::::

Then, import and register the component:

```js
import Vue from 'vue'
import vSelect from 'vs-vue3-select'

Vue.component('v-select', vSelect)
```

The component itself does not include any CSS. You'll need to include it
separately:

```js
import 'vs-vue3-select/dist/vs-vue3-select.css'
```

## In the Browser

vs-vue3-select ships as an UMD module that is accessible in the browser. When loaded
in the browser, you can access the component through the `VueSelect.VueSelect`
global variable. You'll need to load Vue.js, `vs-vue3-select` JS & `vs-vue3-select` CSS.

```html
<!-- include VueJS first -->
<script src="https://unpkg.com/vue@latest"></script>

<!-- use the latest release -->
<script src="https://unpkg.com/vs-vue3-select@latest"></script>
<link rel="stylesheet" href="https://unpkg.com/vs-vue3-select@latest/dist/vs-vue3-select.css"/>

<!-- or point to a specific release -->
<script src="https://unpkg.com/vs-vue3-select@1.0.0"></script>
<link rel="stylesheet" href="https://unpkg.com/vs-vue3-select@1.0.0/dist/vs-vue3-select.css"/>
```

Then register the component in your javascript:

```js
Vue.component('v-select', VueSelect.VueSelect)
```

<CodePen url="zYeXjZX" />
