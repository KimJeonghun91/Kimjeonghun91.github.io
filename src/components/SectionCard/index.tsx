import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type IconType = 'blog' | 'resume' | 'projects';

type SectionCardProps = {
  title: string;
  description: string;
  icon: IconType;
  link: string;
  badge?: string;
};

const iconMap: Record<IconType, ReactNode> = {
  blog: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
    </svg>
  ),
  resume: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
  projects: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
      <line x1="14" y1="4" x2="10" y2="20" />
    </svg>
  ),
};

export default function SectionCard({
  title,
  description,
  icon,
  link,
  badge,
}: SectionCardProps): ReactNode {
  return (
    <Link to={link} className={styles.cardLink}>
      <article className={styles.card}>
        <div className={styles.cardHeader}>
          <div className={styles.iconWrapper}>
            {iconMap[icon]}
          </div>
          {badge && <span className={styles.badge}>{badge}</span>}
        </div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.footer}>
          <span className={styles.cta}>
            Explore
            <svg className={styles.arrow} width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2.33 7h9.34M7.67 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </div>
      </article>
    </Link>
  );
}
