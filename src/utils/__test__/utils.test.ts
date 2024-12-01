import { loadFile } from '@src/utils/utils'

describe('Utils test suite', () => {
  describe('loadFile', () => {
    it('should load a file from disk with CRLF end of line sequence', () => {
      const content = loadFile('__test__/mocked-inputs/mock-data-crlf.txt')
      expect(content).toEqual(['1abc2', 'pqr3stu8vwx', 'a1b2c3d4e5f', 'treb7uchet'])
    })

    it('should load a file from disk with LF end of line sequence', () => {
      const content = loadFile('__test__/mocked-inputs/mock-data-lf.txt')
      expect(content).toEqual(['1abc2', 'pqr3stu8vwx', 'a1b2c3d4e5f', 'treb7uchet'])
    })

    it('should return an empty array for an empty file', () => {
      const content = loadFile('__test__/mocked-inputs/mock-empty-data.txt')
      expect(content).toEqual([])
    })

    it('should return an empty array for a file with only new lines', () => {
      const content = loadFile('__test__/mocked-inputs/mock-only-blank-lines.txt')
      expect(content).toEqual([])
    })

    it('should throw an error for nonexistent files', () => {
      expect(() => loadFile('nonexistent-file.txt')).toThrow()
    })
  })
})
