module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // type-enum与changelog.config.js文件中保持一致
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'style',
        'chore',
        'perf',
        'refactor',
        'docs',
        'test',
        'revert',
        'build',
        'ci',
        'release',
      ],
    ],
  },
};
