'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowIcon } from './Button';

type CardVariant = 'service' | 'project' | 'blog';

interface BaseCardProps {
    className?: string;
}

interface ServiceCardProps extends BaseCardProps {
    variant: 'service';
    title: string;
    description: string;
    icon: ReactNode;
    href: string;
}

interface ProjectCardProps extends BaseCardProps {
    variant: 'project';
    title: string;
    category: string;
    year: string;
    image: string;
    href: string;
}

interface BlogCardProps extends BaseCardProps {
    variant: 'blog';
    title: string;
    excerpt: string;
    date: string;
    author: string;
    image: string;
    href: string;
}

type CardProps = ServiceCardProps | ProjectCardProps | BlogCardProps;

export function Card(props: CardProps) {
    const { variant, className = '' } = props;

    if (variant === 'service') {
        return <ServiceCard {...props} className={className} />;
    }

    if (variant === 'project') {
        return <ProjectCard {...props} className={className} />;
    }

    return <BlogCard {...props} className={className} />;
}

function ServiceCard({ title, description, icon, href, className }: ServiceCardProps) {
    return (
        <motion.div
            className={`group relative p-6 md:p-8 rounded-[var(--radius-lg)] bg-[var(--color-bg-card)] border border-[var(--color-border)] ${className}`}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.24, ease: [0.33, 1, 0.68, 1] }}
        >
            <Link href={href} className="absolute inset-0 z-10" aria-label={`Learn more about ${title}`} />

            <div className="flex flex-col h-full">
                <div className="w-12 h-12 mb-6 flex items-center justify-center rounded-xl bg-[var(--color-primary-glow)] text-[var(--color-primary)]">
                    {icon}
                </div>

                <h3 className="text-xl font-semibold mb-3 group-hover:text-[var(--color-primary)] transition-colors duration-[var(--duration-normal)]">
                    {title}
                </h3>

                <p className="text-[var(--color-text-secondary)] text-sm mb-6 flex-grow">
                    {description}
                </p>

                <div className="flex items-center gap-2 text-[var(--color-primary)] text-sm font-medium">
                    <span>Learn more</span>
                    <motion.span
                        className="inline-flex"
                        initial={{ x: 0 }}
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                    >
                        <ArrowIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.span>
                </div>
            </div>

            {/* Hover glow effect */}
            <div className="absolute inset-0 rounded-[var(--radius-lg)] opacity-0 group-hover:opacity-100 transition-opacity duration-[var(--duration-slow)] pointer-events-none bg-gradient-to-br from-[var(--color-primary-glow)] to-transparent" />
        </motion.div>
    );
}

function ProjectCard({ title, category, year, image, href, className }: ProjectCardProps) {
    return (
        <motion.div
            className={`group relative rounded-[var(--radius-lg)] overflow-hidden bg-[var(--color-bg-card)] border border-[var(--color-border)] ${className}`}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.24, ease: [0.33, 1, 0.68, 1] }}
        >
            <Link href={href} className="absolute inset-0 z-10" aria-label={`View ${title} project`} />

            {/* Image container */}
            <div className="relative aspect-[16/10] overflow-hidden">
                <motion.div
                    className="absolute inset-0"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
                >
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </motion.div>

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-card)] via-transparent to-transparent opacity-60" />
            </div>

            {/* Content */}
            <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-[var(--color-muted)] mb-2">
                    <span>{category}</span>
                    <span>•</span>
                    <span>{year}</span>
                </div>

                <h3 className="text-lg font-semibold group-hover:text-[var(--color-primary)] transition-colors duration-[var(--duration-normal)]">
                    {title}
                </h3>
            </div>

            {/* Hover border highlight */}
            <div className="absolute inset-0 rounded-[var(--radius-lg)] border border-[var(--color-primary)] opacity-0 group-hover:opacity-100 transition-opacity duration-[var(--duration-normal)] pointer-events-none" />
        </motion.div>
    );
}

function BlogCard({ title, excerpt, date, author, image, href, className }: BlogCardProps) {
    return (
        <motion.article
            className={`group relative rounded-[var(--radius-lg)] overflow-hidden bg-[var(--color-bg-card)] border border-[var(--color-border)] ${className}`}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.24, ease: [0.33, 1, 0.68, 1] }}
        >
            <Link href={href} className="absolute inset-0 z-10" aria-label={`Read ${title}`} />

            {/* Image */}
            <div className="relative aspect-[16/9] overflow-hidden">
                <motion.div
                    className="absolute inset-0"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
                >
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </motion.div>
            </div>

            {/* Content */}
            <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-[var(--color-muted)] mb-3">
                    <span>{date}</span>
                    <span>•</span>
                    <span>{author}</span>
                </div>

                <h3 className="text-lg font-semibold mb-2 group-hover:text-[var(--color-primary)] transition-colors duration-[var(--duration-normal)] line-clamp-2">
                    {title}
                </h3>

                <p className="text-sm text-[var(--color-text-secondary)] line-clamp-2">
                    {excerpt}
                </p>
            </div>

            {/* Hover border highlight */}
            <div className="absolute inset-0 rounded-[var(--radius-lg)] border border-[var(--color-primary)] opacity-0 group-hover:opacity-100 transition-opacity duration-[var(--duration-normal)] pointer-events-none" />
        </motion.article>
    );
}
