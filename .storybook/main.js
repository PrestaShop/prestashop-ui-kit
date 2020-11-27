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
    config.resolve.alias['core-js/modules'] = '@storybook/core/node_modules/core-js/modules';
    config.module.rules[3].use = 'html-loader?minimize=false';

    return config;
  },
};
