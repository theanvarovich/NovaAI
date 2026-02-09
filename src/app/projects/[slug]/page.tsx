'use client';

import { useParams, notFound } from 'next/navigation';
import Link from 'next/link';
import { Container, Section } from '@/components/ui';
import { Button, ArrowIcon } from '@/components/ui/Button';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { getData } from '@/data';
import { useEffect, useState } from 'react';

// Client component to handle language switching dynamically
export default function ProjectDetailPage() {
    const params = useParams();
    const { language, t } = useLanguage();
    const { projects } = getData(language);
    const [slug, setSlug] = useState<string>('');

    useEffect(() => {
        if (params?.slug) {
            setSlug(params.slug as string);
        }
    }, [params]);

    if (!slug) return null;

    const projectIndex = projects.findIndex((p) => p.slug === slug);
    const project = projects[projectIndex];

    if (!project) {
        return (
            <Section className="pt-32">
                <Container>
                    <div className="text-center">
                        <h1 className="text-2xl font-bold">Project Not Found</h1>
                        <Link href="/projects" className="text-[var(--color-primary)] mt-4 inline-block">
                            Back to Projects
                        </Link>
                    </div>
                </Container>
            </Section>
        );
    }

    const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
    const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

    return (
        <>
            {/* Hero */}
            <section className="pt-32 pb-16">
                <Container>
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 text-sm text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors mb-8"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        {language === 'ru' ? 'Назад к Проектам' : 'Back to Projects'}
                    </Link>

                    <div className="flex items-center gap-2 text-sm text-[var(--color-muted)] mb-4">
                        <span>{project.category}</span>
                        <span>•</span>
                        <span>{project.year}</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                        {project.title}
                    </h1>

                    <p className="mt-6 text-xl text-[var(--color-text-secondary)] max-w-3xl">
                        {project.summary}
                    </p>

                    {/* Tags */}
                    <div className="mt-8 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-3 py-1 text-sm rounded-full bg-[var(--color-bg-card)] border border-[var(--color-border)] text-[var(--color-text-secondary)]"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Hero Image */}
            <Section className="py-8">
                <Container>
                    <div className="aspect-[16/9] rounded-[var(--radius-lg)] bg-gradient-to-br from-[var(--color-bg-card)] to-[var(--color-bg-elevated)] border border-[var(--color-border)] overflow-hidden">
                        <div className="w-full h-full flex items-center justify-center">
                            <div className="w-24 h-24 rounded-full bg-[var(--color-primary-glow)] flex items-center justify-center">
                                <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Challenge */}
            <Section>
                <Container>
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                        <div>
                            <span className="text-[var(--color-primary)] text-sm font-medium uppercase tracking-widest">
                                {language === 'ru' ? 'Задача' : 'The Challenge'}
                            </span>
                            <h2 className="mt-4 text-2xl md:text-3xl font-bold">
                                {language === 'ru' ? 'Понимание Проблемы' : 'Understanding the Problem'}
                            </h2>
                        </div>
                        <div>
                            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
                                {project.challenge}
                            </p>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Solution */}
            <Section className="bg-[var(--color-bg-elevated)]">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                        <div>
                            <span className="text-[var(--color-primary)] text-sm font-medium uppercase tracking-widest">
                                {language === 'ru' ? 'Наше Решение' : 'Our Solution'}
                            </span>
                            <h2 className="mt-4 text-2xl md:text-3xl font-bold">
                                {language === 'ru' ? 'Как Мы Эту Решили' : 'How We Solved It'}
                            </h2>
                        </div>
                        <div>
                            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
                                {project.solution}
                            </p>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Outcomes */}
            <Section>
                <Container>
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <span className="text-[var(--color-primary)] text-sm font-medium uppercase tracking-widest">
                            {language === 'ru' ? 'Результаты' : 'Results'}
                        </span>
                        <h2 className="mt-4 text-2xl md:text-3xl font-bold">
                            {language === 'ru' ? 'Ключевые Показатели' : 'Key Outcomes'}
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {project.outcomes.map((outcome, index) => (
                            <div
                                key={index}
                                className="p-6 rounded-[var(--radius-lg)] bg-[var(--color-bg-card)] border border-[var(--color-border)] text-center"
                            >
                                <div className="w-10 h-10 mx-auto mb-4 rounded-full bg-[var(--color-primary-glow)] flex items-center justify-center">
                                    <svg className="w-5 h-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="text-[var(--color-text)]">{outcome}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Navigation */}
            <Section className="border-t border-[var(--color-border)]">
                <Container>
                    <div className="flex flex-col sm:flex-row justify-between gap-4">
                        {prevProject ? (
                            <Link
                                href={`/projects/${prevProject.slug}`}
                                className="group flex items-center gap-3 p-4 rounded-[var(--radius-md)] border border-[var(--color-border)] hover:border-[var(--color-primary)]/50 transition-colors"
                            >
                                <svg className="w-5 h-5 text-[var(--color-muted)] group-hover:text-[var(--color-primary)] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                                <div>
                                    <div className="text-xs text-[var(--color-muted)]">
                                        {language === 'ru' ? 'Предыдущий' : 'Previous'}
                                    </div>
                                    <div className="font-medium group-hover:text-[var(--color-primary)] transition-colors">{prevProject.title}</div>
                                </div>
                            </Link>
                        ) : <div />}

                        {nextProject && (
                            <Link
                                href={`/projects/${nextProject.slug}`}
                                className="group flex items-center gap-3 p-4 rounded-[var(--radius-md)] border border-[var(--color-border)] hover:border-[var(--color-primary)]/50 transition-colors text-right"
                            >
                                <div>
                                    <div className="text-xs text-[var(--color-muted)]">
                                        {language === 'ru' ? 'Следующий' : 'Next'}
                                    </div>
                                    <div className="font-medium group-hover:text-[var(--color-primary)] transition-colors">{nextProject.title}</div>
                                </div>
                                <svg className="w-5 h-5 text-[var(--color-muted)] group-hover:text-[var(--color-primary)] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        )}
                    </div>
                </Container>
            </Section>

            {/* CTA */}
            <Section className="bg-[var(--color-bg-elevated)]">
                <Container>
                    <div className="text-center max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold">
                            {t('contact.Badge') || (language === 'ru' ? 'Начать Проект' : 'Start Your Project')}
                        </h2>
                        <p className="mt-4 text-[var(--color-text-secondary)] text-lg">
                            {language === 'ru'
                                ? 'Готовы достичь похожих результатов? Давайте обсудим ваш проект.'
                                : 'Ready to achieve similar results? Let\'s discuss your project.'}
                        </p>
                        <div className="mt-8">
                            <Button href="/contact" size="lg" icon={<ArrowIcon />}>
                                {language === 'ru' ? 'Связаться с Нами' : 'Get in Touch'}
                            </Button>
                        </div>
                    </div>
                </Container>
            </Section>
        </>
    );
}
