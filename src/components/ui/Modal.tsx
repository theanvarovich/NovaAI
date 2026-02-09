'use client';

import { ReactNode, useCallback, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    className?: string;
}

export function Modal({ isOpen, onClose, children, className = '' }: ModalProps) {
    // Handle ESC key
    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            onClose();
        }
    }, [onClose]);

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, [isOpen, handleKeyDown]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {/* Backdrop */}
                    <motion.div
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        onClick={onClose}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />

                    {/* Content */}
                    <motion.div
                        className={`relative z-10 w-full max-w-4xl ${className}`}
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute -top-12 right-0 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                            aria-label="Close modal"
                        >
                            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {children}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

interface VideoModalProps {
    isOpen: boolean;
    onClose: () => void;
    videoUrl: string;
    posterUrl?: string;
}

export function VideoModal({ isOpen, onClose, videoUrl, posterUrl }: VideoModalProps) {
    const [hasError, setHasError] = useState(false);

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="relative aspect-video rounded-xl overflow-hidden bg-[var(--color-bg-card)]">
                {hasError ? (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                            <p className="text-[var(--color-muted)] mb-2">Unable to load video</p>
                            {posterUrl && (
                                <img
                                    src={posterUrl}
                                    alt="Video poster"
                                    className="max-w-full rounded-lg"
                                />
                            )}
                        </div>
                    </div>
                ) : (
                    <video
                        src={videoUrl}
                        poster={posterUrl}
                        controls
                        autoPlay
                        className="w-full h-full object-cover"
                        onError={() => setHasError(true)}
                    >
                        Your browser does not support the video tag.
                    </video>
                )}
            </div>
        </Modal>
    );
}
