'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Container, Section } from '@/components/ui';
import { formatDate } from '@/lib/utils';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { getData } from '@/data';
import { useEffect, useState } from 'react';

// Client component to handle language switching dynamically
export default function BlogDetailPage() {
    const params = useParams();
    const { language } = useLanguage();
    const { posts } = getData(language);
    const [slug, setSlug] = useState<string>('');

    useEffect(() => {
        if (params?.slug) {
            setSlug(params.slug as string);
        }
    }, [params]);

    if (!slug) return null;

    const post = posts.find((p) => p.slug === slug);

    if (!post) {
        return (
            <Section className="pt-32">
                <Container>
                    <div className="text-center">
                        <h1 className="text-2xl font-bold">Post Not Found</h1>
                        <Link href="/blog" className="text-[var(--color-primary)] mt-4 inline-block">
                            Back to Blog
                        </Link>
                    </div>
                </Container>
            </Section>
        );
    }

    return (
        <>
            {/* Hero */}
            <section className="pt-32 pb-16">
                <Container>
                    <div className="max-w-3xl mx-auto">
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 text-sm text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors mb-8"
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            {language === 'ru' ? 'Назад в Блог' : 'Back to Blog'}
                        </Link>

                        <div className="flex items-center gap-2 text-sm text-[var(--color-muted)] mb-4">
                            <span>{formatDate(post.date, language)}</span>
                            <span>•</span>
                            <span>{post.author}</span>
                        </div>

                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                            {post.title}
                        </h1>

                        {/* Tags */}
                        <div className="mt-6 flex flex-wrap gap-2">
                            {post.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 text-sm rounded-full bg-[var(--color-bg-card)] border border-[var(--color-border)] text-[var(--color-text-secondary)]"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* Cover Image */}
            <Section className="py-8">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <div className="aspect-[16/9] rounded-[var(--radius-lg)] bg-gradient-to-br from-[var(--color-bg-card)] to-[var(--color-bg-elevated)] border border-[var(--color-border)] overflow-hidden">
                            <div className="w-full h-full flex items-center justify-center">
                                <svg className="w-16 h-16 text-[var(--color-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Content */}
            <Section className="pt-0">
                <Container>
                    <article className="max-w-3xl mx-auto prose prose-invert prose-lg prose-headings:font-bold prose-headings:tracking-tight prose-p:text-[var(--color-text-secondary)] prose-a:text-[var(--color-primary)] prose-strong:text-[var(--color-text)] prose-code:text-[var(--color-primary)] prose-code:bg-[var(--color-bg-card)] prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-[var(--color-bg-card)] prose-pre:border prose-pre:border-[var(--color-border)] prose-blockquote:border-l-[var(--color-primary)] prose-blockquote:text-[var(--color-text-secondary)]">
                        {/* Render content - in a real app this would be MDX */}
                        {post.content.split('\n\n').map((paragraph, index) => {
                            if (paragraph.startsWith('## ')) {
                                return <h2 key={index}>{paragraph.replace('## ', '')}</h2>;
                            }
                            if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                                return <p key={index}><strong>{paragraph.replace(/\*\*/g, '')}</strong></p>;
                            }
                            if (paragraph.startsWith('1. ')) {
                                const items = paragraph.split('\n').filter(Boolean);
                                return (
                                    <ol key={index}>
                                        {items.map((item, i) => (
                                            <li key={i}>{item.replace(/^\d+\.\s+/, '').replace(/\*\*/g, '')}</li>
                                        ))}
                                    </ol>
                                );
                            }
                            return <p key={index}>{paragraph}</p>;
                        })}
                    </article>
                </Container>
            </Section>

            {/* Author */}
            <Section className="border-t border-[var(--color-border)]">
                <Container>
                    <div className="max-w-3xl mx-auto">
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-purple-500 flex items-center justify-center text-white text-xl font-bold">
                                {post.author.charAt(0)}
                            </div>
                            <div>
                                <div className="font-semibold">{post.author}</div>
                                <div className="text-sm text-[var(--color-muted)]">
                                    {language === 'ru' ? 'Член Команды NovaAI' : 'NovaAI Team Member'}
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>
        </>
    );
}
