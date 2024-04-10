# eslint-config-moneyforward

This package provides moneyforward's `.eslintrc` as an extensible shared config.

## Usage

### 1. Install dependencies (and peer dependencies)

```bash
npm install --save-dev eslint-config-moneyforward eslint
```

### 2. Configure ESLint

Within your ESLint config file:

```json
{
  "extends": ["moneyforward/essentials"]
}
```

If you need React Support:

```diff
{
  "extends": [
    "moneyforward/essentials",
+   "moneyforward/react",
  ]
}
```

Must be added after `essentials`.

We also provide various other rule sets that you can configure to suit your project.

```json
{
  "extends": [
    "moneyforward/essentials",
    "moneyforward/jsdoc",
    "moneyforward/next",
    "moneyforward/node",
    "moneyforward/react",
    "moneyforward/storybook",
    "moneyforward/test/react",
    "moneyforward/typescript"
  ]
}
```

|     Rule set | Summary                                               | Dependencies                                                                                                                                                                                                                                                                        |
| -----------: | :---------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `essentials` | Contains basic, import, and promise recommended rules | [`eslint`](https://eslint.org/) <br> [`eslint-plugin-promise`](https://github.com/eslint-community/eslint-plugin-promise) <br> [`eslint-plugin-import`](https://github.com/import-js/eslint-plugin-import)                                                                          |
|      `jsdoc` | Contains JSDoc recommended rules                      | [`eslint-plugin-jsdoc`](https://github.com/gajus/eslint-plugin-jsdoc)                                                                                                                                                                                                               |
|       `next` | Contains Next.js recommended rules                    | [`eslint-plugin-next`](https://github.com/vercel/next.js/tree/canary/packages/eslint-plugin-next)                                                                                                                                                                                   |
|       `node` | Contains Node.js recommended rules                    | [`eslint-plugin-n`](https://github.com/eslint-community/eslint-plugin-n)                                                                                                                                                                                                            |
|      `react` | Contains React recommended rules                      | [`eslint-plugin-jsx-a11y`](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y) <br> [`eslint-plugin-react-hooks`](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks) <br> [`eslint-plugin-react`](https://github.com/jsx-eslint/eslint-plugin-react) |
|  `storybook` | Contains Storybook recommended rules                  | [`eslint-plugin-storybook`](https://github.com/storybookjs/eslint-plugin-storybook)                                                                                                                                                                                                 |
| `test/react` | Contains Jest and React Testing Library rules         | [`eslint-plugin-jest`](https://github.com/jest-community/eslint-plugin-jest) <br> [`eslint-plugin-testing-library`](https://github.com/testing-library/eslint-plugin-testing-library)                                                                                               |
| `typescript` | Contains TypeScript recommended rules                 | [`@eslint-typescript/eslint-plugin`](https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin) <br> [`@eslint-typescript/parser`](https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/parser)                                  |

## Using Prettier

If you use [Prettier](https://prettier.io/) to format your code, you must disable any rules in `moneyforward/essentials` that conflict with Prettier.

### 1. Install dependencies

```bash
npm install --save-dev eslint-config-prettier
```

### 2. Configure ESLint

Within your ESLint config file:

```diff
{
  "extends": [
    "moneyforward/essentials",
    "moneyforward/react",
+   "prettier"
  ]
}
```

By adding the `prettier` configuration to `extends` in the ESLint configuration, you can disable all rules in `moneyforward/essentials` that conflict with Prettier.

## Versioning

- Increment major version: Changed **error** rules.
- Increment minor version: Changed **warn** rules.
- Increment patch version: Not changed **error** and **warn** rules.

## License

Open source [licensed as MIT](https://github.com/iamturns/eslint-config-airbnb-typescript/blob/master/LICENSE).
