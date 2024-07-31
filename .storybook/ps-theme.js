import {create} from '@storybook/theming';
import logoUrl from './logo-prestashop.svg';

export default create({
  base: 'dark',
  brandTitle: 'PrestaShop',
  brandUrl: 'https://www.prestashop-project.org',
  brandImage: logoUrl,

  colorPrimary: '#1d1d1b',
  colorSecondary: '#a4dbe8',

  // UI
  appBg: '#1d1d1b',
  appContentBg: 'white',
  appBorderRadius: 0,

  barTextColor: 'white',
  barSelectedColor: '#a4dbe8',
  barBg: '#3f3f3d',

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'white',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Form
  inputTextColor: 'black',
  inputBorderRadius: 0,
});
