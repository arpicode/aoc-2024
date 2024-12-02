import { loadInputFile } from '@src/utils/utils'

describe('Day 3', () => {
  const MAX_INPUT_ENTRIES = 6 // TODO: Update this value
  let input: string[]

  beforeAll(() => {
    input = loadInputFile('../day-3/__test__/test-input.txt')
    expect(Array.isArray(input)).toBe(true)
    expect(input.length).toBe(MAX_INPUT_ENTRIES)
  })

  describe('Part 1', () => {
    it.skip('should test part 1', () => {
      // TODO: Implement test for part 1
    })
  })

  describe('Part 2', () => {
    it.skip('should test part 2', () => {
      // TODO: Implement test for part 2
    })
  })
})
