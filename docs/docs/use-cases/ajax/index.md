---
sidebarDepth: 0
prev:
  text: State Manager
  link: /use-cases/state-manager
next:
  text: Using in Loops
  link: /use-cases/loops
---

# Loading Options with AJAX

The `search` event provides a hook to load options from a parent component when
the search text is updated. It is emitted with two parameters:

**Search Event Parameters**

- `search {String}` The current search string
- `loading {Function}` Accepts a boolean parameter to toggle the loading state

```html
<v-select @search="fetchOptions" />
```

```js
/**
 * Triggered when the search text changes.
 *
 * @param search  {String}    Current search text
 * @param loading {Function}	Toggle loading class
 */
fetchOptions (search, loading) {
  //  ... do some asynchronous stuff!
},
```

The `loading` function accepts a boolean parameter that will be assigned to the
`vs-vue3-select` internal `loading` property. Call `loading(true)` to set the
`loading` property to `true` - toggling the loading spinner. After your
asynchronous operation completes, call `loading(false)` to toggle it off.

## Disabling Filtering

When loading server side options, it can be useful to disable the client side
filtering. Use the `filterable` prop to disable filtering.

## Loading Spinner

Vs Vue3 Select includes a default loading spinner that appears when the loading
class is present. The `spinner` slot allows you to implement your own spinner.

## Library Agnostic

Since Vue.js does not ship with ajax functionality as part of the core library,
it's up to you to process the ajax requests in your parent component.

I recommend using [axios](https://github.com/axios/axios) for creating your
applications HTTP layer, or [`fetch()`](https://github.com/github/fetch) for
simple requests.

## Example

The [codepen example](https://codepen.io/vasoft/pen/LYqvOOM) wraps up all the
above concepts and searches GitHub repositories. It also uses scoped slots to
add some custom templating.

<CodePen url="LYqvOOM" height="400"/>
