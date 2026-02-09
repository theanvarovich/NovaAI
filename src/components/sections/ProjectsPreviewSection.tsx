'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Container, Section } from '@/components/ui';
import { Button, ArrowIcon } from '@/components/ui/Button';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { getData } from '@/data';

export function ProjectsPreviewSection() {
    const { t, language } = useLanguage();
    const { projects } = getData(language);
    const featuredProjects = projects.slice(0, 4);

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
                            {t('sections.projects_preview.Badge')}
                        </span>
                        <h2 className="mt-4 text-3xl md:text-4xl font-bold">
                            {t('sections.projects_preview.Title')}
                        </h2>
                    </div>
                    <Button href="/projects" variant="black-outline" icon={<ArrowIcon />}>
                        {t('sections.projects_preview.Button')}
                    </Button>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {featuredProjects.map((project, index) => (
                        <motion.div
                            key={project.slug}
                            className="group relative rounded-[var(--radius-lg)] overflow-hidden bg-[var(--color-bg-card)] border border-[var(--color-border)] hover:border-[var(--color-primary)]/50 transition-all duration-[var(--duration-normal)]"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -6 }}
                        >
                            <Link href={`/projects/${project.slug}`} className="absolute inset-0 z-10" aria-label={`View ${project.title} project`} />

                            {/* Image placeholder */}
                            <div className="relative aspect-[16/10] bg-gradient-to-br from-[var(--color-bg-elevated)] to-[var(--color-bg-card)] overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-16 h-16 rounded-full bg-[var(--color-primary-glow)] flex items-center justify-center group-hover:scale-110 transition-transform duration-[var(--duration-slow)]">
                                        <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-card)] via-transparent to-transparent opacity-60" />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="flex items-center gap-2 text-xs text-[var(--color-muted)] mb-2">
                                    <span>{project.category}</span>
                                    <span>•</span>
                                    <span>{project.year}</span>
                                </div>

                                <h3 className="text-lg font-semibold mb-2 group-hover:text-[var(--color-primary)] transition-colors duration-[var(--duration-normal)]">
                                    {project.title}
                                </h3>

                                <p className="text-sm text-[var(--color-text-secondary)] line-clamp-2">
                                    {project.summary}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
