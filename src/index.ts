import { loadInputFile } from './utils/utils'
import { similarityScore, totalDistance } from './day-1/main'
import { isReportSafe, isReportSafeWithTolerance, countSafeReports } from './day-2/main'

// Day 1
const input = loadInputFile('../day-1/input.txt')
console.log('Day 1 - Part 1:', totalDistance(input))
console.log('Day 1 - Part 2:', similarityScore(input))

// Day 2
const day2Input = loadInputFile('../day-2/input.txt')
console.log('Day 2 - Part 1:', countSafeReports(day2Input, isReportSafe))
console.log('Day 2 - Part 2:', countSafeReports(day2Input, isReportSafeWithTolerance))
