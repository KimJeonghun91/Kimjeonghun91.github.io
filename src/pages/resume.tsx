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

function networkIcon(network: string): ReactNode {
  const normalizedNetwork = network.toLowerCase();

  if (normalizedNetwork === 'threads') {
    return (
      <svg
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="currentColor"
        style={{verticalAlign: 'middle'}}
      >
        <title>Threads</title>
        <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 0 1 3.02.142c-.126-.742-.375-1.332-.75-1.757-.513-.586-1.308-.883-2.359-.89h-.029c-.844 0-1.992.232-2.721 1.32L7.734 7.847c.98-1.454 2.568-2.256 4.478-2.256h.044c3.194.02 5.097 1.975 5.287 5.388.108.046.216.094.321.142 1.49.7 2.58 1.761 3.154 3.07.797 1.82.871 4.79-1.548 7.158-1.85 1.81-4.094 2.628-7.277 2.65Zm1.003-11.69c-.242 0-.487.007-.739.021-1.836.103-2.98.946-2.916 2.143.067 1.256 1.452 1.839 2.784 1.767 1.224-.065 2.818-.543 3.086-3.71a10.5 10.5 0 0 0-2.215-.221z"/>
      </svg>
    );
  }

  if (normalizedNetwork === 'github') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        fill="currentColor"
        style={{verticalAlign: 'middle'}}
      >
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
      </svg>
    );
  }

  if (normalizedNetwork === 'instagram') {
    return (
      <svg
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="currentColor"
        style={{verticalAlign: 'middle'}}
      >
        <title>Instagram</title>
        <path d="M7.0301.084c-1.2768.602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0206 4.9478-.0814 1.28-.607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"/>
      </svg>
    );
  }

  const icons: Record<string, string> = {
    facebook: '👤',
    linkedin: '💼',
    twitter: '🐦',
  };

  return icons[normalizedNetwork] ?? '🔗';
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
        <SkillsSection skills={skills} />
        <WorkSection items={work} title="경력" icon="💼" />
        <VolunteerSection items={volunteer} />
        <AwardsSection awards={awards} />
      </main>
    </Layout>
  );
}
