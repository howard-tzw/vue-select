---
title: Keydown Events
sidebarDepth: 0
prev:
  text: Tag Input Field
  link: /use-cases/tag-input
next:
  text: Dropdown Position
  link: /customizing/positioning
---

# Keydown Events

## selectOnKeyCodes

`selectOnKeyCodes {Array}` is an array of keyCodes that will trigger a
typeAheadSelect. Any keyCodes in this array will prevent the default event
action and trigger a typeahead select. By default, it's just `[13]` for return.
For example, maybe you want to tag on a comma keystroke:

<TagOnComma /> 
 
@[code](../../.vuepress/components/TagOnComma.vue)

## mapKeyDown

Vs Vue3 Select provides the `map-keydown` Function prop to allow for customizing the
components response to keydown events while the search input has focus.

```js
/**
 * @param map {Object} Mapped keyCode to handlers { <keyCode>:<callback> }
 * @param vm {VueSelect}
 * @return {Object}
 */
(map, vm) => map,
```

By default, the prop is a no–op returning the same object `map` object it
receives. This object maps keyCodes to handlers: `{ <keyCode>: <callback> }`.
Modifying this object can override default functionality, or add handlers for
different keys that the component doesn't normally listen for.

Note that any keyCodes you've added to `selectOnKeyCodes` will be passed to
`map-keydown` as well, so `map-keydown` will always take precedence.

**Default Handlers**

```js
//  delete
8: e => this.maybeDeleteValue()

//  enter
13: e => {
    e.preventDefault();
    return this.typeAheadSelect();
}

//  esc
27: e => this.onEscape()

//  up
38: e => {
    e.preventDefault();
    return this.typeAheadUp();
}

//  down
40: e => {
    e.preventDefault();
    return this.typeAheadDown();
}
```

#### Example: Autocomplete Email Addresses

---

This is example listens for the `@` key, and autocompletes an email address with
`@gmail.com`.

<CustomHandlers />

@[code](../../.vuepress/components/CustomHandlers.vue)
