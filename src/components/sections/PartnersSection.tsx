'use client';

import { motion } from 'framer-motion';
import { Container, Section } from '@/components/ui';
import partners from '@/data/partners.json';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export function PartnersSection() {
    const { t } = useLanguage();

    return (
        <Section className="py-16 bg-[var(--color-bg-elevated)]">
            <Container>
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-[var(--color-muted)] text-sm uppercase tracking-widest">
                        {t('sections.partners.Title')}
                    </span>
                </motion.div>

                <motion.div
                    className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {partners.map((partner, index) => (
                        <motion.div
                            key={partner.name}
                            className="flex items-center justify-center p-4 rounded-lg bg-[var(--color-bg-card)] border border-[var(--color-border)] hover:border-[var(--color-primary)]/30 transition-all duration-[var(--duration-normal)] group"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.03 }}
                            whileHover={{ y: -2 }}
                        >
                            <span className="text-xs font-semibold text-[var(--color-muted)] group-hover:text-[var(--color-text)] transition-colors text-center">
                                {partner.name}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </Container>
        </Section>
    );
}
