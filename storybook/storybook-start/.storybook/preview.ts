import type { Preview } from "@storybook/react";
import '../src/index.css'
// 추후 font설정도 추가

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  tags: ["autodocs"]
};

export default preview;
