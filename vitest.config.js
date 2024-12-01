// @ts-check

import path from 'path'
import { defineConfig } from 'vitest/config'
import { coverageConfigDefaults } from 'vitest/config'

export default defineConfig({
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    environment: 'node',
    coverage: {
      include: ['**/*.ts'],
      exclude: ['**/interfaces/**', ...coverageConfigDefaults.exclude],
    },
  },
})
