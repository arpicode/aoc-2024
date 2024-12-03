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

    it('should return 0 for empty input in sumMultiplications', () => {
      expect(sumMultiplications([])).toBe(0)
    })

    it('should handle input with no valid mul instructions', () => {
      const input = ['invalid(2,3)', 'mul(-4,5)', 'mul(6,+7)']
      expect(sumMultiplications(input)).toBe(0)
    })
  })

  describe('Part 2', () => {
    it('should correctly sum all valid and enabled mul instructions', () => {
      expect(sumEnabledMultiplications(part2Input)).toBe(48)
    })

    it('should return 0 for empty input', () => {
      expect(sumEnabledMultiplications([])).toBe(0)
    })

    it("should correctly handle don't() instructions", () => {
      const input = ["don't()", 'mul(2,3)', 'mul(4,5)', 'mul(6,7)']
      expect(sumEnabledMultiplications(input)).toBe(0)
    })

    it('should correctly handle do() instructions', () => {
      const input = ['do()', 'mul(2,3)', 'mul(4,5)', 'mul(6,7)']
      expect(sumEnabledMultiplications(input)).toBe(2 * 3 + 4 * 5 + 6 * 7)
    })

    it("should correctly handle no don't() or do() instructions", () => {
      const input = ['mul(2,3)', 'mul(4,5)', 'mul(6,7)']
      expect(sumEnabledMultiplications(input)).toBe(2 * 3 + 4 * 5 + 6 * 7)
    })

    it('should handle input with no valid mul instructions', () => {
      const input = ['invalid(2,3)', 'mul(-4,5)', 'mul(6,+7)']
      expect(sumEnabledMultiplications(input)).toBe(0)
    })
  })
})
