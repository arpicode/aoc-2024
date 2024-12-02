import { loadInputFile } from '@src/utils/utils'
import { isReportSafe, isReportSafeWithTolerance, countSafeReports } from '../main'

describe('Day 2', () => {
  const MAX_INPUT_ENTRIES = 6
  let input: string[]

  const testCases = [
    { report: [7, 6, 4, 2, 1], isSafeExpected: true, isSafeWithToleranceExpected: true },
    { report: [1, 2, 7, 8, 9], isSafeExpected: false, isSafeWithToleranceExpected: false },
    { report: [9, 7, 6, 2, 1], isSafeExpected: false, isSafeWithToleranceExpected: false },
    { report: [1, 3, 2, 4, 5], isSafeExpected: false, isSafeWithToleranceExpected: true },
    { report: [8, 6, 4, 4, 1], isSafeExpected: false, isSafeWithToleranceExpected: true },
    { report: [1, 3, 6, 7, 9], isSafeExpected: true, isSafeWithToleranceExpected: true },
  ]

  beforeAll(() => {
    input = loadInputFile('../day-2/__test__/test-input.txt')
    expect(Array.isArray(input)).toBe(true)
    expect(input.length).toBe(MAX_INPUT_ENTRIES)
  })

  describe('Part 1', () => {
    it('should correctly count the number of safe reports', () => {
      expect(countSafeReports(input, isReportSafe)).toBe(2)
    })

    it.each(testCases)(
      'should correctly determine if the report $report is safe ($isSafeExpected)',
      ({ report, isSafeExpected }: { report: number[]; isSafeExpected: boolean }) => {
        expect(isReportSafe(report)).toBe(isSafeExpected)
      }
    )
  })

  describe('Part 2', () => {
    it('should correctly count the number of safe reports with tolerance', () => {
      expect(countSafeReports(input, isReportSafeWithTolerance)).toBe(4)
    })

    it.each(testCases)(
      'should correctly determine if the report $report is safe with tolerance ($isSafeWithToleranceExpected)',
      ({ report, isSafeWithToleranceExpected }: { report: number[]; isSafeWithToleranceExpected: boolean }) => {
        expect(isReportSafeWithTolerance(report)).toBe(isSafeWithToleranceExpected)
      }
    )
  })
})
