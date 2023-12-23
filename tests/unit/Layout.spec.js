import {it, describe, expect} from 'vitest'
import {shallowMount} from '@vue/test-utils'
import VueSelect from '@/components/Select.vue'
import {selectWithProps} from "#/helpers";

describe('Single value options', () => {
    it('should reset the search input on focus lost', () => {
        const Select = shallowMount(VueSelect)
        Select.vm.open = true

        Select.vm.search = 't'
        expect(Select.vm.search).toEqual('t')

        Select.vm.onSearchBlur()
        expect(Select.vm.search).toEqual('')
    })

    it('should reset the search input on focus lost, multiple mode', () => {
        const Select = selectWithProps({
            multiple: true,
            autoSelect: true,
            options: ['Elephant', 'Element 1', 'Element 2'],
        })
        Select.vm.open = true

        Select.vm.search = 'el'
        expect(Select.vm.search).toEqual('el')

        Select.vm.onSearchBlur()
        expect(Select.vm.search).toEqual('')
    })

    it('should not reset the search input on focus lost when clearSearchOnSelect is false', () => {
        const Select = shallowMount(VueSelect, {
            props: {value: 'foo', clearSearchOnSelect: false},
        })

        expect(Select.vm.clearSearchOnSelect).toEqual(false)

        Select.vm.open = true
        Select.vm.search = 't'
        expect(Select.vm.search).toEqual('t')

        Select.vm.onSearchBlur()
        expect(Select.vm.search).toEqual('t')
    })
})
