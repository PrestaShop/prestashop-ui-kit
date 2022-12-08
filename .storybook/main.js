const path = require('path');

module.exports = {
  stories: ['../stories/**/*.stories.mdx'],
  addons: [
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-essentials',
    },
  ],
  webpackFinal: (config) => {
    config.module.rules[3].use = 'html-loader?minimize=false';
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    return config;
  },
  addonActionsTheme: {
    BASE_COLOR: 'red',
  },
  core: {
    builder: 'webpack5',
  },
};
