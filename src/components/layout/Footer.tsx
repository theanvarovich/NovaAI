'use client';

import Link from 'next/link';
import { Container } from '@/components/ui';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg-elevated)] py-16">
            <Container>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2 group" aria-label="NovaAI Home">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--color-primary)] to-purple-600 flex items-center justify-center text-white font-bold text-lg">
                                N
                            </div>
                            <span className="text-xl font-bold tracking-tight">
                                Nova<span className="text-[var(--color-primary)]">AI</span>
                            </span>
                        </Link>
                        <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                            {t('footer.description')}
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-semibold mb-6">{t('footer.links')}</h4>
                        <ul className="space-y-4 text-sm text-[var(--color-text-secondary)]">
                            <li><Link href="/about" className="hover:text-[var(--color-primary)] transition-colors">{t('nav.about')}</Link></li>
                            <li><Link href="/service-static" className="hover:text-[var(--color-primary)] transition-colors">{t('nav.services')}</Link></li>
                            <li><Link href="/projects" className="hover:text-[var(--color-primary)] transition-colors">{t('nav.projects')}</Link></li>
                            <li><Link href="/blog" className="hover:text-[var(--color-primary)] transition-colors">{t('nav.blog')}</Link></li>
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h4 className="font-semibold mb-6">{t('footer.social')}</h4>
                        <ul className="space-y-4 text-sm text-[var(--color-text-secondary)]">
                            <li><a href="#" className="hover:text-[var(--color-primary)] transition-colors">LinkedIn</a></li>
                            <li><a href="#" className="hover:text-[var(--color-primary)] transition-colors">Twitter (X)</a></li>
                            <li><a href="#" className="hover:text-[var(--color-primary)] transition-colors">GitHub</a></li>
                            <li><a href="#" className="hover:text-[var(--color-primary)] transition-colors">Instagram</a></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="font-semibold mb-6">{t('footer.legal')}</h4>
                        <ul className="space-y-4 text-sm text-[var(--color-text-secondary)]">
                            <li><Link href="/privacy-policy" className="hover:text-[var(--color-primary)] transition-colors">{t('footer.privacy')}</Link></li>
                            <li><Link href="/terms" className="hover:text-[var(--color-primary)] transition-colors">{t('footer.terms')}</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-[var(--color-border)] text-center text-sm text-[var(--color-muted)]">
                    &copy; {new Date().getFullYear()} NovaAI. {t('footer.copyright')}
                </div>
            </Container>
        </footer>
    );
}
