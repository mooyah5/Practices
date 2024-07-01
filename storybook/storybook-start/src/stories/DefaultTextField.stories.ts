import type { Meta, StoryObj } from '@storybook/react';
import DefaultTextField from '../components/DefaultTextField';
import { fn } from '@storybook/test';

const meta = {
  title: 'TEXT_FIELD/DefaultTextField',
  component: DefaultTextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    iconAlt: { control: 'text', description: "icon button의 대체 텍스트" },
    iconPath: { control: 'text', description: "icon button의 이미지 URL" },
    onIconClick: { action: 'clicked', description: "icon button 클릭 시 호출되는 함수" },
    value: { control: 'text', description: "input의 value" },
    onChange: { action: 'changed', description: "input 값이 변경될 때 호출되는 함수" },
    placeholder: { control: 'text', description: "input의 placeholder" },
    errorMessage: { control: 'text', description: "error message의 내용" },
    isError: { control: 'boolean', description: "error 상태" },
  },
  args: {
    iconAlt: '인풋 클리어',
    iconPath: 'https://cdn.jsdelivr.net/npm/bootstrap-icons/icons/x-circle.svg',
    onIconClick: fn(),
    value: '',
    onChange: fn(),
    placeholder: '입력해 주세요.',
    errorMessage: '오류가 발생했습니다.',
    isError: false,
  }
} satisfies Meta<typeof DefaultTextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    iconAlt: '인풋 클리어',
    iconPath: 'https://cdn.jsdelivr.net/npm/bootstrap-icons/icons/x-circle.svg',
    value: '',
    placeholder: '입력해 주세요.',
    errorMessage: '텍스트를 확인해 주세요.',
    isError: false
  },
};
