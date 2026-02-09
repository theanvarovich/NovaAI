'use client';

import { motion } from 'framer-motion';
import { Container, Section } from '@/components/ui';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export function HowItWorksSection() {
    const { t } = useLanguage();

    const steps = [
        {
            number: '01',
            title: t('sections.how_it_works.Steps.consultation.Title'),
            description: t('sections.how_it_works.Steps.consultation.Description'),
        },
        {
            number: '02',
            title: t('sections.how_it_works.Steps.development.Title'),
            description: t('sections.how_it_works.Steps.development.Description'),
        },
        {
            number: '03',
            title: t('sections.how_it_works.Steps.optimization.Title'),
            description: t('sections.how_it_works.Steps.optimization.Description'),
        },
    ];

    return (
        <Section>
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-[var(--color-primary)] text-sm font-medium uppercase tracking-widest">
                        {t('sections.how_it_works.Badge')}
                    </span>
                    <h2 className="mt-4 text-3xl md:text-5xl font-bold leading-tight">
                        {t('sections.how_it_works.Title')}
                    </h2>
                    <p className="mt-6 text-[var(--color-text-secondary)]">
                        {t('sections.how_it_works.Description')}
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-[60px] left-0 right-0 h-0.5 bg-[var(--color-border)]" />

                    <div className="grid lg:grid-cols-3 gap-12">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="relative bg-[var(--color-bg)]" // Mask line behind content
                            >
                                <div className="w-20 h-20 mx-auto rounded-full bg-[var(--color-bg-card)] border-4 border-[var(--color-bg)] shadow-[0_0_0_1px_var(--color-border)] flex items-center justify-center text-xl font-bold text-[var(--color-primary)] mb-8 relative z-10">
                                    {step.number}
                                </div>

                                <h3 className="text-xl font-bold text-center mb-4">
                                    {step.title}
                                </h3>

                                <p className="text-[var(--color-text-secondary)] text-center leading-relaxed">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    );
}
