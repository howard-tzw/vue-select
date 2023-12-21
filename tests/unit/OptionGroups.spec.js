import {it, describe, expect, vi} from 'vitest'
import {shallowMount} from '@vue/test-utils'
import VueSelect from '@/components/Select.vue'

const preventDefault = vi.fn()

function clickEvent(currentTarget) {
    return {currentTarget, preventDefault}
}

describe('Option Groups', () => {
    it('should display an opt group title followed by two text options', () => {
        const optgroups = [
            {
                groupLabel: 'Opt Group',
                groupOptions: ['one', 'two'],
            },
        ]

        const Select = shallowMount(VueSelect, {
            props: {
                options: optgroups,
            },
        })

        Select.vm.toggleDropdown(clickEvent(Select.vm.$refs.search))

        expect(Select.vm.filteredOptions).toEqual([
            {
                optgroup: 'Opt Group',
            },
            'one',
            'two',
        ])
    })

    it('should display an opt group title followed by two object options', () => {
        const optgroups = [
            {
                groupLabel: 'Opt Group',
                groupOptions: [
                    {
                        label: 'Test',
                        value: 'test',
                    },
                    {
                        label: 'Test 2',
                        value: 'test2',
                    },
                ],
            },
        ]

        const Select = shallowMount(VueSelect, {
            props: {
                options: optgroups,
            },
        })

        Select.vm.toggleDropdown(clickEvent(Select.vm.$refs.search))

        expect(Select.vm.filteredOptions).toEqual([
            {
                optgroup: 'Opt Group',
            },
            {
                label: 'Test',
                value: 'test',
            },
            {
                label: 'Test 2',
                value: 'test2',
            },
        ])
    })

    it('should display mix a non-grouped text item with an opt group', () => {
        const optgroups = [
            'one',
            {
                groupLabel: 'Opt Group',
                groupOptions: [
                    {
                        label: 'Test',
                        value: 'test',
                    },
                    {
                        label: 'Test 2',
                        value: 'test2',
                    },
                ],
            },
        ]

        const Select = shallowMount(VueSelect, {
            props: {
                options: optgroups,
            },
        })

        Select.vm.toggleDropdown(clickEvent(Select.vm.$refs.search))

        expect(Select.vm.filteredOptions).toEqual([
            'one',
            {optgroup: 'Opt Group'},
            {
                label: 'Test',
                value: 'test',
            },
            {
                label: 'Test 2',
                value: 'test2',
            },
        ])
    })
})
