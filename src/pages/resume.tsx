import type {ReactNode} from 'react';
import {useState} from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import resumeData from '../../_data/resume.yml';
import styles from './resume.module.css';

interface Profile {
  network: string;
  username: string;
  url: string;
}

interface WorkItem {
  company: string;
  position: string;
  website: string;
  startDate: string;
  endDate: string;
  summary: string;
  highlights?: string[];
}

interface VolunteerItem {
  organization: string;
  position: string;
  website: string;
  startDate: string;
  endDate: string;
  summary: string;
}

interface AwardItem {
  title: string;
  date: string;
  awarder: string;
}

interface SkillItem {
  name: string;
  keywords: string[];
}

interface Basics {
  name: string;
  label: string;
  picture: string;
  email: string;
  url: string;
  website: string;
  summary: string;
  location: {
    countryCode: string;
  };
  profiles: Profile[];
}

interface ResumeData {
  basics: Basics;
  work: WorkItem[];
  volunteer: VolunteerItem[];
  awards: AwardItem[];
  skills: SkillItem[];
}

const resume = resumeData as unknown as ResumeData;

function formatDate(dateStr: string): string {
  if (!dateStr) return '현재';
  const date = new Date(dateStr);
  return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}`;
}

function networkIcon(network: string): string {
  const icons: Record<string, string> = {
    github: '🐙',
    instagram: '📷',
    facebook: '👤',
    linkedin: '💼',
    twitter: '🐦',
  };
  return icons[network.toLowerCase()] ?? '🔗';
}

function stripHtmlTags(text: string): string {
  return text.replace(/<br\s*\/?>/gi, '\n').replace(/<[^>]*>/g, '');
}

function ProfileHeader({basics}: {basics: Basics}): ReactNode {
  const initial = basics.name.charAt(0);
  const profileImageUrl = basics.picture || '/assets/profile.png';
  const [imageError, setImageError] = useState(false);

  return (
    <header className={styles.header}>
      {!imageError ? (
        <img
          src={profileImageUrl}
          alt={basics.name}
          className={styles.profileImage}
          onError={() => setImageError(true)}
        />
      ) : (
        <div className={styles.profilePlaceholder} aria-label={basics.name}>
          {initial}
        </div>
      )}

      <div className={styles.headerInfo}>
        <Heading as="h1" className={styles.name}>
          {basics.name}
        </Heading>
        <div className={styles.label}>{basics.label}</div>

        <div className={styles.contactRow}>
          {basics.email && (
            <span className={styles.contactItem}>
              ✉️ <a href={`mailto:${basics.email}`}>{basics.email}</a>
            </span>
          )}
          {basics.url && (
            <span className={styles.contactItem}>
              🌐 <a href={basics.url} target="_blank" rel="noopener noreferrer">{basics.url}</a>
            </span>
          )}
          {basics.location?.countryCode && (
            <span className={styles.contactItem}>
              📍 {basics.location.countryCode}
            </span>
          )}
        </div>

        {basics.profiles?.length > 0 && (
          <div className={styles.profiles}>
            {basics.profiles.map((p) => (
              <a
                key={p.network}
                href={p.url}
                className={styles.profileLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {networkIcon(p.network)} {p.network}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}

function SummarySection({summary}: {summary: string}): ReactNode {
  if (!summary) return null;
  const cleaned = stripHtmlTags(summary);
  return (
    <section className={styles.section}>
      <Heading as="h2" className={styles.sectionTitle}>
        💡 소개
      </Heading>
      <p className={styles.summary}>{cleaned}</p>
    </section>
  );
}

function WorkSection({items, title, icon}: {items: WorkItem[]; title: string; icon: string}): ReactNode {
  if (!items?.length) return null;
  return (
    <section className={styles.section}>
      <Heading as="h2" className={styles.sectionTitle}>
        {icon} {title}
      </Heading>
      <ul className={styles.timelineList}>
        {items.map((item, idx) => (
          <li key={`${item.company}-${idx}`} className={styles.timelineItem}>
            <div className={styles.timelineHeader}>
              <span className={styles.company}>
                {item.website ? (
                  <a href={item.website} target="_blank" rel="noopener noreferrer">
                    {item.company}
                  </a>
                ) : (
                  item.company
                )}
              </span>
              <span className={styles.position}>{item.position}</span>
              <span className={styles.dateRange}>
                {formatDate(item.startDate)} — {formatDate(item.endDate)}
              </span>
            </div>
            {item.summary && (
              <p className={styles.timelineSummary}>{item.summary.trim()}</p>
            )}
            {item.highlights?.length > 0 && (
              <ul className={styles.highlights}>
                {item.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

function VolunteerSection({items}: {items: VolunteerItem[]}): ReactNode {
  if (!items?.length) return null;
  return (
    <section className={styles.section}>
      <Heading as="h2" className={styles.sectionTitle}>
        🤝 활동
      </Heading>
      <ul className={styles.timelineList}>
        {items.map((item, idx) => (
          <li key={`${item.organization}-${idx}`} className={styles.timelineItem}>
            <div className={styles.timelineHeader}>
              <span className={styles.company}>{item.organization}</span>
              <span className={styles.position}>{item.position}</span>
              <span className={styles.dateRange}>
                {formatDate(item.startDate)} — {formatDate(item.endDate)}
              </span>
            </div>
            {item.summary && (
              <p className={styles.timelineSummary}>{item.summary.trim()}</p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

function SkillsSection({skills}: {skills: SkillItem[]}): ReactNode {
  if (!skills?.length) return null;
  return (
    <section className={styles.section}>
      <Heading as="h2" className={styles.sectionTitle}>
        🛠 기술
      </Heading>
      <div className={styles.skillsGrid}>
        {skills.map((skill) => (
          <div key={skill.name} className={styles.skillCard}>
            <div className={styles.skillName}>{skill.name}</div>
            <div className={styles.keywords}>
              {skill.keywords.map((kw) => (
                <span key={kw} className={styles.keyword}>{kw}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function AwardsSection({awards}: {awards: AwardItem[]}): ReactNode {
  if (!awards?.length) return null;
  return (
    <section className={styles.section}>
      <Heading as="h2" className={styles.sectionTitle}>
        🏆 수상 및 자격
      </Heading>
      <ul className={styles.awardsList}>
        {awards.map((award, idx) => (
          <li key={`${award.title}-${idx}`} className={styles.awardItem}>
            <span className={styles.awardIcon}>🏅</span>
            <div className={styles.awardInfo}>
              <div className={styles.awardTitle}>{award.title}</div>
              <div className={styles.awardMeta}>
                {award.awarder} · {formatDate(award.date)}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function ResumePage(): ReactNode {
  const {basics, work, volunteer, awards, skills} = resume;

  return (
    <Layout title="이력서" description={`${basics.name} - ${basics.label}`}>
      <main className={styles.resumePage}>
        <ProfileHeader basics={basics} />
        <SummarySection summary={basics.summary} />
        <WorkSection items={work} title="경력" icon="💼" />
        <VolunteerSection items={volunteer} />
        <SkillsSection skills={skills} />
        <AwardsSection awards={awards} />
      </main>
    </Layout>
  );
}
