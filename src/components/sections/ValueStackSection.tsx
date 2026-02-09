'use client';

import { motion } from 'framer-motion';
import { Container, Section } from '@/components/ui';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export function ValueStackSection() {
    const { t } = useLanguage();

    const values = [
        t('sections.value_stack.Items.team'),
        t('sections.value_stack.Items.track_record'),
        t('sections.value_stack.Items.end_to_end'),
        t('sections.value_stack.Items.security'),
        t('sections.value_stack.Items.support'),
        t('sections.value_stack.Items.pricing'),
        t('sections.value_stack.Items.innovation'),
        t('sections.value_stack.Items.custom'),
    ];

    return (
        <Section className="bg-[var(--color-bg-elevated)]">
            <Container>
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Sticky heading */}
                    <motion.div
                        className="lg:sticky lg:top-32 lg:self-start"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-[var(--color-primary)] text-sm font-medium uppercase tracking-widest">
                            {t('sections.value_stack.Badge')}
                        </span>
                        <h2 className="mt-4 text-3xl md:text-4xl font-bold">
                            {t('sections.value_stack.Title')}
                        </h2>
                        <p className="mt-4 text-[var(--color-text-secondary)] text-lg">
                            {t('sections.value_stack.Description')}
                        </p>
                    </motion.div>

                    {/* Scrolling list */}
                    <div className="space-y-4">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                className="flex items-start gap-4 p-5 rounded-[var(--radius-md)] bg-[var(--color-bg-card)] border border-[var(--color-border)] hover:border-[var(--color-primary)]/30 transition-colors duration-[var(--duration-normal)]"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                            >
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--color-primary-glow)] flex items-center justify-center">
                                    <svg className="w-4 h-4 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="text-[var(--color-text)]">{value}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    );
}
