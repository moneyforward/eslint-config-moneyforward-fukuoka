const { getESLintConfig, optimizeRules } = require('../helper');

test('should match ESLint configuration snapshot: node', async () => {
  const filePath = './dummy.js';
  const { rules, settings } = await getESLintConfig(filePath, __dirname);

  expect({ rules: optimizeRules(rules), settings }).toMatchSnapshot();
});
