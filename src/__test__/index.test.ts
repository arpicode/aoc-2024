import { describe, it, expect, vi } from 'vitest'

describe('Advent of Code 2024', () => {
  beforeAll(async () => {
    vi.spyOn(console, 'log').mockImplementation(() => {
      /* NoOps */
    })
    await import('../index')
  })

  afterAll(() => {
    vi.restoreAllMocks()
  })

  describe('Day 1', () => {
    const EXPECTED_PART1_RESULT = 2031679
    const EXPECTED_PART2_RESULT = 19678534

    it('should log the correct output for Part 1', () => {
      expect(console.log).toHaveBeenCalledWith('Day 1 - Part 1:', EXPECTED_PART1_RESULT)
    })

    it('should log the correct output for Part 2', () => {
      expect(console.log).toHaveBeenCalledWith('Day 1 - Part 2:', EXPECTED_PART2_RESULT)
    })
  })
})
