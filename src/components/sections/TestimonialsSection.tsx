'use client';

import { motion } from 'framer-motion';
import { Container, Section } from '@/components/ui';
import { Slider } from '@/components/ui/Slider';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { getData } from '@/data';

export function TestimonialsSection() {
    const { t, language } = useLanguage();
    const { testimonials } = getData(language);

    return (
        <Section className="bg-[var(--color-bg-elevated)]">
            <Container>
                {/* Header */}
                <motion.div
                    className="text-center max-w-2xl mx-auto mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-[var(--color-primary)] text-sm font-medium uppercase tracking-widest">
                        {t('sections.testimonials.Badge')}
                    </span>
                    <h2 className="mt-4 text-3xl md:text-4xl font-bold">
                        {t('sections.testimonials.Title')}
                    </h2>
                </motion.div>

                {/* Slider */}
                <motion.div
                    className="max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <Slider autoPlay autoPlayInterval={6000}>
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="text-center px-4">
                                {/* Quote */}
                                <blockquote className="text-xl md:text-2xl text-[var(--color-text)] leading-relaxed mb-8">
                                    &ldquo;{testimonial.quote}&rdquo;
                                </blockquote>

                                {/* Author */}
                                <div className="flex flex-col items-center">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-purple-500 flex items-center justify-center text-white text-xl font-bold mb-4">
                                        {testimonial.name.charAt(0)}
                                    </div>
                                    <div className="text-lg font-semibold">{testimonial.name}</div>
                                    <div className="text-sm text-[var(--color-muted)]">
                                        {testimonial.role} at {testimonial.company}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </motion.div>
            </Container>
        </Section>
    );
}
