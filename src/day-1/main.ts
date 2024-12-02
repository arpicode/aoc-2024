interface IParsedLocationIds {
  leftIds: number[]
  rightIds: number[]
}

export function totalDistance(input: string[]): number {
  const parsedInput = parseLocationIds(input)
  const sortedParsedInput = sortLocationIds(parsedInput)

  return computeTotalDistance(sortedParsedInput.leftIds, sortedParsedInput.rightIds)
}

function sortLocationIds(parsedInput: IParsedLocationIds): IParsedLocationIds {
  return {
    leftIds: parsedInput.leftIds.slice().sort(),
    rightIds: parsedInput.rightIds.slice().sort(),
  }
}

function computeTotalDistance(left: number[], right: number[]): number {
  return left.reduce((distance, value, i) => distance + Math.abs(value - right[i]), 0)
}

export function similarityScore(input: string[]): number {
  const parsedInput = parseLocationIds(input)
  const rightFrequencyMap = generateFrequencyMap(parsedInput.rightIds)

  return computeSimilarityScore(parsedInput.leftIds, rightFrequencyMap)
}

function generateFrequencyMap(numbers: number[]): Map<number, number> {
  const frequencyMap = new Map<number, number>()
  numbers.forEach((num) => {
    frequencyMap.set(num, (frequencyMap.get(num) ?? 0) + 1)
  })

  return frequencyMap
}

function computeSimilarityScore(left: number[], rightFrequencyMap: Map<number, number>): number {
  return left.reduce((score, leftValue) => score + leftValue * (rightFrequencyMap.get(leftValue) ?? 0), 0)
}

function parseLocationIds(input: string[]): IParsedLocationIds {
  const parsed: IParsedLocationIds = { leftIds: [], rightIds: [] }

  input.forEach((pair) => {
    const [left, right] = pair.split(/\s+/).map(Number)
    parsed.leftIds.push(left)
    parsed.rightIds.push(right)
  })

  return parsed
}
