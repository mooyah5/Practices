import type { Meta, StoryObj } from '@storybook/react';
import ErrorMessage from '../components/ErrorMessage';

// 버튼이 받는 prop들 정리
const meta = {
  title: 'TEXT/ErrorMessage',
  component: ErrorMessage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text', description:"error message의 내용" },
  },
} satisfies Meta<typeof ErrorMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '에러 메시지는 여기로',
  },
};
