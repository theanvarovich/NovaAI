'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const { language, setLanguage, t } = useLanguage();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    // Navigation Links
    const navLinks = [
        { href: '/about', label: t('nav.about') },
        { href: '/service-static', label: t('nav.services') },
        { href: '/projects', label: t('nav.projects') },
        { href: '/blog', label: t('nav.blog') },
        { href: '/contact', label: t('nav.contact') },
    ];

    const languages = [
        { code: 'en', label: 'ENG' },
        { code: 'ru', label: 'RUS' },
    ];

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-[var(--color-bg)]/80 backdrop-blur-md border-b border-[var(--color-border)] py-4'
                    : 'bg-transparent py-6'
                    }`}
            >
                <div className="container mx-auto px-6 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group" aria-label="NovaAI Home">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--color-primary)] to-purple-600 flex items-center justify-center text-white font-bold text-lg">
                            N
                        </div>
                        <span className="text-xl font-bold tracking-tight">
                            Nova<span className="text-[var(--color-primary)]">AI</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`relative text-sm font-medium transition-colors hover:text-[var(--color-primary)] py-2 group ${pathname === link.href ? 'text-[var(--color-primary)]' : 'text-[var(--color-text-secondary)]'
                                    }`}
                            >
                                {link.label}
                                {pathname === link.href && (
                                    <motion.span
                                        layoutId="underline"
                                        className="absolute left-0 bottom-0 block h-0.5 w-full bg-[var(--color-primary)]"
                                    />
                                )}
                            </Link>
                        ))}
                    </nav>

                    {/* Language & CTA */}
                    <div className="hidden md:flex items-center gap-4">
                        {/* Language Switcher */}
                        <div className="flex items-center gap-2 text-xs font-medium text-[var(--color-muted)] border-r border-[var(--color-border)] pr-4 mr-2">
                            {languages.map((lang) => (
                                <button
                                    key={lang.code}
                                    onClick={() => setLanguage(lang.code as any)}
                                    className={`cursor-pointer hover:text-[var(--color-primary)] transition-colors ${language === lang.code ? 'text-[var(--color-primary)] font-bold' : ''
                                        }`}
                                >
                                    {lang.label}
                                </button>
                            ))}
                        </div>

                        <Button href="/contact" size="sm">
                            {t('contact.Badge') || "Start Project"}
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-[var(--color-text)]"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                        aria-expanded={isMobileMenuOpen}
                    >
                        <div className="w-6 h-5 relative flex flex-col justify-between">
                            <span
                                className={`w-full h-0.5 bg-current transition-transform duration-300 origin-left ${isMobileMenuOpen ? 'rotate-45 translate-x-px' : ''
                                    }`}
                            />
                            <span
                                className={`w-full h-0.5 bg-current transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                                    }`}
                            />
                            <span
                                className={`w-full h-0.5 bg-current transition-transform duration-300 origin-left ${isMobileMenuOpen ? '-rotate-45 translate-x-px' : ''
                                    }`}
                            />
                        </div>
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 bg-[var(--color-bg)] pt-24 px-6 md:hidden overflow-y-auto"
                    >
                        <nav className="flex flex-col gap-6">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        className={`text-2xl font-medium ${pathname === link.href ? 'text-[var(--color-primary)]' : 'text-[var(--color-text)]'
                                            }`}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}

                            <div className="h-px bg-[var(--color-border)] my-2" />

                            <div className="flex gap-4 mb-4">
                                {languages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        onClick={() => {
                                            setLanguage(lang.code as any);
                                            setIsMobileMenuOpen(false);
                                        }}
                                        className={`px-4 py-2 rounded border transition-colors ${language === lang.code
                                            ? 'bg-[var(--color-primary)] text-white border-transparent'
                                            : 'border-[var(--color-border)] text-[var(--color-text)]'
                                            }`}
                                    >
                                        {lang.label}
                                    </button>
                                ))}
                            </div>

                            <Button href="/contact" size="lg" className="w-full justify-center">
                                {t('contact.Badge') || "Start Project"}
                            </Button>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
