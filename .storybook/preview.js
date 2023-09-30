/** @type { import('@storybook/react').Preview } */

import { UserConfigProvider } from '../src/app/context/userConfig';

const value = { state: { userConfig: { unit: 'imperial' } }};

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <UserConfigProvider value={value}>
        <Story />
      </UserConfigProvider>
    ),
  ],
};

export default preview;
