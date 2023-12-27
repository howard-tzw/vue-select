---
sidebarDepth: 0
prev:
 text: Limiting Selections
 link: /use-cases/selectable
next:
 text: Infinite Scroll
 link: /use-cases/infinite-scroll
---

# Pagination

Pagination can be a super helpful tool when working with large sets of data. If
you have 1,000 options, the component is going to render 1,000 DOM nodes. That's
a lot of nodes to insert/remove, and chances are your user is only interested in
a few of them anyways.

To implement pagination with Vs Vue3 Select, you can take advantage of the
`list-footer` slot. It appears below all other options in the dropdown list.

To make pagination work properly with filtering, you'll have to handle it
yourself in the parent. You can use the `filterable` boolean to turn off Vs Vue3
Select's filtering, and then hook into the `search` event to use the current
search query in the parent component.

<Paginated />

@[code](../../.vuepress/components/Paginated.vue)