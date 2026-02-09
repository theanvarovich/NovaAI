'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Container, Section } from '@/components/ui';
import { Button, ArrowIcon } from '@/components/ui/Button';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export function WhoWeAreSection() {
    const { t } = useLanguage();

    const stats = [
        { label: t('sections.who_we_are.Stats.experience'), value: 12, suffix: '+' },
        { label: t('sections.who_we_are.Stats.apiCalls'), value: 50, suffix: 'M+' },
    ];

    return (
        <Section>
            <Container>
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-[var(--color-primary)] text-sm font-medium uppercase tracking-widest">
                            {t('sections.who_we_are.Badge')}
                        </span>
                        <h2 className="mt-4 text-3xl md:text-5xl font-bold leading-tight">
                            {t('sections.who_we_are.Title')}
                        </h2>
                        <p className="mt-6 text-[var(--color-text-secondary)] text-lg leading-relaxed">
                            {t('sections.who_we_are.Description1')}
                        </p>
                        <p className="mt-4 text-[var(--color-text-secondary)] leading-relaxed">
                            {t('sections.who_we_are.Description2')}
                        </p>

                        <div className="mt-8">
                            <Button href="/about"  icon={<ArrowIcon />}>
                                {t('sections.who_we_are.CTA')}
                            </Button>
                        </div>
                    </motion.div>

                    {/* Stats/Visuals */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/20 to-purple-500/20 blur-[60px] rounded-full" />
                        <div className="relative grid grid-cols-2 gap-4">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 + 0.3 }}
                                    className="p-8 rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border)] backdrop-blur-sm"
                                >
                                    <div className="text-4xl font-bold text-[var(--color-primary)] mb-2">
                                        {stat.value}{stat.suffix}
                                    </div>
                                    <div className="text-sm text-[var(--color-text-secondary)]">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
