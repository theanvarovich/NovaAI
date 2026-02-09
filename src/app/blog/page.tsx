'use client';

import Link from 'next/link';
import { Container, Section } from '@/components/ui';
import { EmptyState, EmptyIcon } from '@/components/ui/EmptyState';
import { formatDate } from '@/lib/utils';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { getData } from '@/data';

export default function BlogPage() {
    const { language, t } = useLanguage();
    const { posts } = getData(language);

    if (posts.length === 0) {
        return (
            <Section className="pt-32">
                <Container>
                    <EmptyState
                        icon={<EmptyIcon />}
                        title={t('blog_page.empty.title')}
                        description={t('blog_page.empty.description')}
                        actionLabel={t('blog_page.empty.back')}
                        actionHref="/"
                    />
                </Container>
            </Section>
        );
    }

    return (
        <>
            {/* Hero */}
            <section className="pt-32 pb-16">
                <Container>
                    <div className="max-w-3xl">
                        <span className="text-[var(--color-primary)] text-sm font-medium uppercase tracking-widest">
                            {t('blog_page.hero.badge')}
                        </span>
                        <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold">
                            {t('blog_page.hero.title')}
                        </h1>
                        <p className="mt-6 text-xl text-[var(--color-text-secondary)]">
                            {t('blog_page.hero.description')}
                        </p>
                    </div>
                </Container>
            </section>

            {/* Posts Grid */}
            <Section className="pt-0">
                <Container>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {posts.map((post) => (
                            <Link
                                key={post.slug}
                                href={`/blog/${post.slug}`}
                                className="group relative rounded-[var(--radius-lg)] overflow-hidden bg-[var(--color-bg-card)] border border-[var(--color-border)] hover:border-[var(--color-primary)]/50 transition-all duration-[var(--duration-normal)] hover:-translate-y-1 block"
                            >
                                {/* Image placeholder */}
                                <div className="relative aspect-[16/9] bg-gradient-to-br from-[var(--color-bg-elevated)] to-[var(--color-bg-card)]">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <svg className="w-12 h-12 text-[var(--color-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <div className="flex items-center gap-2 text-xs text-[var(--color-muted)] mb-3">
                                        <span>{formatDate(post.date, language)}</span>
                                        <span>•</span>
                                        <span>{post.author}</span>
                                    </div>

                                    <h2 className="text-lg font-semibold mb-2 line-clamp-2 group-hover:text-[var(--color-primary)] transition-colors">
                                        {post.title}
                                    </h2>

                                    <p className="text-sm text-[var(--color-text-secondary)] line-clamp-2">
                                        {post.excerpt}
                                    </p>

                                    {/* Tags */}
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {post.tags.slice(0, 2).map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-2 py-1 text-xs rounded-full bg-[var(--color-bg-elevated)] text-[var(--color-muted)]"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </Container>
            </Section>
        </>
    );
}
