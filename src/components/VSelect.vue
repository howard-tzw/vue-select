<script setup lang="ts">
import { computed } from 'vue'

import pointerScroll from '@/mixins/pointerScroll.js'
import typeAheadPointer from '@/mixins/typeAheadPointer.js'
import ajax from '@/mixins/ajax.js'
import childComponents from '@/components/childComponents.js'
import appendToBody from '@/directives/appendToBody.js'
import clickOutside from '@/directives/clickOutside.js'
import sortAndStringify from '@/utility/sortAndStringify.js'
import uniqueId from '@/utility/uniqueId.js'

withDefaults(
  defineProps<{
    modelValue: object | string | any[] | null
    components: object
    options: any[]
    disabled: boolean
    clearable: boolean
  }>(),
  {
    components: () => ({}),
    options: [],
    disabled: false,
    clearable: false,
  }
)

defineEmits([
  'open',
  'close',
  'update:modelValue',
  'search',
  'search:compositionstart',
  'search:compositionend',
  'search:keydown',
  'search:blur',
  'search:focus',
  'search:input',
  'option:created',
  'option:selecting',
  'option:selected',
  'option:deselecting',
  'option:deselected',
])
</script>

<template>
  <div :dir="dir" class="v-select" :class="stateClasses">
    <slot name="header" v-bind="scope.header" />
    <div
      :id="`vs${uid}__combobox`"
      ref="toggle"
      class="vs__dropdown-toggle"
      role="combobox"
      :aria-expanded="dropdownOpen.toString()"
      :aria-owns="`vs${uid}__listbox`"
      :aria-label="ariaLabel"
      v-click-outside="clickOutside"
      @mousedown="toggleDropdown($event)"
    >
      <div ref="selectedOptions" class="vs__selected-options">
        <slot
          v-for="(option, i) in selectedValue"
          name="selected-option-container"
          :option="normalizeOptionForSlot(option)"
          :deselect="deselect"
          :multiple="multiple"
          :disabled="disabled"
        >
          <span :key="getOptionKey(option)" class="vs__selected">
            <slot
              name="selected-option"
              v-bind="normalizeOptionForSlot(option)"
            >
              {{ getOptionLabel(option) }}
            </slot>
            <button
              v-if="multiple"
              :ref="(el) => (deselectButtons[i] = el)"
              :disabled="disabled"
              type="button"
              class="vs__deselect"
              :title="`Deselect ${getOptionLabel(option)}`"
              :aria-label="`Deselect ${getOptionLabel(option)}`"
              @click="deselect(option)"
            >
              <component :is="childComponents.Deselect" />
            </button>
          </span>
        </slot>

        <slot name="search" v-bind="scope.search">
          <input
            class="vs__search"
            v-bind="scope.search.attributes"
            v-on="scope.search.events"
          />
        </slot>
      </div>

      <div ref="actions" class="vs__actions">
        <button
          v-show="showClearButton"
          ref="clearButton"
          :disabled="disabled"
          type="button"
          class="vs__clear"
          title="Clear Selected"
          aria-label="Clear Selected"
          @click="clearSelection"
        >
          <component :is="childComponents.Deselect" />
        </button>

        <slot name="open-indicator" v-bind="scope.openIndicator">
          <component
            :is="childComponents.OpenIndicator"
            v-if="!noDrop"
            v-bind="scope.openIndicator.attributes"
          />
        </slot>

        <slot name="spinner" v-bind="scope.spinner">
          <div v-show="mutableLoading" class="vs__spinner">Loading...</div>
        </slot>
      </div>
    </div>
    <transition :name="transition">
      <ul
        v-if="dropdownOpen"
        :id="`vs${uid}__listbox`"
        ref="dropdownMenu"
        :key="`vs${uid}__listbox`"
        v-append-to-body
        class="vs__dropdown-menu"
        role="listbox"
        tabindex="-1"
        @mousedown.prevent="onMousedown"
        @mouseup="onMouseUp"
      >
        <slot name="list-header" v-bind="scope.listHeader" />
        <li
          v-for="(option, index) in filteredOptions"
          :id="`vs${uid}__option-${index}`"
          :key="getOptionKey(option)"
          role="option"
          :class="{
            'vs__dropdown-option': !isOptGroupOption(option),
            'vs__dropdown-optgroup-option': isOptGroupOption(option),
            'vs__dropdown-option--deselect':
              isOptionDeselectable(option) && index === typeAheadPointer,
            'vs__dropdown-option--selected': isOptionSelected(option),
            'vs__dropdown-option--highlight':
              (!isOptGroupOption(option) && index === typeAheadPointer) ||
              isOptionSelected(option),
            'vs__dropdown-option--disabled': !selectable(option),
          }"
          :aria-selected="index === typeAheadPointer ? true : null"
          @mouseover="selectable(option) ? updateTypeAheadPointer(index) : null"
          @mouseout="updateTypeAheadPointer(-1)"
          @click.prevent.stop="selectable(option) ? select(option) : null"
          @touchstart="
            selectable(option) ? updateTypeAheadPointer(index) : null
          "
        >
          <div v-if="option.optgroup" class="">
            {{ option.optgroup }}
          </div>
          <slot v-else name="option" v-bind="normalizeOptionForSlot(option)">
            {{ getOptionLabel(option) }}
          </slot>
        </li>
        <li v-if="filteredOptions.length === 0" class="vs__no-options">
          <slot name="no-options" v-bind="scope.noOptions">
            Sorry, no matching options.
          </slot>
        </li>
        <slot name="list-footer" v-bind="scope.listFooter" />
      </ul>
      <ul
        v-else
        :id="`vs${uid}__listbox`"
        role="listbox"
        style="display: none; visibility: hidden"
      ></ul>
    </transition>
    <slot name="footer" v-bind="scope.footer" />
  </div>
</template>

<style lang="scss">
@import '../css/vue-select.css';
</style>
