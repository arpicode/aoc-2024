import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export function loadInputFile(filename: string): string[] {
  let absolutePath

  try {
    absolutePath = path.resolve(__dirname, filename)
    const content = fs.readFileSync(absolutePath, 'utf-8')

    return content
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter(Boolean)
  } catch (error) {
    console.error(`Failed to load file: ${absolutePath}. ${(error as Error).message}`)
    throw error
  }
}
