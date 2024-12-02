type ParsedInput = number[][]
type ReportSafetyPredicate = (report: number[]) => boolean

export function totalReports(input: string[], predicate: ReportSafetyPredicate): number {
  const parsedInput = parseInput(input)
  const safeReports = parsedInput.filter(predicate)

  return safeReports.length
}

export function isSafe(report: number[]): boolean {
  return hasConsecutiveDistancesInBounds(report)
}

export function isSafeWithTolerance(report: number[]): boolean {
  if (isSafe(report)) return true

  for (let i = 0; i < report.length; i++) {
    const reportWithCurrentLevelRemoved = [...report.slice(0, i), ...report.slice(i + 1)]
    if (isSafe(reportWithCurrentLevelRemoved)) return true
  }

  return false
}

function isSorted(arr: number[]): boolean {
  let ascending = true
  let descending = true

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) ascending = false
    if (arr[i] > arr[i - 1]) descending = false
    if (!ascending && !descending) return false
  }

  return true
}

function hasConsecutiveDistancesInBounds(arr: number[], minDistance = 1, maxDistance = 3): boolean {
  if (!isSorted(arr)) return false

  for (let i = 1; i < arr.length; i++) {
    const diff = Math.abs(arr[i] - arr[i - 1])
    if (diff < minDistance || diff > maxDistance) return false
  }

  return true
}

function parseInput(input: string[]): ParsedInput {
  return input.map((line) => line.split(/\s+/).map(Number))
}
