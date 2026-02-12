import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // 프로젝트 문서들을 루트 수준(아코디언 없이)으로 노출
  tutorialSidebar: [
    'barabom',
    'cycle',
    'iot',
    'saju',
    'zs-ui',
  ],
};

export default sidebars;
