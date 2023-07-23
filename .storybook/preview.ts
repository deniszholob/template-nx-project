import { Parameters } from '@storybook/angular';
import { themes } from '@storybook/theming';

export const parameters: Parameters = {
  // layout: 'fullscreen', // centered, fullscreen, padded
  docs: {
    inlineStories: true,
    canvas: { sourceState: 'shown' }, // https://github.com/storybookjs/storybook/issues/10430
    // theme: themes.dark,
    toc: true,
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    hideNoControlsWarning: true,
    expanded: true,
    matchers: {
      color: /(background|color)/i,
      date: /Date$/,
    },
  },
  // backgrounds: { default: 'dark' },
};

// export const decorators = [
//   (storyFunc: any) => {
//     const story = storyFunc();

//     return {
//       ...story,
//       template: `<div class="site">${story.template}</div>`,
//     };
//   },
// ];
