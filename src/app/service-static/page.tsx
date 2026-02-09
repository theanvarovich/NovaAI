'use client';

import { Container, Section } from '@/components/ui';
import { Button, ArrowIcon } from '@/components/ui/Button';
import { Accordion } from '@/components/ui/Accordion';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function ServiceStaticPage() {
    const { t } = useLanguage();

    const services = [
        {
            title: t('services_page.items.strategy.title'),
            description: t('services_page.items.strategy.description'),
            features: [
                t('services_page.items.strategy.features.0'),
                t('services_page.items.strategy.features.1'),
                t('services_page.items.strategy.features.2'),
                t('services_page.items.strategy.features.3'),
                t('services_page.items.strategy.features.4'),
            ],
        },
        {
            title: t('services_page.items.custom_model.title'),
            description: t('services_page.items.custom_model.description'),
            features: [
                t('services_page.items.custom_model.features.0'),
                t('services_page.items.custom_model.features.1'),
                t('services_page.items.custom_model.features.2'),
                t('services_page.items.custom_model.features.3'),
                t('services_page.items.custom_model.features.4'),
            ],
        },
        {
            title: t('services_page.items.mlops.title'),
            description: t('services_page.items.mlops.description'),
            features: [
                t('services_page.items.mlops.features.0'),
                t('services_page.items.mlops.features.1'),
                t('services_page.items.mlops.features.2'),
                t('services_page.items.mlops.features.3'),
                t('services_page.items.mlops.features.4'),
            ],
        },
        {
            title: t('services_page.items.audit.title'),
            description: t('services_page.items.audit.description'),
            features: [
                t('services_page.items.audit.features.0'),
                t('services_page.items.audit.features.1'),
                t('services_page.items.audit.features.2'),
                t('services_page.items.audit.features.3'),
                t('services_page.items.audit.features.4'),
            ],
        },
    ];

    const faqs = [
        {
            title: t('services_page.faq.items.0.q'),
            content: t('services_page.faq.items.0.a'),
        },
        {
            title: t('services_page.faq.items.1.q'),
            content: t('services_page.faq.items.1.a'),
        },
        {
            title: t('services_page.faq.items.2.q'),
            content: t('services_page.faq.items.2.a'),
        },
        {
            title: t('services_page.faq.items.3.q'),
            content: t('services_page.faq.items.3.a'),
        },
        {
            title: t('services_page.faq.items.4.q'),
            content: t('services_page.faq.items.4.a'),
        },
    ];

    const steps = [
        { step: '01', title: t('services_page.process.steps.discovery.title'), description: t('services_page.process.steps.discovery.desc') },
        { step: '02', title: t('services_page.process.steps.design.title'), description: t('services_page.process.steps.design.desc') },
        { step: '03', title: t('services_page.process.steps.build.title'), description: t('services_page.process.steps.build.desc') },
        { step: '04', title: t('services_page.process.steps.deploy.title'), description: t('services_page.process.steps.deploy.desc') },
    ];

    return (
        <>
            {/* Hero */}
            <section className="pt-32 pb-16">
                <Container>
                    <div className="max-w-3xl">
                        <span className="text-[var(--color-primary)] text-sm font-medium uppercase tracking-widest">
                            {t('services_page.hero.badge')}
                        </span>
                        <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold">
                            {t('services_page.hero.title')}
                        </h1>
                        <p className="mt-6 text-xl text-[var(--color-text-secondary)]">
                            {t('services_page.hero.description')}
                        </p>
                        <div className="mt-8">
                            <Button href="/contact" size="lg" icon={<ArrowIcon />}>
                                {t('services_page.hero.button')}
                            </Button>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Services */}
            <Section className="bg-[var(--color-bg-elevated)]">
                <Container>
                    <div className="grid md:grid-cols-2 gap-6">
                        {services.map((service) => (
                            <div
                                key={service.title}
                                className="p-8 rounded-[var(--radius-lg)] bg-[var(--color-bg-card)] border border-[var(--color-border)]"
                            >
                                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                                <p className="text-[var(--color-text-secondary)] mb-6">{service.description}</p>

                                <ul className="space-y-2">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm">
                                            <svg className="w-4 h-4 text-[var(--color-primary)] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Process */}
            <Section>
                <Container>
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold">{t('services_page.process.title')}</h2>
                        <p className="mt-4 text-[var(--color-text-secondary)]">
                            {t('services_page.process.description')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {steps.map((item) => (
                            <div key={item.step} className="text-center">
                                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-[var(--color-bg-card)] border border-[var(--color-border)] text-xl font-bold text-[var(--color-primary)]">
                                    {item.step}
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                <p className="text-sm text-[var(--color-text-secondary)]">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* FAQ */}
            <Section className="bg-[var(--color-bg-elevated)]">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold">{t('services_page.faq.title')}</h2>
                            <p className="mt-4 text-[var(--color-text-secondary)]">
                                {t('services_page.faq.description')}
                            </p>
                            <div className="mt-8">
                                <Button href="/contact" variant="black-outline">
                                    {t('services_page.faq.button')}
                                </Button>
                            </div>
                        </div>

                        <Accordion items={faqs} />
                    </div>
                </Container>
            </Section>

            {/* CTA */}
            <Section>
                <Container>
                    <div className="text-center max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold">{t('services_page.cta.title')}</h2>
                        <p className="mt-4 text-[var(--color-text-secondary)] text-lg">
                            {t('services_page.cta.description')}
                        </p>
                        <div className="mt-8">
                            <Button href="/contact" size="lg" icon={<ArrowIcon />}>
                                {t('services_page.cta.button')}
                            </Button>
                        </div>
                    </div>
                </Container>
            </Section>
        </>
    );
}
