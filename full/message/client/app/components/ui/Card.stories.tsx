import type { Meta, StoryObj } from '@storybook/react';
import Card, { CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './Card';

const meta: Meta<typeof Card> = {
    title: 'UI/Card',
    component: Card,
    args: { padding: 'md', variant: 'solid', elevated: false, interactive: false },
    argTypes: {
        padding: { control: 'select', options: ['sm', 'md', 'lg'] },
        variant: { control: 'select', options: ['solid', 'outline', 'ghost'] },
        elevated: { control: 'boolean' },
        interactive: { control: 'boolean' },
    },
};
export default meta;
type S = StoryObj<typeof Card>;

export const Default: S = { args: { children: '내용' } };

export const ElevatedInteractive: S = {
    args: { elevated: true, interactive: true, children: '호버해보세요' },
};

export const WithSections: S = {
    render: args => (
        <Card {...args}>
            <CardHeader>
                <CardTitle>제목</CardTitle>
                <CardDescription>설명 텍스트</CardDescription>
            </CardHeader>
            <CardContent>콘텐츠 영역</CardContent>
            <CardFooter>푸터</CardFooter>
        </Card>
    ),
    args: { elevated: true, variant: 'outline' },
};
