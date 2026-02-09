import { ReactNode } from 'react';
import Link from 'next/link';
import { Button } from './Button';

interface EmptyStateProps {
    icon?: ReactNode;
    title: string;
    description: string;
    actionLabel?: string;
    actionHref?: string;
    className?: string;
}

export function EmptyState({
    icon,
    title,
    description,
    actionLabel,
    actionHref,
    className = '',
}: EmptyStateProps) {
    return (
        <div className={`flex flex-col items-center justify-center text-center py-16 ${className}`}>
            {icon && (
                <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-full bg-[var(--color-bg-card)] border border-[var(--color-border)] text-[var(--color-muted)]">
                    {icon}
                </div>
            )}

            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-[var(--color-text-secondary)] max-w-md mb-6">{description}</p>

            {actionLabel && actionHref && (
                <Button href={actionHref} variant="primary">
                    {actionLabel}
                </Button>
            )}
        </div>
    );
}

// Default empty state icon
export function EmptyIcon({ className = '' }: { className?: string }) {
    return (
        <svg className={`w-8 h-8 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
        </svg>
    );
}
