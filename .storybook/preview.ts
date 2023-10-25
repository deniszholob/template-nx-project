import {
  AngularRenderer,
  componentWrapperDecorator,
  Parameters,
} from '@storybook/angular';
import { themes } from '@storybook/theming';
import { DecoratorFunction } from '@storybook/types';

export const parameters: Parameters = {
  // layout: 'fullscreen', // centered, fullscreen, padded
  docs: {
    canvas: { sourceState: 'shown' }, // start with the source open https://github.com/storybookjs/storybook/issues/10430
    // inlineStories: true,
    // story: { inline: true }, // render the story in an iframe
    // docs: { inlineStories: true, source: { state: 'open' } },
    // source: { type: 'code' }, // forces the raw source code (rather than the rendered JSX).
    toc: true,
    theme: themes.dark,
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    hideNoControlsWarning: true, // If component has no @Input()
    expanded: true,
    matchers: {
      color: /(background|color)/i,
      date: /Date$/,
    },
  },
  // backgrounds: { default: 'dark' },
};

const DECORATOR_NGXS_CLEAR_STORE: DecoratorFunction<AngularRenderer, string> =
  componentWrapperDecorator((story: string): string => {
    window.localStorage.removeItem('@@STATE');
    return story;
  });

const DECORATOR_APP_WRAPPER = (storyFunc: any) => {
  const story = storyFunc();
  return {
    ...story,
    template: `<div class="site">${story.template}</div>`,
  };
};

export const decorators: DecoratorFunction<AngularRenderer, string>[] = [
  DECORATOR_NGXS_CLEAR_STORE,
  // DECORATOR_APP_WRAPPER,
];
