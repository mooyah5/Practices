import type { StorybookConfig } from '@storybook/nextjs-vite';
import { join, dirname } from 'path';

// PnP/monore포 대응용
function getAbsolutePath(value: string): string {
    return dirname(require.resolve(join(value, 'package.json')));
}

const config: StorybookConfig = {
    stories: [
        '../app/**/*.mdx',
        '../app/**/*.stories.@(js|jsx|mjs|ts|tsx)',
        '../app/components/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    ],
    addons: [
        getAbsolutePath('@chromatic-com/storybook'),
        getAbsolutePath('@storybook/addon-docs'),
        getAbsolutePath('@storybook/addon-onboarding'),
        getAbsolutePath('@storybook/addon-a11y'),
        getAbsolutePath('@storybook/addon-vitest'),
    ],
    framework: {
        name: getAbsolutePath('@storybook/nextjs-vite'),
        options: {},
    },
    staticDirs: ['../public'],

    // Next.js + Vite에서 TS paths와 동일한 별칭 적용
    viteFinal: async config => {
        config.resolve = config.resolve || {};
        config.resolve.alias = {
            ...(config.resolve.alias || {}),
            '@ui': '/app/components/ui',
            '@features': '/app/components/features',
            '@components': '/app/components',
            '@libs': '/app/libs',
        };
        return config;
    },
};

export default config;
