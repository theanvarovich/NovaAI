'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import NextImage from 'next/image';
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

                            {/* Image */}
                            <div className="relative aspect-[16/10] bg-[var(--color-bg-elevated)] overflow-hidden">
                                <NextImage
                                    src={project.heroImage}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
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
