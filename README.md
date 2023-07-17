# vue3-select

This is a forked and maintained version of [sagalbot/vue-select](https://github.com/sagalbot/vue-select), which is no longer maintained. As the name suggests, this project is specifically designed to work with the Vue 3.

Note: At the moment, most of the features of vue3-select are the same as the original vue-select project. As such, users can refer to the original documentation for usage instructions.


## Documentation

New documentation specific to vue3-select will be available soon...

### New in vue3-select

- **[CSS variables](https://github.com/howard-tzw/vue3-select/blob/main/src/css/global/variables.css)**

### Original documentation and examples

- **[API Documentation](https://vue-select.org)**
- **[CodePen Template](http://codepen.io/sagalbot/pen/NpwrQO)**

## Install

```bash
yarn add vue3-select

# or use npm

npm install vue3-select
```

Then, import and register the component:

```js
import Vue from "vue";
import VueSelect from "vue3-select";

Vue.component("v-select", VueSelect);
```

The component itself does not include any CSS. You'll need to include it separately:

```js
import "vue3-select/dist/vue3-select.css";
```

Alternatively, you can import the scss for complete control of the component styles:

```scss
@import "vue3-select/src/scss/vue3-select.scss";
```

## License

[MIT](https://github.com/sagalbot/vue-select/blob/master/LICENSE.md)
