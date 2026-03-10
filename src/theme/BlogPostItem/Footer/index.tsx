import React from 'react';
import type {ReactNode} from 'react';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';
import BlogPostItemFooter from '@theme-original/BlogPostItem/Footer';
import PostFooter from '@site/src/components/PostFooter/index.md';

export default function BlogPostItemFooterWrapper(): ReactNode {
  const {isBlogPostPage} = useBlogPost();

  return (
    <>
      <BlogPostItemFooter />
      {isBlogPostPage ? <PostFooter /> : null}
    </>
  );
}
