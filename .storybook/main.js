const path = require('path');

module.exports = {
  stories: ['../stories/**/*.stories.mdx', '../stories/**/*.stories.js'],
  addons: [
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-essentials',
    },
  ],
  webpackFinal: (config) => {
    config.module.rules[3].use = 'html-loader?minimize=false';

    return config;
  },
};
