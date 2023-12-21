import {test, expect} from 'vitest'
import uniqueId from '@/utility/uniqueId'

test('it generates a unique number', () => {
    expect(uniqueId()).not.toEqual(uniqueId())
})
