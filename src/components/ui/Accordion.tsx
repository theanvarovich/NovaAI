'use client';

import { useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AccordionItemProps {
    title: string;
    children: ReactNode;
    isOpen?: boolean;
    onToggle?: () => void;
}

export function AccordionItem({ title, children, isOpen = false, onToggle }: AccordionItemProps) {
    return (
        <div className="border-b border-[var(--color-border)]">
            <button
                onClick={onToggle}
                className="w-full flex items-center justify-between py-5 text-left"
                aria-expanded={isOpen}
            >
                <span className="text-lg font-medium pr-4">{title}</span>
                <motion.span
                    className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-[var(--color-bg-card)] border border-[var(--color-border)]"
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.24, ease: [0.33, 1, 0.68, 1] }}
                >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </motion.span>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
                        className="overflow-hidden"
                    >
                        <div className="pb-5 text-[var(--color-text-secondary)]">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

interface AccordionProps {
    items: { title: string; content: string | ReactNode }[];
    allowMultiple?: boolean;
    className?: string;
}

export function Accordion({ items, allowMultiple = false, className = '' }: AccordionProps) {
    const [openIndexes, setOpenIndexes] = useState<number[]>([]);

    const handleToggle = (index: number) => {
        if (allowMultiple) {
            setOpenIndexes((prev) =>
                prev.includes(index)
                    ? prev.filter((i) => i !== index)
                    : [...prev, index]
            );
        } else {
            setOpenIndexes((prev) =>
                prev.includes(index) ? [] : [index]
            );
        }
    };

    return (
        <div className={className}>
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.title}
                    isOpen={openIndexes.includes(index)}
                    onToggle={() => handleToggle(index)}
                >
                    {item.content}
                </AccordionItem>
            ))}
        </div>
    );
}
