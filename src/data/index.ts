
import postsEn from './en/posts.json';
import postsRu from './ru/posts.json';
import projectsEn from './en/projects.json';
import projectsRu from './ru/projects.json';
import testimonialsEn from './en/testimonials.json';
import testimonialsRu from './ru/testimonials.json';
import partners from './partners.json';
import privacyEn from './en/privacy.json';
import privacyRu from './ru/privacy.json';

export const getData = (lang: string) => {
    // Default to 'en' if lang is not recognized or is undefined
    const isRu = lang === 'ru';

    return {
        posts: isRu ? postsRu : postsEn,
        projects: isRu ? projectsRu : projectsEn,
        testimonials: isRu ? testimonialsRu : testimonialsEn,
        partners,
        privacy: isRu ? privacyRu : privacyEn
    };
};
