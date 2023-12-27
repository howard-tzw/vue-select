import {describe, expect, it} from 'vitest'
import {mountDefault,} from '#/helpers.js'

global.ClipboardEvent = class ClipboardEvent extends Event {
    constructor(type, options) {
        super(type, options);
        this.clipboardData = {
            setData: (type, data) => {
                this.clipboardData[type] = data;
            },
            getData: (type) => this.clipboardData[type],
        };
    }
};

const getClipboardData = value => {
    const clipboardData = new ClipboardEvent('paste', {bubbles: true});
    Object.defineProperty(clipboardData, 'clipboardData', {
        value: {
            getData: (type) => {
                return value;
            },
        },
    });
    return clipboardData;
}
describe('Paste from clipboard when Tagging Is Enabled and separator present', () => {
    it('One option if there is no separator in the line', async () => {
        const Select = mountDefault({
            pasteSeparator: ',',
            multiple: true,
            taggable: true,
        })
        await Select.get('input').element.dispatchEvent(getClipboardData('one'));
        expect(Select.vm.search).toEqual('')
        expect(Select.vm.selectedValue).toEqual(['one'])
    });
    it('The number of options corresponds', async () => {
        const Select = mountDefault({
            pasteSeparator: ',',
            multiple: true,
            taggable: true,
        })

        await Select.get('input').element.dispatchEvent(getClipboardData('vue,react'));
        expect(Select.vm.search).toEqual('')
        expect(Select.vm.selectedValue).toEqual(['vue', 'react'])
    });
    it('Processing only multiple mode', async () => {
        const Select = mountDefault({
            pasteSeparator: ',',
            multiple: false,
            taggable: true,
        })
        await Select.get('input').element.dispatchEvent(getClipboardData('vue,react'));
        expect(Select.vm.selectedValue).toEqual([])
    });
    it('will emit update:modelValue event once', async () => {
        const Select = mountDefault({
            pasteSeparator: ',',
            multiple: true,
            taggable: true
        })
        await Select.get('input').element.dispatchEvent(getClipboardData('vue,react'));
        expect(Select.emitted()['update:modelValue'].length).toBe(1)
    });
    it('will emit option:selected for each option', async () => {
        const Select = mountDefault({
            pasteSeparator: ',',
            multiple: true,
            taggable: true
        })
        await Select.get('input').element.dispatchEvent(getClipboardData('vue,react'));
        expect(Select.emitted()['option:selected'].length).toBe(2)
    });
    it('Not comma separator', async () => {
        const Select = mountDefault({
            pasteSeparator: '#',
            multiple: true,
            taggable: true,
        })

        await Select.get('input').element.dispatchEvent(getClipboardData('vue#react'));
        expect(Select.vm.search).toEqual('')
        expect(Select.vm.selectedValue).toEqual(['vue', 'react'])
    });
    it('There should be no empty options', async () => {
        const Select = mountDefault({
            pasteSeparator: ',',
            multiple: true,
            taggable: true,
        })
        await Select.get('input').element.dispatchEvent(getClipboardData(',java,,one,two,'));
        expect(Select.vm.search).toEqual('')
        expect(Select.vm.selectedValue).toEqual(['java', 'one', 'two'])
    });
    it('The addition should be without duplication', async () => {
        const Select = mountDefault({
            pasteSeparator: ',',
            multiple: true,
            taggable: true,
        })
        await Select.get('input').element.dispatchEvent(getClipboardData('one,one'));
        expect(Select.vm.search).toEqual('')
        expect(Select.vm.selectedValue).toEqual(['one'])
    });
    it('Adding with turnoff trim should not change the options', async () => {
        const Select = mountDefault({
            pasteTrim: false,
            pasteSeparator: ',',
            multiple: true,
            taggable: true,
        })
        await Select.get('input').element.dispatchEvent(getClipboardData('java, one'));
        expect(Select.vm.search).toEqual('')
        expect(Select.vm.selectedValue).toEqual(['java', ' one'])
    });
    it('Adding with trim will trim the options', async () => {
        const Select = mountDefault({
            pasteSeparator: ',',
            multiple: true,
            taggable: true,
        })
        await Select.get('input').element.dispatchEvent(getClipboardData('java, one'));
        expect(Select.vm.search).toEqual('')
        expect(Select.vm.selectedValue).toEqual(['java', 'one'])
    });
})