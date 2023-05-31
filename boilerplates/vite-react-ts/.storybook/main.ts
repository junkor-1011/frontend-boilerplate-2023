import type { StorybookConfig } from '@storybook/react-vite';
import linariaBabelPreset from '@linaria/babel-preset';
const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-postcss',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  babel: (config) => {
    if (config.presets != null) {
      config.presets.push(linariaBabelPreset);
    } else {
      config.presets = [linariaBabelPreset];
    }
    return config;
  },
};
export default config;
