import { loadInputFile } from './utils/utils'
import { similarityScore, totalDistance } from './day-1/main'

// Day 1
const input = loadInputFile('../day-1/input.txt')
console.log('Day 1 - Part 1:', totalDistance(input))
console.log('Day 1 - Part 2:', similarityScore(input))
