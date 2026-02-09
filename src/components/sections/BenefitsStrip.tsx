'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export function BenefitsStrip() {
    const { t } = useLanguage();

    const benefits = [
        t('sections.benefits.security'),
        t('sections.benefits.scale'),
        t('sections.benefits.deploy'),
        t('sections.benefits.support'),
        t('sections.benefits.custom'),
        t('sections.benefits.roi')
    ];

    return (
        <div className="py-8 border-y border-[var(--color-border)] bg-[var(--color-bg-elevated)] overflow-hidden">
            <Container>
                <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center gap-2 group"
                        >
                            <svg className="w-5 h-5 text-[var(--color-primary)] opacity-50 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm font-medium text-[var(--color-text-secondary)] whitespace-nowrap">
                                {benefit}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </div>
    );
}
