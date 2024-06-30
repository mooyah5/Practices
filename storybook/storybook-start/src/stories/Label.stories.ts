import type { Meta, StoryObj } from '@storybook/react';
import Label from '../components/Label';

// 버튼이 받는 prop들 정리
const meta = {
  title: 'TEXT/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    htmlFor: { control: 'text', description:"label의 for 속성" },
    children: { control: 'text', description:"label의 내용" },
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    htmlFor: "username",
    children: '이메일',
  },
};
