# Advent of Code 2024 @ccopie

## Installing the project

I'm using `node 22+`

Open a command prompt in your projects folder.

```bash
git clone <repo-url>

cd aoc-2024
```

If you are using `npm`...

```bash
npm install
```

...or if you are using `pnpm`

```bash
pnpm install
```

If using `vscode`, open the project:

```bash
code .
```

Since two `*-lock.json` files exist in the project, `vscode` will ask you to specify your default package manager.

Press `Ctrl+,` to open settings and select the workspace settings tab.

If you are using `npm`, add...

```json
{
  "npm.packageManager": "npm"
}
```

...for `pnpm`:

```json
{
  "npm.packageManager": "pnpm"
}
```

## Self-explanatory scripts

```json
  "scripts": {
    "start": "tsx src/index.ts",
    "test": "vitest",
    "test:cov": "vitest --coverage",
    "test:ui": "vitest --ui",
    "lint": "eslint src/**",
    "format": "prettier --write .",
    "validate": "npm run lint && npm run format"
  }
```

## Disclaimer

Since it's a puzzle event, given inputs are considered trustworthy and well-formed (unless stated otherwise). Hence, validation and edge cases aren't considered.

_Code reviews are welcome!_
