'use client';

import { motion } from 'framer-motion';
import NextImage from 'next/image';
import { Container } from '@/components/ui';
import { Button, ArrowIcon } from '@/components/ui/Button';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export function HeroSection() {
    const { t } = useLanguage();

    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <NextImage
                    src="/images/hero-bg.png"
                    alt="AI Agency Hero Background"
                    fill
                    className="object-cover opacity-60"
                    quality={90}
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg)]/80 via-[var(--color-bg)]/50 to-[var(--color-bg)]" />
            </div>
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-primary)]/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

            <Container className="relative z-10">
                <div className="max-w-4xl">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-bg-elevated)] border border-[var(--color-border)] mb-8"
                    >
                        <span className="w-2 h-2 rounded-full bg-[var(--color-success)] animate-pulse" />
                        <span className="text-sm font-medium text-[var(--color-text-secondary)]">
                            {t('home.badge')}
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight mb-8"
                    >
                        {t('home.title_start')} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-purple-500">
                            {t('home.title_end')}
                        </span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl text-[var(--color-text-secondary)] max-w-2xl mb-10 leading-relaxed"
                    >
                        {t('home.description')}
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-wrap items-center gap-4"
                    >
                        <Button href="/contact" size="lg" icon={<ArrowIcon />}>
                            {t('home.cta_primary')}
                        </Button>
                        <Button href="/projects" size="lg">
                            {t('home.cta_secondary')}
                        </Button>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
