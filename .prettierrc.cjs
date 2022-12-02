module.exports = {
  semi: false,
  trailingComma: 'all',
  singleQuote: true,
  printWidth: 120,
  tabWidth: 2,
  overrides: [
    {
      files: ['*.ts', '*.mts'],
      options: {
        parser: 'typescript',
      },
    },
  ],
}
