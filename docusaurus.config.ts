import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Institut Supérieur International de Guinée',
  tagline: 'Former l\'excellence pour un monde sans frontières',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  // url: 'https://isig-guinee.com', // (même si pas encore en ligne)
  // // Set the /<baseUrl>/ pathname under which your site is served
  // // For GitHub pages deployment, it is often '/<projectName>/'
  // baseUrl: '/',
  url: 'https://pabiosoft.github.io',
  baseUrl: '/isig-portal/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Pabiosoft', // Usually your GitHub org/user name.
  projectName: 'isig-portal', // Usually your repo name.
  deploymentBranch: 'gh-pages',      // branche où sera généré le site
  trailingSlash: false,
// If you deploy your site to a GitHub Pages site, you may want to set
// trailingSlash: true, to remove trailing slashes from your routes.
// Default is false, which means you may see trailing slashes in your URL.
// For more details, see: https://docusaurus.io/docs/deployment#github-pages
// If you deploy your site to a GitHub Pages site, you may want to set


  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    localeConfigs: {
      fr: {
        label: 'Français',
        direction: 'ltr',
      },
      en: {
        label: 'English',
        direction: 'ltr',
      },
    },
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        // highlightSearchTermsOnTargetPage: true,
        // searchResultLimits: 10,
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'ISIG',
      logo: {
        alt: 'My Site Logo',
        src: 'logo/logo.png',
      },
      items: [
       
        { to: '/', label: 'Accueil', position: 'left' },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar', // le nom de ton sidebar
          position: 'left',
          label: 'Informations Officielles', // 🔥 super titre clair pour une école
        },
        { to: '/about', label: 'À propos', position: 'left' },
        { to: '/formations', label: 'Formations', position: 'left' },
        { to: '/anciens', label: 'Anciens élèves', position: 'left' },
        { to: '/admission', label: 'Admission', position: 'left' },
        // {
        //   type: 'localeDropdown',
        //   position: 'right',
        // },        
      ],
      
    },
    footer: {
      style: 'light', // ou 'dark' si tu veux tester un autre look plus "luxe"
      links: [
        {
          title: 'Institut',
          items: [
            { label: 'À propos', to: '/about' },
            { label: 'Informations Officielles', to: '/docs/intro' },
            { label: 'Admissions', to: '/admission' },
          ],
        },
        {
          title: 'Formations',
          items: [
            { label: 'Licences', to: '/formations' },
            { label: 'Masters', to: '/formations' },
          ],
        },
        {
          title: 'Vie du Campus',
          items: [
            { label: 'Actualités', to: '/docs/intro' },
            { label: 'Événements', to: '/docs/tutorial-basics/evenements' },
          ],
        },
        {
          title: 'Réseaux Sociaux',
          items: [
            { label: 'LinkedIn', href: 'https://www.linkedin.com' },
            { label: 'Facebook', href: 'https://www.facebook.com' },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Institut Supérieur International de Guinée · Tous droits réservés. Made in Made in Guinée&nbsp;🇬🇳 par <a class="footer-link" href="https://pabiosoft.com/#/contact" target="_blank" rel="noopener noreferrer">Pabiosoft</a>.`,
    },
    
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    
  } satisfies Preset.ThemeConfig,
  
};

export default config;
