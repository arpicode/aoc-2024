type Level = number
type Report = Level[]
type ParsedReports = Report[]
type ReportSafetyPredicate = (report: Report) => boolean

export function countSafeReports(input: string[], predicate: ReportSafetyPredicate): number {
  const parsedInput = parseReports(input)
  const safeReports = parsedInput.filter(predicate)

  return safeReports.length
}

export function isReportSafe(report: Report): boolean {
  return areConsecutiveDistancesInBounds(report)
}

export function isReportSafeWithTolerance(report: Report): boolean {
  if (isReportSafe(report)) return true

  for (let i = 0; i < report.length; i++) {
    const reportWithCurrentLevelRemoved = [...report.slice(0, i), ...report.slice(i + 1)]
    if (isReportSafe(reportWithCurrentLevelRemoved)) return true
  }

  return false
}

function isReportSorted(report: Report): boolean {
  let ascending = true
  let descending = true

  for (let i = 1; i < report.length; i++) {
    if (report[i] < report[i - 1]) ascending = false
    if (report[i] > report[i - 1]) descending = false
    if (!ascending && !descending) return false
  }

  return true
}

function areConsecutiveDistancesInBounds(report: Report, minDistance = 1, maxDistance = 3): boolean {
  if (!isReportSorted(report)) return false

  for (let i = 1; i < report.length; i++) {
    const currentDistance = Math.abs(report[i] - report[i - 1])
    if (currentDistance < minDistance || currentDistance > maxDistance) return false
  }

  return true
}

function parseReports(input: string[]): ParsedReports {
  return input.map((line) => line.split(/\s+/).map(Number))
}
