import { withBase } from '../utils/path';
export const siteConfig = {
  name: "Nicolas NOSAL",
  title: "CDO/CTO",
  description: "Un test avec Astro, Svelte, React & MDX",
  navLinks: [
    { label: "Accueil", href: withBase('') },
    { label: "Articles", href: withBase('posts') },
    { label: "À propos", href: withBase('about') },
    { label: "Contact", href: withBase('contact') },
  ],
  social: {
    github: "https://github.com/nnosal",
    twitter: "",
    linkedin: "",
  },
};
