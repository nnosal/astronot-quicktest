import { withBase } from '../utils/path';
export const siteConfig = {
  name: "Nicolas NOSAL",
  title: "CDO/CTO @WebService'Est",
  description: "Un test avec Astro, Svelte, React & MDX",
  navLinks: [
    { label: "Accueil", href: withBase('') },
    { label: "Articles", href: withBase('blog') },
    //{ label: "À propos", href: withBase('about') },
    //{ label: "Contact", href: withBase('contact') },
    { label: "Github/nnosal", href: 'https://github.com/nnosal' }
  ],
  social: [
    { label: 'GitHub', href: 'https://github.com/nnosal', icon: 'github' }
    /*{ label: 'LinkedIn', href: 'https://linkedin.com/in/x', icon: 'linkedin' },
    { label: 'Twitter', href: 'https://twitter.com/x', icon: 'twitter' },
    { label: 'Discord', href: 'https://discord.gg/x', icon: 'discord' },
    { label: 'Facebook', href: 'https://facebook.com/x', icon: 'facebook' },*/
  ]
};
