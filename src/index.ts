import { loadInputFile } from './utils/utils'
import { similarityScore, totalDistance } from './day-1/main'
import { isReportSafe, isReportSafeWithTolerance, countSafeReports } from './day-2/main'
import { sumMultiplications, sumEnabledMultiplications } from './day-3/main'

// Day 1
const input = loadInputFile('../day-1/input.txt')
console.log('Day 1 - Part 1:', totalDistance(input))
console.log('Day 1 - Part 2:', similarityScore(input))

// Day 2
const day2Input = loadInputFile('../day-2/input.txt')
console.log('Day 2 - Part 1:', countSafeReports(day2Input, isReportSafe))
console.log('Day 2 - Part 2:', countSafeReports(day2Input, isReportSafeWithTolerance))

// Day 3
const day3Input = loadInputFile('../day-3/input.txt')
console.log('Day 3 - Part 1:', sumMultiplications(day3Input))
console.log('Day 3 - Part 2:', sumEnabledMultiplications(day3Input))
