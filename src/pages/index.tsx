import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import SectionCard from '@site/src/components/SectionCard';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className={styles.heroOrb} aria-hidden="true" />
      <div className={styles.heroContent}>
        <div className={styles.profileImageWrapper}>
          <img
            src="/assets/profile.png"
            alt="Profile"
            className={styles.profileImage}
          />
        </div>
        <div className={styles.heroLabel}>
          <span className={styles.heroDot} />
          성실하게 꾸준하게
        </div>
        <Heading as="h1" className={styles.heroTitle}>
          {siteConfig.title}
        </Heading>
        <p className={styles.heroSubtitle}>
          Expo, ReactNative Developer
        </p>
        <div className={styles.heroCTA}>
          <Link className={styles.primaryButton} to="/projects">
            View Projects
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3.33 8h9.34M8.67 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <Link className={styles.secondaryButton} to="/resume">
            Resume
          </Link>
        </div>
      </div>
    </header>
  );
}

function SectionsGrid() {
  return (
    <section className={styles.sections}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>Explore</span>
          <h2 className={styles.sectionTitle}>What I Do</h2>
        </div>
        <div className={styles.cardsGrid}>
          <SectionCard
            title="Blog"
            description="JavaScript, React Native, SwiftUI 등 다양한 기술 주제에 대한 개발 경험과 학습 기록"
            icon="blog"
            link="/blog"
            badge="Articles"
          />
          <SectionCard
            title="Resume"
            description="경력, 기술 스택, 핵심 프로젝트와 성과를 담은 이력서"
            icon="resume"
            link="/resume"
            badge="Experience"
          />
          <SectionCard
            title="Projects"
            description="직접 설계하고 구현한 프로젝트들의 기술 스택과 결과물"
            icon="projects"
            link="/projects"
            badge="Portfolio"
          />
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Developer portfolio">
      <HomepageHeader />
      <main>
        <SectionsGrid />
      </main>
    </Layout>
  );
}
