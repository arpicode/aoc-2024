import { loadInputFile } from '@src/utils/utils'
import { similarityScore, totalDistance } from '../main'

describe('Day 1', () => {
  const MAX_INPUT_ENTRIES = 6
  let input: string[]

  beforeAll(() => {
    input = loadInputFile('../day-1/__test__/test-input.txt')
    expect(Array.isArray(input)).toBe(true)
    expect(input.length).toBe(MAX_INPUT_ENTRIES)
  })

  describe('Part 1', () => {
    it('should correctly compute the total distance', () => {
      expect(totalDistance(input)).toBe(11)
    })
  })

  describe('Part 2', () => {
    it('should correctly compute the similarity score', () => {
      expect(similarityScore(input)).toBe(31)
    })
  })
})
