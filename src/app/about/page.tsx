'use client';

import { motion } from 'framer-motion';
import { Container, Section } from '@/components/ui';
import { Button, ArrowIcon } from '@/components/ui/Button';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function AboutPage() {
    const { t } = useLanguage();

    const stats = [
        { value: '5+', label: t('about_page.stats.experience') },
        { value: '200+', label: t('about_page.stats.projects') },
        { value: '50+', label: t('about_page.stats.team') },
        { value: '150M+', label: t('about_page.stats.api_calls') },
    ];

    const values = [
        {
            title: t('about_page.values.items.innovation.title'),
            description: t('about_page.values.items.innovation.desc'),
        },
        {
            title: t('about_page.values.items.integrity.title'),
            description: t('about_page.values.items.integrity.desc'),
        },
        {
            title: t('about_page.values.items.impact.title'),
            description: t('about_page.values.items.impact.desc'),
        },
        {
            title: t('about_page.values.items.excellence.title'),
            description: t('about_page.values.items.excellence.desc'),
        },
    ];

    return (
        <>
            {/* Hero */}
            <section className="pt-32 pb-16">
                <Container>
                    <div className="max-w-3xl">
                        <span className="text-[var(--color-primary)] text-sm font-medium uppercase tracking-widest">
                            {t('about_page.hero.badge')}
                        </span>
                        <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold">
                            {t('about_page.hero.title')}
                        </h1>
                        <p className="mt-6 text-xl text-[var(--color-text-secondary)] leading-relaxed">
                            {t('about_page.hero.description')}
                        </p>
                    </div>
                </Container>
            </section>

            {/* Stats */}
            <Section className="py-16 bg-[var(--color-bg-elevated)] border-y border-[var(--color-border)]">
                <Container>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat) => (
                            <div key={stat.label} className="text-center">
                                <div className="text-4xl md:text-5xl font-bold text-[var(--color-primary)]">
                                    {stat.value}
                                </div>
                                <div className="mt-2 text-sm text-[var(--color-muted)]">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Story */}
            <Section>
                <Container>
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold">{t('about_page.story.title')}</h2>
                            <div className="mt-6 space-y-4 text-[var(--color-text-secondary)]">
                                <p>{t('about_page.story.p1')}</p>
                                <p>{t('about_page.story.p2')}</p>
                                <p>{t('about_page.story.p3')}</p>
                            </div>
                        </div>
                        <div className="relative aspect-square max-w-lg mx-auto">
                            <div className="absolute inset-8 rounded-[var(--radius-lg)] bg-gradient-to-br from-[var(--color-bg-card)] to-[var(--color-bg-elevated)] border border-[var(--color-border)]" />
                            <div className="absolute top-0 right-0 w-32 h-32 rounded-[var(--radius-lg)] bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20" />
                            <div className="absolute bottom-0 left-0 w-24 h-24 rounded-[var(--radius-lg)] bg-purple-500/10 border border-purple-500/20" />
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Values */}
            <Section className="bg-[var(--color-bg-elevated)]">
                <Container>
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold">{t('about_page.values.title')}</h2>
                        <p className="mt-4 text-[var(--color-text-secondary)]">
                            {t('about_page.values.subtitle')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {values.map((value) => (
                            <div
                                key={value.title}
                                className="p-6 rounded-[var(--radius-lg)] bg-[var(--color-bg-card)] border border-[var(--color-border)]"
                            >
                                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                                <p className="text-[var(--color-text-secondary)]">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* CTA */}
            <Section>
                <Container>
                    <div className="text-center max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold">{t('about_page.cta.title')}</h2>
                        <p className="mt-4 text-[var(--color-text-secondary)] text-lg">
                            {t('about_page.cta.desc')}
                        </p>
                        <div className="mt-8">
                            <Button href="/contact" size="lg" icon={<ArrowIcon />}>
                                {t('about_page.cta.button')}
                            </Button>
                        </div>
                    </div>
                </Container>
            </Section>
        </>
    );
}
