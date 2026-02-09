'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import NextImage from 'next/image';
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

                            {/* Image */}
                            <div className="relative aspect-[16/9] bg-[var(--color-bg-elevated)] overflow-hidden">
                                <NextImage
                                    src={post.coverImage}
                                    alt={post.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
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
