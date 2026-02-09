'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Container, Section } from '@/components/ui';
import { Button, ArrowIcon } from '@/components/ui/Button';
import { formatDate } from '@/lib/utils';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { getData } from '@/data';

export function BlogPreviewSection() {
    const { t, language } = useLanguage();
    const { posts } = getData(language);
    const featuredPosts = posts.slice(0, 3);

    return (
        <Section>
            <Container>
                {/* Header */}
                <motion.div
                    className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div>
                        <span className="text-[var(--color-primary)] text-sm font-medium uppercase tracking-widest">
                            {t('sections.blog_preview.Badge')}
                        </span>
                        <h2 className="mt-4 text-3xl md:text-4xl font-bold">
                            {t('sections.blog_preview.Title')}
                        </h2>
                    </div>
                    <Button href="/blog" variant="black-outline" icon={<ArrowIcon />}>
                        {t('sections.blog_preview.Button')}
                    </Button>
                </motion.div>

                {/* Blog Cards */}
                <div className="grid md:grid-cols-3 gap-6">
                    {featuredPosts.map((post, index) => (
                        <motion.article
                            key={post.slug}
                            className="group relative rounded-[var(--radius-lg)] overflow-hidden bg-[var(--color-bg-card)] border border-[var(--color-border)] hover:border-[var(--color-primary)]/50 transition-all duration-[var(--duration-normal)]"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -6 }}
                        >
                            <Link href={`/blog/${post.slug}`} className="absolute inset-0 z-10" aria-label={`Read ${post.title}`} />

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

                                <h3 className="text-lg font-semibold mb-2 line-clamp-2 group-hover:text-[var(--color-primary)] transition-colors duration-[var(--duration-normal)]">
                                    {post.title}
                                </h3>

                                <p className="text-sm text-[var(--color-text-secondary)] line-clamp-2">
                                    {post.excerpt}
                                </p>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
