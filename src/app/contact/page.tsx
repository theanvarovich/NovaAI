'use client';

import { useState } from 'react';
import { Container, Section } from '@/components/ui';
import { Button } from '@/components/ui/Button';
import { useLanguage } from '@/lib/i18n/LanguageContext';

interface FormData {
    name: string;
    email: string;
    company: string;
    budget: string;
    message: string;
    honeypot: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    company?: string;
    message?: string;
}

export default function ContactPage() {
    const { t } = useLanguage();
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        company: '',
        budget: '',
        message: '',
        honeypot: '',
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const budgetOptions = [
        { value: '', label: t('contact_page.budget_options.default') },
        { value: 'under-25k', label: t('contact_page.budget_options.under_25k') },
        { value: '25k-50k', label: t('contact_page.budget_options.25k_50k') },
        { value: '50k-100k', label: t('contact_page.budget_options.50k_100k') },
        { value: '100k-250k', label: t('contact_page.budget_options.100k_250k') },
        { value: 'over-250k', label: t('contact_page.budget_options.over_250k') },
    ];

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = `${t('contact_page.form.name')} ${t('contact_page.form.errors.required')}`;
        }

        if (!formData.email.trim()) {
            newErrors.email = `${t('contact_page.form.email')} ${t('contact_page.form.errors.required')}`;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = t('contact_page.form.errors.email_invalid');
        }

        if (!formData.company.trim()) {
            newErrors.company = `${t('contact_page.form.company')} ${t('contact_page.form.errors.required')}`;
        }

        if (!formData.message.trim()) {
            newErrors.message = `${t('contact_page.form.message')} ${t('contact_page.form.errors.required')}`;
        } else if (formData.message.trim().length < 20) {
            newErrors.message = t('contact_page.form.errors.message_short');
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Honeypot check
        if (formData.honeypot) {
            return;
        }

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        try {
            // Simulate form submission
            await new Promise((resolve) => setTimeout(resolve, 1500));
            setSubmitStatus('success');
            setFormData({
                name: '',
                email: '',
                company: '',
                budget: '',
                message: '',
                honeypot: '',
            });
        } catch {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name as keyof FormErrors]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
    };

    return (
        <>
            {/* Hero */}
            <section className="pt-32 pb-16">
                <Container>
                    <div className="max-w-3xl">
                        <span className="text-[var(--color-primary)] text-sm font-medium uppercase tracking-widest">
                            {t('contact_page.hero.badge')}
                        </span>
                        <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold">
                            {t('contact_page.hero.title')}
                        </h1>
                        <p className="mt-6 text-xl text-[var(--color-text-secondary)]">
                            {t('contact_page.hero.description')}
                        </p>
                    </div>
                </Container>
            </section>

            {/* Form */}
            <Section className="pt-0">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                        {/* Form */}
                        <div>
                            {submitStatus === 'success' ? (
                                <div className="p-8 rounded-[var(--radius-lg)] bg-[var(--color-success)]/10 border border-[var(--color-success)]/20 text-center">
                                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--color-success)]/20 flex items-center justify-center">
                                        <svg className="w-8 h-8 text-[var(--color-success)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">{t('contact_page.form.success_title')}</h3>
                                    <p className="text-[var(--color-text-secondary)]">
                                        {t('contact_page.form.success_desc')}
                                    </p>
                                    <button
                                        onClick={() => setSubmitStatus('idle')}
                                        className="mt-4 text-[var(--color-primary)] hover:underline"
                                    >
                                        {t('contact_page.form.send_another')}
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Honeypot */}
                                    <input
                                        type="text"
                                        name="honeypot"
                                        value={formData.honeypot}
                                        onChange={handleChange}
                                        className="hidden"
                                        tabIndex={-1}
                                        autoComplete="off"
                                    />

                                    {/* Name */}
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                                            {t('contact_page.form.name')} <span className="text-[var(--color-error)]">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 rounded-[var(--radius-md)] bg-[var(--color-bg-card)] border ${errors.name ? 'border-[var(--color-error)]' : 'border-[var(--color-border)]'
                                                } text-[var(--color-text)] placeholder-[var(--color-muted)] focus:outline-none focus:border-[var(--color-primary)] transition-colors`}
                                            placeholder={t('contact_page.form.placeholders.name')}
                                        />
                                        {errors.name && (
                                            <p className="mt-1 text-sm text-[var(--color-error)]">{errors.name}</p>
                                        )}
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                                            {t('contact_page.form.email')} <span className="text-[var(--color-error)]">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 rounded-[var(--radius-md)] bg-[var(--color-bg-card)] border ${errors.email ? 'border-[var(--color-error)]' : 'border-[var(--color-border)]'
                                                } text-[var(--color-text)] placeholder-[var(--color-muted)] focus:outline-none focus:border-[var(--color-primary)] transition-colors`}
                                            placeholder={t('contact_page.form.placeholders.email')}
                                        />
                                        {errors.email && (
                                            <p className="mt-1 text-sm text-[var(--color-error)]">{errors.email}</p>
                                        )}
                                    </div>

                                    {/* Company */}
                                    <div>
                                        <label htmlFor="company" className="block text-sm font-medium mb-2">
                                            {t('contact_page.form.company')} <span className="text-[var(--color-error)]">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 rounded-[var(--radius-md)] bg-[var(--color-bg-card)] border ${errors.company ? 'border-[var(--color-error)]' : 'border-[var(--color-border)]'
                                                } text-[var(--color-text)] placeholder-[var(--color-muted)] focus:outline-none focus:border-[var(--color-primary)] transition-colors`}
                                            placeholder={t('contact_page.form.placeholders.company')}
                                        />
                                        {errors.company && (
                                            <p className="mt-1 text-sm text-[var(--color-error)]">{errors.company}</p>
                                        )}
                                    </div>

                                    {/* Budget */}
                                    <div>
                                        <label htmlFor="budget" className="block text-sm font-medium mb-2">
                                            {t('contact_page.form.budget')}
                                        </label>
                                        <select
                                            id="budget"
                                            name="budget"
                                            value={formData.budget}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-[var(--radius-md)] bg-[var(--color-bg-card)] border border-[var(--color-border)] text-[var(--color-text)] focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                                        >
                                            {budgetOptions.map((option) => (
                                                <option key={option.value} value={option.value}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                                            {t('contact_page.form.message')} <span className="text-[var(--color-error)]">*</span>
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={5}
                                            className={`w-full px-4 py-3 rounded-[var(--radius-md)] bg-[var(--color-bg-card)] border ${errors.message ? 'border-[var(--color-error)]' : 'border-[var(--color-border)]'
                                                } text-[var(--color-text)] placeholder-[var(--color-muted)] focus:outline-none focus:border-[var(--color-primary)] transition-colors resize-none`}
                                            placeholder={t('contact_page.form.placeholders.message')}
                                        />
                                        {errors.message && (
                                            <p className="mt-1 text-sm text-[var(--color-error)]">{errors.message}</p>
                                        )}
                                    </div>

                                    {submitStatus === 'error' && (
                                        <div className="p-4 rounded-[var(--radius-md)] bg-[var(--color-error)]/10 border border-[var(--color-error)]/20 text-[var(--color-error)]">
                                            Something went wrong. Please try again.
                                        </div>
                                    )}

                                    <Button type="submit" size="lg" disabled={isSubmitting} className="w-full justify-center">
                                        {isSubmitting ? t('contact_page.form.sending') : t('contact_page.form.send')}
                                    </Button>
                                </form>
                            )}
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-lg font-semibold mb-2">{t('contact_page.info.email')}</h3>
                                <a
                                    href="mailto:hello@novaai.com"
                                    className="text-[var(--color-primary)] hover:underline"
                                >
                                    hello@novaai.com
                                </a>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold mb-2">{t('contact_page.info.office')}</h3>
                                <p className="text-[var(--color-text-secondary)]">
                                    123 Innovation Drive<br />
                                    San Francisco, CA 94107<br />
                                    United States
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold mb-2">{t('contact_page.info.social')}</h3>
                                <div className="flex gap-4">
                                    <a
                                        href="https://twitter.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors"
                                    >
                                        Twitter
                                    </a>
                                    <a
                                        href="https://linkedin.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors"
                                    >
                                        LinkedIn
                                    </a>
                                    <a
                                        href="https://github.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors"
                                    >
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>
        </>
    );
}
