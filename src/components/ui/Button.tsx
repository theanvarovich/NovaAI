'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

type ButtonVariant = 'primary' | 'white' | 'white-outline' | 'black-outline';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
    children: ReactNode;
    variant?: ButtonVariant;
    size?: ButtonSize;
    href?: string;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
    icon?: ReactNode;
    iconPosition?: 'left' | 'right';
    type?: 'button' | 'submit' | 'reset';
    ariaLabel?: string;
}

const variants: Record<ButtonVariant, string> = {
    primary: `
    bg-[var(--color-primary)] text-white border-transparent
    hover:bg-[var(--color-primary-hover)]
  `,
    white: `
    bg-white text-[var(--color-bg)] border-transparent
    hover:bg-gray-100
  `,
    'white-outline': `
    bg-transparent text-white border-white
    hover:bg-white hover:text-[var(--color-bg)]
  `,
    'black-outline': `
    bg-transparent text-[var(--color-text)] border-[var(--color-border)]
    hover:border-[var(--color-text)] hover:bg-[var(--color-bg-elevated)]
  `,
};

const sizes: Record<ButtonSize, string> = {
    sm: 'px-4 py-2 text-sm gap-1.5',
    md: 'px-6 py-3 text-base gap-2',
    lg: 'px-8 py-4 text-lg gap-2.5',
};

export function Button({
    children,
    variant = 'primary',
    size = 'md',
    href,
    onClick,
    disabled = false,
    className = '',
    icon,
    iconPosition = 'right',
    type = 'button',
    ariaLabel,
}: ButtonProps) {
    const baseStyles = `
    inline-flex items-center justify-center
    font-medium rounded-full border
    transition-all duration-[var(--duration-normal)] ease-[var(--ease-out-cubic)]
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

    const buttonContent = (
        <>
            {icon && iconPosition === 'left' && (
                <motion.span
                    className="inline-flex"
                    whileHover={{ x: -3 }}
                    transition={{ duration: 0.2 }}
                >
                    {icon}
                </motion.span>
            )}
            <span>{children}</span>
            {icon && iconPosition === 'right' && (
                <motion.span
                    className="inline-flex"
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                >
                    {icon}
                </motion.span>
            )}
        </>
    );

    const combinedStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    if (href) {
        return (
            <Link
                href={href}
                className={combinedStyles}
                aria-label={ariaLabel}
            >
                {buttonContent}
            </Link>
        );
    }

    return (
        <motion.button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={combinedStyles}
            aria-label={ariaLabel}
            whileHover={{ scale: disabled ? 1 : 1.02 }}
            whileTap={{ scale: disabled ? 1 : 0.98 }}
            transition={{ duration: 0.2 }}
        >
            {buttonContent}
        </motion.button>
    );
}

// Arrow icon for CTAs
export function ArrowIcon({ className = '' }: { className?: string }) {
    return (
        <svg
            className={`w-4 h-4 ${className}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
        </svg>
    );
}
