'use client';

import Link from 'next/link';
import NextImage from 'next/image';
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
                                {/* Image */}
                                <div className="relative aspect-[16/9] bg-[var(--color-bg-elevated)] overflow-hidden">
                                    <NextImage
                                        src={post.coverImage}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-card)] via-transparent to-transparent opacity-60" />
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
