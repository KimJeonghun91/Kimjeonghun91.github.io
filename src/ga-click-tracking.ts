import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import {trackGAEvent} from './utils/gaEvent';

declare global {
  interface Window {
    __gaClickTrackingInitialized?: boolean;
  }
}

function getAnchor(target: EventTarget | null): HTMLAnchorElement | null {
  if (!(target instanceof HTMLElement)) {
    return null;
  }

  return target.closest('a');
}

function getLabel(anchor: HTMLAnchorElement): string {
  return anchor.textContent?.trim().replace(/\s+/g, ' ') || anchor.getAttribute('href') || 'unknown';
}

function normalizeToken(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '') || 'unknown';
}

function getPathToken(pathname: string): string {
  const token = pathname === '/' ? 'home' : pathname.replace(/^\/+|\/+$/g, '').replace(/\//g, '_');
  return normalizeToken(token);
}

function getBlogPostId(pathname: string): string | null {
  const slug = pathname.replace(/^\/blog\//, '').replace(/\/+$/g, '');
  if (!slug || slug.startsWith('tags')) {
    return null;
  }

  return `blog_${normalizeToken(slug)}`;
}

function getProjectId(pathname: string): string | null {
  const slug = pathname.replace(/^\/projects\//, '').replace(/\/+$/g, '');
  if (!slug) {
    return null;
  }

  return `project_${normalizeToken(slug)}`;
}

function getBlogListName(currentPath: string): string {
  if (currentPath === '/blog' || currentPath === '/blog/') {
    return 'blog_home';
  }
  if (currentPath.startsWith('/blog/page/')) {
    return 'blog_pagination';
  }
  if (currentPath.startsWith('/blog/tags/')) {
    return 'blog_tag_listing';
  }
  return 'blog_other';
}

function isSameOrigin(url: URL): boolean {
  return url.origin === window.location.origin;
}

function handleClick(event: MouseEvent): void {
  const anchor = getAnchor(event.target);
  if (!anchor) {
    return;
  }

  const href = anchor.getAttribute('href');
  if (!href || href.startsWith('#')) {
    return;
  }

  let targetUrl: URL;

  try {
    targetUrl = new URL(href, window.location.origin);
  } catch {
    return;
  }

  const currentPath = window.location.pathname;
  const internal = isSameOrigin(targetUrl);
  const label = getLabel(anchor);

  if (anchor.closest('.navbar')) {
    trackGAEvent('select_content', {
      content_type: 'navigation',
      item_id: `nav_${internal ? getPathToken(targetUrl.pathname) : normalizeToken(targetUrl.hostname)}`,
      item_name: label,
      item_list_name: 'navbar',
      link_type: internal ? 'internal' : 'external',
    });
    return;
  }

  if (currentPath.startsWith('/blog')) {
    const isBlogPostLink =
      internal &&
      targetUrl.pathname.startsWith('/blog/') &&
      !targetUrl.pathname.startsWith('/blog/tags');

    if (isBlogPostLink) {
      const blogPostId = getBlogPostId(targetUrl.pathname);
      if (!blogPostId) {
        return;
      }

      trackGAEvent('select_content', {
        content_type: 'blog_post',
        item_id: blogPostId,
        item_name: label,
        item_list_name: getBlogListName(currentPath),
      });
    }
  }

  if (currentPath.startsWith('/projects')) {
    const isProjectsLink = internal && targetUrl.pathname.startsWith('/projects/');

    if (isProjectsLink) {
      const projectId = getProjectId(targetUrl.pathname);
      if (!projectId) {
        return;
      }

      trackGAEvent('select_content', {
        content_type: 'project',
        item_id: projectId,
        item_name: label,
        item_list_name: 'projects_listing',
      });
    }
  }
}

if (ExecutionEnvironment.canUseDOM && !window.__gaClickTrackingInitialized) {
  window.__gaClickTrackingInitialized = true;
  document.addEventListener('click', handleClick, true);
}
