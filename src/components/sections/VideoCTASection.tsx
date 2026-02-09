'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Container, Section } from '@/components/ui';
import { VideoModal } from '@/components/ui/Modal';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export function VideoCTASection() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { t } = useLanguage();

    return (
        <Section>
            <Container>
                <motion.div
                    className="relative rounded-[var(--radius-lg)] overflow-hidden bg-gradient-to-br from-[var(--color-bg-card)] to-[var(--color-bg-elevated)] border border-[var(--color-border)]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="grid lg:grid-cols-2 gap-8 p-8 md:p-12 lg:p-16">
                        {/* Content */}
                        <div className="flex flex-col justify-center">
                            <span className="text-[var(--color-primary)] text-sm font-medium uppercase tracking-widest">
                                {t('sections.video_cta.Badge')}
                            </span>
                            <h2 className="mt-4 text-3xl md:text-4xl font-bold">
                                {t('sections.video_cta.Title')}
                            </h2>
                            <p className="mt-4 text-[var(--color-text-secondary)] text-lg">
                                {t('sections.video_cta.Description')}
                            </p>
                        </div>

                        {/* Video Preview */}
                        <div className="relative">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="group relative w-full aspect-video rounded-[var(--radius-md)] overflow-hidden bg-[var(--color-bg)] border border-[var(--color-border)] cursor-pointer"
                                aria-label="Play video"
                            >
                                {/* Placeholder */}
                                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[var(--color-primary)]/10 to-purple-500/10">
                                    {/* Play button */}
                                    <motion.div
                                        className="w-20 h-20 rounded-full bg-[var(--color-primary)] flex items-center justify-center shadow-lg"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </motion.div>
                                </div>

                                {/* Decorative elements */}
                                <div className="absolute top-4 left-4 flex items-center gap-2">
                                    <span className="w-3 h-3 rounded-full bg-red-500" />
                                    <span className="w-3 h-3 rounded-full bg-yellow-500" />
                                    <span className="w-3 h-3 rounded-full bg-green-500" />
                                </div>

                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-[var(--color-primary)]/0 group-hover:bg-[var(--color-primary)]/10 transition-colors duration-[var(--duration-normal)]" />
                            </button>
                        </div>
                    </div>

                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
                        <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
                            <circle cx="200" cy="200" r="150" stroke="currentColor" strokeWidth="0.5" />
                            <circle cx="200" cy="200" r="200" stroke="currentColor" strokeWidth="0.5" />
                            <circle cx="200" cy="200" r="100" stroke="currentColor" strokeWidth="0.5" />
                        </svg>
                    </div>
                </motion.div>
            </Container>

            <VideoModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                videoUrl="https://example.com/demo-video.mp4"
                posterUrl="/images/video-poster.jpg"
            />
        </Section>
    );
}
