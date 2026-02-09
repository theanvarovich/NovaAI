'use client';

import { Container, Section } from '@/components/ui';
import { EmptyState, EmptyIcon } from '@/components/ui/EmptyState';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { getData } from '@/data';

export default function ProjectsPage() {
    const { language, t } = useLanguage();
    const { projects } = getData(language);

    if (projects.length === 0) {
        return (
            <Section className="pt-32">
                <Container>
                    <EmptyState
                        icon={<EmptyIcon />}
                        title={t('projects_page.empty.title')}
                        description={t('projects_page.empty.description')}
                        actionLabel={t('projects_page.empty.back')}
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
                            {t('projects_page.hero.badge')}
                        </span>
                        <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold">
                            {t('projects_page.hero.title')}
                        </h1>
                        <p className="mt-6 text-xl text-[var(--color-text-secondary)]">
                            {t('projects_page.hero.description')}
                        </p>
                    </div>
                </Container>
            </section>

            {/* Projects Grid */}
            <Section className="pt-0">
                <Container>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project) => (
                            <Link
                                key={project.slug}
                                href={`/projects/${project.slug}`}
                                className="group relative rounded-[var(--radius-lg)] overflow-hidden bg-[var(--color-bg-card)] border border-[var(--color-border)] hover:border-[var(--color-primary)]/50 transition-all duration-[var(--duration-normal)] hover:-translate-y-1 block"
                            >
                                {/* Image placeholder */}
                                <div className="relative aspect-[16/10] bg-gradient-to-br from-[var(--color-bg-elevated)] to-[var(--color-bg-card)]">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-16 h-16 rounded-full bg-[var(--color-primary-glow)] flex items-center justify-center group-hover:scale-110 transition-transform duration-[var(--duration-slow)]">
                                            <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <div className="flex items-center gap-2 text-xs text-[var(--color-muted)] mb-2">
                                        <span>{project.category}</span>
                                        <span>•</span>
                                        <span>{project.year}</span>
                                    </div>

                                    <h2 className="text-lg font-semibold mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                                        {project.title}
                                    </h2>

                                    <p className="text-sm text-[var(--color-text-secondary)] line-clamp-2">
                                        {project.summary}
                                    </p>

                                    {/* Tags */}
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {project.tags.slice(0, 2).map((tag) => (
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
