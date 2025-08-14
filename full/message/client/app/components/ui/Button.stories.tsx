import type { Meta, StoryObj } from '@storybook/react';
import Button, { ButtonProps } from './Button';

const meta: Meta<ButtonProps> = {
    title: 'UI/Button', // storybook에서의 경로
    component: Button, // 컴포넌트 지정
    // args: 기본 props 값
    args: { children: '버튼', variant: 'secondary', size: 'md' },
    // argTypes: 스토리북 UI에서 props 제어 가능한 방식 지정 (개발/디자인 협업 효율)
    argTypes: {
        variant: { control: 'select', options: ['primary', 'secondary', 'ghost'] },
        size: { control: 'select', options: ['sm', 'md', 'lg'] },
        fullWidth: { control: 'boolean' },
        loading: { control: 'boolean' },
    },
};

export default meta;
type S = StoryObj<ButtonProps>;

export const Primary: S = { args: { variant: 'primary' } };
export const Secondary: S = { args: { variant: 'secondary' } };
export const Ghost: S = { args: { variant: 'ghost' } };
export const Large: S = { args: { size: 'lg' } };
export const Loading: S = { args: { loading: true } };
