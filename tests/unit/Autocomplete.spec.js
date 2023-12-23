import {afterEach, describe, expect, it, vi} from 'vitest'
import {selectWithProps} from "#/helpers";
import typeAheadPointer from "@/mixins/typeAheadPointer";
import {shallowMount} from "@vue/test-utils";
import VueSelect from "@/components/Select.vue";

describe('Autocomplete', () => {
    let spy

    afterEach(() => {
        if (spy) spy.mockClear()
    })

    it('should not view complete text then prop autoSelect is default', async () => {
        const Select = selectWithProps({
            options: ['Elephant', 'Element 1', 'Element 2'],
        })

        Select.get('input').trigger('focus')
        Select.vm.search = 'Elem'
        await Select.vm.$nextTick()

        expect(Select.vm.autocompleteText).toEqual('')
    })
    it('2 should not view complete text then prop autoSelect is default', async () => {
        const Select = selectWithProps({
            options: ['Afghanistan', 'Albania', 'Algeria', 'Cocos (Keeling) Islands'],
        })

        Select.get('input').trigger('focus')
        Select.vm.search = 'e'
        await Select.vm.$nextTick()

        expect(Select.vm.autocompleteText).toEqual('')
    })

    it('should view complete text then prop autoSelect is true', async () => {
        const selected = 'Element 1';
        const Select = selectWithProps({
            completeSearch: true,
            options: ['Elephant', selected, 'Element 2'],
        })

        Select.get('input').trigger('focus')
        Select.vm.search = 'Elem'
        await Select.vm.$nextTick()

        expect(Select.vm.autocompleteText).toEqual(selected)
    })

    it('should view complete text from only selectable options', async () => {
        const Select = selectWithProps({
            selectable: option => option !== 'Element 1',
            completeSearch: true,
            options: ['Elephant', 'Element 1', 'Element 2'],
        })

        Select.get('input').trigger('focus')
        Select.vm.search = 'Elem'
        await Select.vm.$nextTick()

        expect(Select.vm.autocompleteText).toEqual('Element 2')
    })

    it('the complete text should be empty if there are no available options.', async () => {
        const Select = selectWithProps({
            selectable: option => false,
            completeSearch: true,
            options: ['Elephant', 'Element 1', 'Element 2'],
        })

        Select.get('input').trigger('focus')
        Select.vm.search = 'Elem'
        await Select.vm.$nextTick()

        expect(Select.vm.autocompleteText).toEqual('')
    })

    it('should view complete text characters in the same case as search text', async () => {
        const Select = selectWithProps({
            completeSearch: true,
            options: ['Elephant', 'Element 1', 'Element 2'],
        })

        Select.get('input').trigger('focus')
        Select.vm.search = 'elem'
        await Select.vm.$nextTick()

        expect(Select.vm.autocompleteText).toEqual('element 1')
    })

    it('should not set value after blur then prop autoSelect is default', async () => {
        spy = vi.spyOn(typeAheadPointer.methods, 'typeAheadSelect')
        const Select = selectWithProps({
            options: ['Elephant', 'Element 1', 'Element 2'],
        })

        Select.get('input').trigger('focus')
        Select.vm.search = 'elem'
        await Select.vm.$nextTick()
        await Select.get('input').trigger('blur')

        expect(spy).toHaveBeenCalledTimes(0)
    })

    it('should set value after blur then prop autoSelect is true', async () => {
        spy = vi.spyOn(typeAheadPointer.methods, 'typeAheadSelect')
        const Select = selectWithProps({
            autoSelect: true,
            options: ['Elephant', 'Element 1', 'Element 2'],
        })

        Select.get('input').trigger('focus')
        Select.vm.search = 'elem'
        await Select.vm.$nextTick()
        await Select.get('input').trigger('blur')

        expect(spy).toHaveBeenCalledTimes(1)
    })
})
