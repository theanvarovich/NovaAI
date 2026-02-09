'use client';

import { Container, Section } from '@/components/ui';
import { Button, ArrowIcon } from '@/components/ui/Button';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function CareersPage() {
    const { t } = useLanguage();

    const benefits = [
        { title: t('careers_page.why_join.items.0.title'), description: t('careers_page.why_join.items.0.desc') },
        { title: t('careers_page.why_join.items.1.title'), description: t('careers_page.why_join.items.1.desc') },
        { title: t('careers_page.why_join.items.2.title'), description: t('careers_page.why_join.items.2.desc') },
        { title: t('careers_page.why_join.items.3.title'), description: t('careers_page.why_join.items.3.desc') },
        { title: t('careers_page.why_join.items.4.title'), description: t('careers_page.why_join.items.4.desc') },
        { title: t('careers_page.why_join.items.5.title'), description: t('careers_page.why_join.items.5.desc') },
    ];

    const openings = [
        {
            title: t('careers_page.openings.list.0.title'),
            department: t('careers_page.openings.list.0.dept'),
            location: t('careers_page.openings.list.0.loc'),
            type: t('careers_page.openings.list.0.type'),
        },
        {
            title: t('careers_page.openings.list.1.title'),
            department: t('careers_page.openings.list.1.dept'),
            location: t('careers_page.openings.list.1.loc'),
            type: t('careers_page.openings.list.1.type'),
        },
        {
            title: t('careers_page.openings.list.2.title'),
            department: t('careers_page.openings.list.2.dept'),
            location: t('careers_page.openings.list.2.loc'),
            type: t('careers_page.openings.list.2.type'),
        },
        {
            title: t('careers_page.openings.list.3.title'),
            department: t('careers_page.openings.list.3.dept'),
            location: t('careers_page.openings.list.3.loc'),
            type: t('careers_page.openings.list.3.type'),
        },
        {
            title: t('careers_page.openings.list.4.title'),
            department: t('careers_page.openings.list.4.dept'),
            location: t('careers_page.openings.list.4.loc'),
            type: t('careers_page.openings.list.4.type'),
        },
    ];

    return (
        <>
            {/* Hero */}
            <section className="pt-32 pb-16">
                <Container>
                    <div className="max-w-3xl">
                        <span className="text-[var(--color-primary)] text-sm font-medium uppercase tracking-widest">
                            {t('careers_page.hero.badge')}
                        </span>
                        <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold">
                            {t('careers_page.hero.title')}
                        </h1>
                        <p className="mt-6 text-xl text-[var(--color-text-secondary)]">
                            {t('careers_page.hero.description')}
                        </p>
                    </div>
                </Container>
            </section>

            {/* Why Join */}
            <Section className="bg-[var(--color-bg-elevated)]">
                <Container>
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold">{t('careers_page.why_join.title')}</h2>
                        <p className="mt-4 text-[var(--color-text-secondary)]">
                            {t('careers_page.why_join.description')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {benefits.map((benefit) => (
                            <div
                                key={benefit.title}
                                className="p-6 rounded-[var(--radius-lg)] bg-[var(--color-bg-card)] border border-[var(--color-border)]"
                            >
                                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                                <p className="text-sm text-[var(--color-text-secondary)]">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Open Positions */}
            <Section>
                <Container>
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold">{t('careers_page.openings.title')}</h2>
                        <p className="mt-4 text-[var(--color-text-secondary)]">
                            {t('careers_page.openings.description')}
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto space-y-4">
                        {openings.map((job) => (
                            <div
                                key={job.title}
                                className="group p-6 rounded-[var(--radius-lg)] bg-[var(--color-bg-card)] border border-[var(--color-border)] hover:border-[var(--color-primary)]/50 transition-colors cursor-pointer"
                            >
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                    <div>
                                        <h3 className="text-lg font-semibold group-hover:text-[var(--color-primary)] transition-colors">
                                            {job.title}
                                        </h3>
                                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-sm text-[var(--color-muted)]">
                                            <span>{job.department}</span>
                                            <span>•</span>
                                            <span>{job.location}</span>
                                            <span>•</span>
                                            <span>{job.type}</span>
                                        </div>
                                    </div>
                                    <Button variant="black-outline" icon={<ArrowIcon />}>
                                        {t('careers_page.openings.apply')}
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* CTA */}
            <Section className="bg-[var(--color-bg-elevated)]">
                <Container>
                    <div className="text-center max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold">{t('careers_page.cta.title')}</h2>
                        <p className="mt-4 text-[var(--color-text-secondary)] text-lg">
                            {t('careers_page.cta.description')}
                        </p>
                        <div className="mt-8">
                            <Button href="mailto:careers@novaai.com" size="lg" icon={<ArrowIcon />}>
                                {t('careers_page.cta.button')}
                            </Button>
                        </div>
                    </div>
                </Container>
            </Section>
        </>
    );
}
