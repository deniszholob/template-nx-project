import { addons } from '@storybook/manager-api';
import { create, ThemeVars } from '@storybook/theming';

// https://storybook.js.org/docs/angular/configure/theming
const APP_THEME: ThemeVars = create({
  // Sync this with the doc theme in preview.ts
  base: 'dark',

  // Typography
  fontBase: 'Roboto, "Open Sans", sans-serif',
  fontCode: 'monospace',

  // Colors
  colorPrimary: 'red',
  colorSecondary: '#cf3838',
  brandTitle: 'AWERHAEWRH',
  appBg: '#333333',
});

addons.setConfig({ theme: APP_THEME });
