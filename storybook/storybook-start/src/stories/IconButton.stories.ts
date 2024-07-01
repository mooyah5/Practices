import type { Meta, StoryObj } from '@storybook/react';
import IconButton from '../components/IconButton';
import { fn } from '@storybook/test';

const meta = {
  title: 'BUTTON/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    alt: { control: 'text', description: "icon button의 대체 텍스트" },
    iconPath: { control: 'text', description: "icon button의 이미지 URL" },
    onClick: { action: 'clicked', description: "icon button 클릭 시 호출되는 함수" },
  },
  args: {
    alt: '인풋 클리어',
    iconPath: 'https://cdn.jsdelivr.net/npm/bootstrap-icons/icons/x-circle.svg',
    // iconPath public 아닌 assets 경로 사용 시 import 필요
    onClick: fn(),
  }
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    alt: '인풋 클리어',
    iconPath: 'https://cdn.jsdelivr.net/npm/bootstrap-icons/icons/x-circle.svg',
    onClick:fn(),
  },
};
