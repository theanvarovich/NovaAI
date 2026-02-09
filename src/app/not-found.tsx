'use client';

import Link from 'next/link';
import { Container } from '@/components/ui';
import { Button, ArrowIcon } from '@/components/ui/Button';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function NotFoundPage() {
    const { t, language } = useLanguage();

    return (
        <section className="min-h-screen flex items-center justify-center">
            <Container>
                <div className="text-center max-w-xl mx-auto">
                    {/* 404 Visual */}
                    <div className="relative w-48 h-48 mx-auto mb-8">
                        <div className="absolute inset-0 rounded-full bg-[var(--color-primary)]/10 animate-pulse" />
                        <div className="absolute inset-4 rounded-full bg-[var(--color-bg-card)] border border-[var(--color-border)] flex items-center justify-center">
                            <span className="text-6xl font-bold text-[var(--color-primary)]">404</span>
                        </div>
                    </div>

                    <h1 className="text-3xl md:text-4xl font-bold mb-4">
                        {t('not_found.title')}
                    </h1>

                    <p className="text-[var(--color-text-secondary)] text-lg mb-8">
                        {t('not_found.description')}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button href="/" size="lg" icon={<ArrowIcon />}>
                            {t('not_found.home_button')}
                        </Button>
                        <Button href="/contact" variant="black-outline" size="lg">
                            {t('not_found.contact_button')}
                        </Button>
                    </div>

                    {/* Helpful Links */}
                    <div className="mt-12 pt-8 border-t border-[var(--color-border)]">
                        <p className="text-sm text-[var(--color-muted)] mb-4">
                            {t('not_found.helpful_links')}
                        </p>
                        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                            <Link href="/about" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors">
                                {t('not_found.links.about')}
                            </Link>
                            <Link href="/projects" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors">
                                {t('not_found.links.projects')}
                            </Link>
                            <Link href="/blog" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors">
                                {t('not_found.links.blog')}
                            </Link>
                            <Link href="/service-static" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors">
                                {t('not_found.links.services')}
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
