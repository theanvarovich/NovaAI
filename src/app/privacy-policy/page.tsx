'use client';

import { Container, Section } from '@/components/ui';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { getData } from '@/data';

export default function PrivacyPolicyPage() {
    const { language } = useLanguage();
    const { privacy } = getData(language);

    return (
        <>
            {/* Hero */}
            <section className="pt-32 pb-16">
                <Container>
                    <div className="max-w-3xl">
                        <span className="text-[var(--color-primary)] text-sm font-medium uppercase tracking-widest">
                            Legal
                        </span>
                        <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold">
                            {privacy.title}
                        </h1>
                        <p className="mt-6 text-[var(--color-text-secondary)]">
                            {privacy.lastUpdated}
                        </p>
                    </div>
                </Container>
            </section>

            {/* Content */}
            <Section className="pt-0">
                <Container>
                    <div className="max-w-3xl prose prose-invert prose-headings:font-bold prose-headings:tracking-tight prose-p:text-[var(--color-text-secondary)] prose-li:text-[var(--color-text-secondary)] prose-strong:text-[var(--color-text)]">
                        {privacy.sections.map((section: any, index: number) => (
                            <div key={index} className="mb-8">
                                <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                                {section.content && <p className="mb-4 whitespace-pre-line">{section.content}</p>}

                                {section.list && (
                                    <ul className="list-disc pl-6 mb-4 space-y-2">
                                        {section.list.map((item: string, i: number) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                )}

                                {section.subsections && section.subsections.map((sub: any, subIndex: number) => (
                                    <div key={subIndex} className="mt-6 mb-4">
                                        <h3 className="text-xl font-bold mb-2">{sub.title}</h3>
                                        <p className="mb-2">{sub.content}</p>
                                        {sub.list && (
                                            <ul className="list-disc pl-6 mb-2 space-y-1">
                                                {sub.list.map((item: string, i: number) => (
                                                    <li key={i}>{item}</li>
                                                ))}
                                            </ul>
                                        )}
                                        {sub.footer && <p className="mt-2 text-sm italic">{sub.footer}</p>}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>
        </>
    );
}
