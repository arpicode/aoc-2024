export function sumMultiplications(input: string[]): number {
  const inputAsString = input.join('')
  const mulInstructionRegex = /mul\((\d{1,3}),(\d{1,3})\)/g
  let match
  let sum = 0

  while ((match = mulInstructionRegex.exec(inputAsString)) !== null) {
    sum += multiply(match[1], match[2])
  }

  return sum
}

export function sumEnabledMultiplications(input: string[]): number {
  const inputAsString = input.join('')
  const mulInstructionRegex = /mul\((\d{1,3}),(\d{1,3})\)/
  const allInstructionsRegex = /mul\(\d{1,3},\d{1,3}\)|do\(\)|don't\(\)/g
  let match
  let sum = 0
  let enabled = true

  const instructions = inputAsString.match(allInstructionsRegex) ?? []

  for (const instruction of instructions) {
    if (instruction === 'do()') {
      enabled = true
    } else if (instruction === "don't()") {
      enabled = false
    } else if (enabled && (match = mulInstructionRegex.exec(instruction))) {
      sum += multiply(match[1], match[2])
    }
  }

  return sum
}

function multiply(x: string, y: string): number {
  return parseInt(x, 10) * parseInt(y, 10)
}
