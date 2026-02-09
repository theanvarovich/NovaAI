interface SkeletonProps {
    className?: string;
}

export function Skeleton({ className = '' }: SkeletonProps) {
    return <div className={`skeleton ${className}`} />;
}

export function CardSkeleton() {
    return (
        <div className="rounded-[var(--radius-lg)] bg-[var(--color-bg-card)] border border-[var(--color-border)] overflow-hidden">
            <Skeleton className="aspect-[16/10]" />
            <div className="p-6 space-y-4">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-full" />
            </div>
        </div>
    );
}

export function BlogCardSkeleton() {
    return (
        <div className="rounded-[var(--radius-lg)] bg-[var(--color-bg-card)] border border-[var(--color-border)] overflow-hidden">
            <Skeleton className="aspect-[16/9]" />
            <div className="p-6 space-y-3">
                <Skeleton className="h-3 w-24" />
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-2/3" />
                <Skeleton className="h-4 w-full" />
            </div>
        </div>
    );
}

export function TextSkeleton() {
    return (
        <div className="space-y-3">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-4/6" />
        </div>
    );
}

export function ImageSkeleton({ className = '' }: SkeletonProps) {
    return (
        <div className={`skeleton rounded-[var(--radius-md)] ${className}`}>
            <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-8 h-8 text-[var(--color-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            </div>
        </div>
    );
}
