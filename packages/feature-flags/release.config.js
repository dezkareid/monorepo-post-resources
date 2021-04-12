/* eslint-disable no-template-curly-in-string */
module.exports = {
  branches: ['main'],
  repositoryUrl: 'https://github.com/dezkareid/monorepo-post-resources',
  tagFormat: 'ffv${version}',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/github',
  ],
  extends: 'semantic-release-monorepo',
};
