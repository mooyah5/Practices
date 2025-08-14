'use client';
import { ComponentProps } from 'react';

// 1. 구조: 버튼 크기, 스타일 변형 (안정성)
type Size = 'sm' | 'md' | 'lg';
type Variant = 'primary' | 'secondary' | 'ghost';

export type ButtonProps = ComponentProps<'button'> & {
    size?: Size;
    variant?: Variant;
    fullWidth?: boolean;
    loading?: boolean;
    loadingText?: string;
};

// 스타일 매핑 (유지보수성)
const sizeCls: Record<Size, string> = {
    sm: 'h-8 px-3 text-sm',
    md: 'h-9 px-4 text-sm',
    lg: 'h-11 px-5 text-base',
};

const variantCls: Record<Variant, string> = {
    primary: 'bg-black text-white hover:bg-gray-900',
    secondary: 'bg-white text-black border hover:bg-gray-50',
    ghost: 'bg-transparent hover:bg-gray-50',
};

export default function Button({
    size = 'md',
    variant = 'secondary',
    fullWidth,
    loading,
    loadingText = '로딩 중...',
    disabled,
    className = '',
    children,
    ...props
}: ButtonProps) {
    const isDisabled = disabled || loading;
    return (
        <button
            disabled={isDisabled}
            className={[
                'inline-flex items-center justify-center rounded-md border transition',
                sizeCls[size],
                variantCls[variant],
                fullWidth ? 'w-full' : '',
                isDisabled ? 'opacity-60 cursor-not-allowed' : '',
                className,
            ].join(' ')}
            {...props}
        >
            {loading ? loadingText : children}
        </button>
    );
}
// export type { Size as ButtonSize, Variant as ButtonVariant };
