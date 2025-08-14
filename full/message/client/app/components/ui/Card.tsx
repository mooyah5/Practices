import { HTMLAttributes } from 'react';

type Padding = 'sm' | 'md' | 'lg';
type Variant = 'solid' | 'outline' | 'ghost';

export type CardProps = HTMLAttributes<HTMLDivElement> & {
    padding?: Padding;
    variant?: Variant;
    elevated?: boolean; // 그림자
    interactive?: boolean; // hover 효과
};

const padCls: Record<Padding, string> = {
    sm: 'p-3',
    md: 'p-4',
    lg: 'p-6',
};

const variantCls: Record<Variant, string> = {
    solid: 'bg-white border',
    outline: 'bg-white border-2',
    ghost: 'bg-transparent border',
};

export default function Card({
    padding = 'md',
    variant = 'solid',
    elevated = false,
    interactive = false,
    className = '',
    ...props
}: CardProps) {
    return (
        <div
            className={[
                'rounded-lg',
                padCls[padding],
                variantCls[variant],
                elevated ? 'shadow-md' : '',
                interactive ? 'transition hover:bg-gray-50' : '',
                className,
            ].join(' ')}
            {...props}
        />
    );
}

export function CardHeader({ className = '', ...p }: HTMLAttributes<HTMLDivElement>) {
    return <div className={['mb-2', className].join(' ')} {...p} />;
}
export function CardTitle({ className = '', ...p }: HTMLAttributes<HTMLHeadingElement>) {
    return <h3 className={['text-base font-semibold', className].join(' ')} {...p} />;
}
export function CardDescription({ className = '', ...p }: HTMLAttributes<HTMLParagraphElement>) {
    return <p className={['text-sm text-gray-600', className].join(' ')} {...p} />;
}
export function CardContent({ className = '', ...p }: HTMLAttributes<HTMLDivElement>) {
    return <div className={className} {...p} />;
}
export function CardFooter({ className = '', ...p }: HTMLAttributes<HTMLDivElement>) {
    return <div className={['mt-3', className].join(' ')} {...p} />;
}
