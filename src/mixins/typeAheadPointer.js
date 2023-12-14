export default {
  data() {
    return {
      typeAheadPointer: -1,
      typeAheadLabel: ''
    }
  },

  watch: {
    filteredOptions() {
      for (let i = 0; i < this.filteredOptions.length; i++) {
        if (this.selectable(this.filteredOptions[i])) {
          this.typeAheadPointer = i
          //this.typeAheadLabel = this.filteredOptions[i][this.label]
          break
        }
      }
    },
    open(open) {
      if (open) {
        this.typeAheadToLastSelected()
      }
    },
    selectedValue() {
      if (this.open) {
        this.typeAheadToLastSelected()
      }
    },
  },

  methods: {
    updateTypeAheadPointer(index) {
      this.typeAheadPointer = index
      this.typeAheadLabel = this.filteredOptions[index] ? this.filteredOptions[index][this.label] : ''
    },
    /**
     * Move the typeAheadPointer visually up the list by
     * setting it to the previous selectable option.
     * @return {void}
     */
    typeAheadUp() {
      for (let i = this.typeAheadPointer - 1; i >= 0; i--) {
        if (this.selectable(this.filteredOptions[i])) {
          this.updateTypeAheadPointer(i)
          break
        }
      }
    },

    /**
     * Move the typeAheadPointer visually down the list by
     * setting it to the next selectable option.
     * @return {void}
     */
    typeAheadDown() {
      for (
        let i = this.typeAheadPointer + 1;
        i < this.filteredOptions.length;
        i++
      ) {
        if (this.selectable(this.filteredOptions[i])) {
          this.updateTypeAheadPointer(i)
          break
        }
      }
    },

    /**
     * Select the option at the current typeAheadPointer position.
     * Optionally clear the search input on selection.
     * @param  actionMode Boolean true - width after select actions
     * @return {void}
     */
    typeAheadSelect(actionMode) {
      const typeAheadOption = this.filteredOptions[this.typeAheadPointer]
      actionMode = typeof actionMode === 'undefined' ? true : actionMode

      if (typeAheadOption && this.selectable(typeAheadOption)) {
        if (actionMode) {
          this.select(typeAheadOption)
        }  else {
          this.processSelect(typeAheadOption)
        }
      }
    },

    /**
     * Moves the pointer to the last selected option.
     */
    typeAheadToLastSelected() {
      /**
       * @feat If the option is an object, the "label" will be used as the previous selection record,
       * enabling the "computed" options to function properly.
       */
      if (
        this.filteredOptions[0] &&
        typeof this.filteredOptions[0] === 'object'
      ) {
        const label = this.label
        const index = this.filteredOptions
          .map((option) => option[label])
          .indexOf(this.selectedValue[this.selectedValue.length - 1]?.[label])

        this.updateTypeAheadPointer(
          this.selectedValue.length !== 0 ? index : -1
        )
        return
      }

      this.updateTypeAheadPointer(
        this.selectedValue.length !== 0
          ? this.filteredOptions.indexOf(
              this.selectedValue[this.selectedValue.length - 1]
            )
          : -1
      )
    },
  },
}
