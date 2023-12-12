---
prev:
    text: Параметры
    link: /ru/api/props
next:
    text: События
    link: /ru/api/events
---

::: tip Примечание
Vs Vue3 Select использует слоты для более гибкой настройки уровня представления. Слоты можно использовать для изменения
внешнего вида пользовательского интерфейса или просто для замены текста
:::

## `footer`

Отображается внизу компонента, ниже `.vs__dropdown-toggle`.

When implementing this slot, you'll likely need to use `appendToBody` to
position the dropdown. Otherwise, content in this slot will affect it's
positioning.

При реализации этого слота вам, возможно, потребуется использовать `appendToBody` для позиционирования выпадающего
списка. Иначе содержимое в этом слоте повлияет на его позиционирование

- `search {string}` - текущий поисковый запрос
- `loading {boolean}` - признак состояния загрузки
- `searching {boolean}` - признак состояния поиска
- `filteredOptions {array}` - массив опций отфильтрованных поисковым запросом
- `deselect {function}` - функция отменяющая выбор опции

<SlotFooter />

@[code](../../.vuepress/components/SlotFooter.vue)

## `header`

Отображается вверху компонента, перед `.vs__dropdown-toggle`.

- `search {string}` - текущий поисковый запрос
- `loading {boolean}` - признак состояния загрузки
- `searching {boolean}` - признак состояния поиска
- `filteredOptions {array}` - массив опций отфильтрованных поисковым запросом
- `deselect {function}` - функция отменяющая выбор опции

<SlotHeader />

@[code](../../.vuepress/components/SlotHeader.vue)

## `list-footer`

Отображается последним элементом списка. Не имеет контента по умолчанию. Родительский элемент `<ul>`, таким образом
данный слот должен иметь в качестве корня тег `<li>`.

- `search {string}` - текущий поисковый запрос
- `loading {boolean}` - признак состояния загрузки
- `searching {boolean}` - признак состояния поиска
- `filteredOptions {array}` - массив опций отфильтрованных поисковым запросом

<SlotListFooter />

@[code](../../.vuepress/components/SlotListFooter.vue)

## `list-header`

Отображается первым элементом списка. Не имеет контента по умолчанию. Родительский элемент `<ul>`, таким образом
данный слот должен иметь в качестве корня тег `<li>`.

- `search {string}` - текущий поисковый запрос
- `loading {boolean}` - признак состояния загрузки
- `searching {boolean}` - признак состояния поиска
- `filteredOptions {array}` - массив опций отфильтрованных поисковым запросом

<SlotListHeader />

@[code](../../.vuepress/components/SlotListHeader.vue)

## `no-options`

Слот отображающий отсутствие опций. Размещает в выпадающем списке перед `list-footer` когда
`filteredOptions.length === 0`.

- `search {string}` - текущий поисковый запрос
- `loading {boolean}` - признак состояния загрузки
- `searching {boolean}` - признак состояния поиска

<SlotNoOptions />

@[code](../../.vuepress/components/SlotNoOptions.vue)

## `open-indicator`

Индикатор состояния выпадающего списка.

```js
attributes = {
    ref: 'openIndicator',
    role: 'presentation',
    class: 'vs__open-indicator'
}
```

<SlotOpenIndicator />

@[code](../../.vuepress/components/SlotOpenIndicator.vue)

## `option`

Отдельный элемент выпадающего списка, содержащийся в `<li>`.

- `option {Object}` - текущая опция в цикле по `filteredOptions`

<SlotOption />

@[code](../../.vuepress/components/SlotOption.vue)

## `search`

Строка ввода поискового запроса множество привязок, но они сгруппированы: атрибуты и события. В большинстве случаев
достаточно привязывать эти два параметра с помощью v-on="events" и v-bind="attributes".

Если необходимо сохранить стиль по умолчанию, то добавьте класс `.vs__search` к добавляемому полю ввода.

```js
/**
 * Атрибуты привязываемые к полю ввода.
 */
attributes = {
    disabled: this.disabled,
    placeholder: this.searchPlaceholder,
    tabindex: this.tabindex,
    readonly: !this.searchable,
    id: this.inputId,
    'aria-autocomplete': 'list',
    'aria-labelledby': `vs${this.uid}__combobox`,
    'aria-controls': `vs${this.uid}__listbox`,
    'aria-activedescendant': this.typeAheadPointer > -1
        ? `vs${this.uid}__option-${this.typeAheadPointer}`
        : '',
    ref: 'search',
    type: 'search',
    autocomplete: this.autocomplete,
    value: this.search,
},
    /**
     * События, которые должен обрабатывать этот элемент
     */
    events = {
        'compositionstart': () => this.isComposing = true,
        'compositionend': () => this.isComposing = false,
        'keydown': this.onSearchKeyDown,
        'blur': this.onSearchBlur,
        'focus': this.onSearchFocus,
        'input': (e) => this.search = e.target.value,
    }
```

<SlotSearch />

@[code](../../.vuepress/components/SlotSearch.vue)

## `selected-option`

Текст отображаемый внутри `selected-option-container`.

Этот слот не существует если реализован `selected-option-container`

- `option {Object}` - Выбранная опция

<SlotSelectedOption />

@[code](../../.vuepress/components/SlotSelectedOption.vue)

## `selected-option-container`

Это корневой элемент где `v-for="option in selectedValue"`. В большинстве случаев достаточно использовать `selected-option`, но этот контейнер полезен, если вы хотите отключить кнопку отмены выбора или иметь точный контроль над разметкой.

- `option {Object}` - Текущая выбранная опция
- `deselect {Function}` - Метод, используемый для отмены выбора данной опции, когда значение `multiple` равно true
- `disabled {Boolean}` - Флаг заблокированного состояния компонента
- `multiple {Boolean}` - Флаг поддержки компонентом множественного выбора

<SlotSelectedOptionContainer />

@[code](../../.vuepress/components/SlotSelectedOptionContainer.vue)

## `spinner`

- `loading {Boolean}` - Флаг состояния загрузки данных

<SlotSpinner />

@[code](../../.vuepress/components/SlotSpinner.vue)
