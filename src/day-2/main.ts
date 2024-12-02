type ParsedReports = number[][]
type ReportSafetyPredicate = (report: number[]) => boolean

export function countSafeReports(input: string[], predicate: ReportSafetyPredicate): number {
  const parsedInput = parseReports(input)
  const safeReports = parsedInput.filter(predicate)

  return safeReports.length
}

export function isReportSafe(report: number[]): boolean {
  return areConsecutiveDistancesInBounds(report)
}

export function isReportSafeWithTolerance(report: number[]): boolean {
  if (isReportSafe(report)) return true

  for (let i = 0; i < report.length; i++) {
    const reportWithCurrentLevelRemoved = [...report.slice(0, i), ...report.slice(i + 1)]
    if (isReportSafe(reportWithCurrentLevelRemoved)) return true
  }

  return false
}

function isArraySorted(arr: number[]): boolean {
  let ascending = true
  let descending = true

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) ascending = false
    if (arr[i] > arr[i - 1]) descending = false
    if (!ascending && !descending) return false
  }

  return true
}

function areConsecutiveDistancesInBounds(arr: number[], minDistance = 1, maxDistance = 3): boolean {
  if (!isArraySorted(arr)) return false

  for (let i = 1; i < arr.length; i++) {
    const diff = Math.abs(arr[i] - arr[i - 1])
    if (diff < minDistance || diff > maxDistance) return false
  }

  return true
}

function parseReports(input: string[]): ParsedReports {
  return input.map((line) => line.split(/\s+/).map(Number))
}
