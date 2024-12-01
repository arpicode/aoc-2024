interface ParsedInput {
  leftIds: number[]
  rightIds: number[]
}

export function totalDistance(input: string[]): number {
  const parsedInput = parseInput(input)
  const sortedParsedInput = sortLocationIds(parsedInput)

  return calculateDistance(sortedParsedInput.leftIds, sortedParsedInput.rightIds)
}

function sortLocationIds(parsedInput: ParsedInput): ParsedInput {
  return {
    leftIds: parsedInput.leftIds.slice().sort(),
    rightIds: parsedInput.rightIds.slice().sort(),
  }
}

function calculateDistance(left: number[], right: number[]): number {
  return left.reduce((distance, value, i) => distance + Math.abs(value - right[i]), 0)
}

export function similarityScore(input: string[]): number {
  const parsedInput = parseInput(input)
  const rightFrequencyMap = createFrequencyMap(parsedInput.rightIds)

  return calculateScore(parsedInput.leftIds, rightFrequencyMap)
}

function createFrequencyMap(numbers: number[]): Map<number, number> {
  const frequencyMap = new Map<number, number>()
  numbers.forEach((num) => {
    frequencyMap.set(num, (frequencyMap.get(num) ?? 0) + 1)
  })

  return frequencyMap
}

function calculateScore(left: number[], rightFrequencyMap: Map<number, number>): number {
  return left.reduce((score, leftValue) => score + leftValue * (rightFrequencyMap.get(leftValue) ?? 0), 0)
}

function parseInput(input: string[]): ParsedInput {
  const parsed: ParsedInput = { leftIds: [], rightIds: [] }

  input.forEach((pair) => {
    const [left, right] = pair.split(/\s+/).map(Number)
    parsed.leftIds.push(left)
    parsed.rightIds.push(right)
  })

  return parsed
}
