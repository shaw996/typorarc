/* eslint-disable sort-keys-fix/sort-keys-fix */
/* eslint-disable sort-keys */
module.exports = {
  disableEmoji: false,
  format: '{type}{scope}: {emoji}{subject}',
  list: [
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
  maxMessageLength: 64,
  minMessageLength: 3,
  questions: ['type', 'scope', 'subject', 'body', 'breaking', 'issues'],
  scopes: ['proj', 'module', 'comps', 'store', 'utils'],
  types: {
    feat: {
      description: 'A new feature',
      emoji: '🚀',
      value: 'feat',
    },
    fix: {
      description: 'A bug fix',
      emoji: '🐛',
      value: 'fix',
    },
    style: {
      description: 'Markup, white-space, formatting, missing semi-colons...',
      emoji: '💄',
      value: 'style',
    },
    chore: {
      description: 'Build process or auxiliary tool changes',
      emoji: '🤖', // 当前类型的commit所显示的表情
      value: 'chore',
    },
    perf: {
      description: 'A code change that improves performance',
      emoji: '⚡️',
      value: 'perf',
    },
    refactor: {
      description: 'A code change that neither fixes a bug or adds a feature',
      emoji: '♻️',
      value: 'refactor',
    },
    docs: {
      description: 'Documentation only changes',
      emoji: '📚',
      value: 'docs',
    },
    test: {
      description: 'Adding missing tests',
      emoji: '✅',
      value: 'test',
    },
    revert: {
      description: 'Reverts a previous commit',
      value: 'revert',
      emoji: '⏪️',
    },
    build: {
      description: 'Changes that affect the build system or external dependencies',
      emoji: '📦️',
      value: 'build',
    },
    ci: {
      description: 'CI related changes',
      emoji: '🎡',
      value: 'ci',
    },
    release: {
      description: 'Create a release commit',
      emoji: '🏹',
      value: 'release',
    },
  },
  messages: {
    type: "Select the type of change that you're committing:\n",
    customScope: 'Denote the SCOPE of this change (optional):\n',
    subject: 'Write a SHORT, IMPERATIVE tense description of the change:\n',
    body: 'Provide a LONGER description of the change:\n ',
    breaking: 'List any BREAKING changes:\n',
    footer: 'Issues this commit closes, e.g #123, #124:\n',
    confirmCommit: 'Are you sure you want to proceed with the commit above:\n',
  },
};
