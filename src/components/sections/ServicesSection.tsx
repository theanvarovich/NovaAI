'use client';

import { motion } from 'framer-motion';
import { Container, Section } from '@/components/ui';
import { ArrowIcon } from '@/components/ui/Button';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import Link from 'next/link';

export function ServicesSection() {
    const { t } = useLanguage();

    const services = [
        {
            id: 'consulting',
            title: t('sections.services.Items.consulting.Title'),
            description: t('sections.services.Items.consulting.Description'),
        },
        {
            id: 'generation',
            title: t('sections.services.Items.generation.Title'),
            description: t('sections.services.Items.generation.Description'),
        },
        {
            id: 'voice',
            title: t('sections.services.Items.voice.Title'),
            description: t('sections.services.Items.voice.Description'),
        },
        {
            id: 'ml',
            title: t('sections.services.Items.ml.Title'),
            description: t('sections.services.Items.ml.Description'),
        },
    ];

    return (
        <Section className="bg-[var(--color-bg-elevated)]">
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-[var(--color-primary)] text-sm font-medium uppercase tracking-widest">
                        {t('sections.services.Badge')}
                    </span>
                    <h2 className="mt-4 text-3xl md:text-5xl font-bold leading-tight">
                        {t('sections.services.Title')}
                    </h2>
                    <p className="mt-6 text-[var(--color-text-secondary)]">
                        {t('sections.services.Description')}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group p-8 rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border)] hover:border-[var(--color-primary)]/50 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="relative z-10">
                                <div className="w-12 h-12 mb-6 rounded-lg bg-[var(--color-bg-elevated)] flex items-center justify-center text-[var(--color-primary)]">
                                    <span className="text-xl font-bold">{index + 1 < 10 ? `0${index + 1}` : index + 1}</span>
                                </div>

                                <h3 className="text-xl font-bold mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                                    {service.title}
                                </h3>

                                <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
                                    {service.description}
                                </p>

                                <Link
                                    href="/service-static"
                                    className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] group/link"
                                >
                                    {t('sections.services.Items.learnMore')}
                                    <ArrowIcon className="transition-transform group-hover/link:translate-x-1" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
