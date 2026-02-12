import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import {addTruncateMarksToAllPosts} from './scripts/add-truncate-marks';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: '김정훈',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'warn',

  markdown: {
    preprocessor: ({fileContent}) => fileContent.replace(/<br>/g, '<br/>'),
    hooks: {
      onBrokenMarkdownLinks: 'warn',
      onBrokenMarkdownImages: 'warn',
    },
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },

  plugins: [
    function yamlLoaderPlugin() {
      return {
        name: 'yaml-loader-plugin',
        configureWebpack() {
          return {
            module: {
              rules: [
                {
                  test: /\.ya?ml$/,
                  use: 'js-yaml-loader',
                },
              ],
            },
          };
        },
      };
    },
    function blogPreprocessorPlugin() {
      return {
        name: 'blog-preprocessor-plugin',
        async loadConfig() {
          try {
            await addTruncateMarksToAllPosts(false);
          } catch (error) {
            console.error('Failed to preprocess blog posts:', error);
          }
        },
      };
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: 'projects',
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
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'ignore',
          postsPerPage: 10,
          blogSidebarCount: 0,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        language: ['ko', 'en'],
        highlightSearchTermsOnTargetPage: true,
        indexBlog: true,
        indexDocs: false,
        docsRouteBasePath: '/projects',
        blogRouteBasePath: '/blog',
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          label: 'Blog',
          position: 'left',
          items: [
            // {to: '/blog', label: 'All Posts'},
            {to: '/blog/tags/barabomlog', label: '바라봄 개발로그'},
            {to: '/blog/tags/study', label: '스터디'},
            {to: '/blog/tags/retrospective', label: '회고'},
            // {to: '/blog/tags', label: 'Categories'},
          ],
        },
        {to: '/resume', label: 'Resume', position: 'left'},
        {to: '/projects', label: 'Projects', position: 'left'},
        {
          href: 'https://github.com/KimJeonghun91',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Pages',
          items: [
            { to: '/blog', label: 'Blog' },
            { to: '/blog/tags', label: 'Tags' },
            { to: '/resume', label: 'Resume' },
            { to: '/projects', label: 'Projects' },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/KimJeonghun91',
            },
            {
              label: 'Threads',
              href: 'https://www.threads.com/@right_hot',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/right_hot',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Kimjeonghun91. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
