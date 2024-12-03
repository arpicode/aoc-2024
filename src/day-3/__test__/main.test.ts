import { loadInputFile } from '@src/utils/utils'
import { sumEnabledMultiplications, sumMultiplications } from '../main'

describe('Day 3', () => {
  let part1Input: string[]
  let part2Input: string[]

  beforeAll(() => {
    part1Input = loadInputFile('../day-3/__test__/test-input-part1.txt')
    part2Input = loadInputFile('../day-3/__test__/test-input-part2.txt')
    expect(Array.isArray(part1Input)).toBe(true)
    expect(part1Input.length).toBeGreaterThan(0)
    expect(Array.isArray(part2Input)).toBe(true)
    expect(part2Input.length).toBeGreaterThan(0)
  })

  describe('Part 1', () => {
    it('should correctly sum all valid mul instructions', () => {
      expect(sumMultiplications(part1Input)).toBe(161)
    })
  })

  describe('Part 2', () => {
    it('should correctly sum all valid and enabled mul instructions', () => {
      expect(sumEnabledMultiplications(part2Input)).toBe(48)
    })
  })
})
