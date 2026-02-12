import type {ReactNode} from 'react';
import {useHistory} from '@docusaurus/router';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './projects.module.css';

interface Project {
  id: string;
  title: string;
  caption: string;
  date: string;
  image: string;
  tech: string;
  links: {title: string; url: string}[];
}

const projects: Project[] = [
  {
    id: 'zs-ui',
    title: 'ZS-ui',
    caption: 'React Native Expo UI 컴포넌트 라이브러리',
    date: '2026.02',
    image: '/assets/img/projects/thumb_zsui.png',
    tech: 'React Native, Expo, TypeScript, JavaScript',
    links: [ ],
  },
  {
    id: 'barabom',
    title: '바라봄',
    caption: '똑똑한 반려동물 건강수첩',
    date: '2021.06',
    image: '/assets/img/projects/thumb_barabom.png',
    tech: 'React Native, Node.js(Express), MySQL, Next.js, AWS',
    links: [ ],
  },
  {
    id: 'iot',
    title: '아두이노 IOT 냉장고',
    caption: '머신러닝을 통한 식품 분석 및 알람',
    date: '2020.06',
    image: '/assets/img/projects/iot02.png',
    tech: 'Arduino, Camera Module, Machine Learning, Mobile App',
    links: [],
  },
  {
    id: 'cycle',
    title: '홈트레이닝 사이클',
    caption: '사이클과 BLE 통신으로 운동 측정',
    date: '2019.06',
    image: '/assets/img/projects/cycle01.png',
    tech: 'Java(Android), SQLite, BLE, Firebase Realtime DB',
    links: [],
  },
  {
    id: 'saju',
    title: '운세 상담 앱',
    caption: '유저와 상담사의 채팅, 영상/음성통화 탑재. 일일운세, 무료사주 등 부가기능 추가 개발.',
    date: '2018.06',
    image: '/assets/img/projects/saju_pp.jpg',
    tech: 'React Native, In-App Purchase, WebRTC',
    links: [],
  },
];

function ProjectCard({project}: {project: Project}): ReactNode {
  const history = useHistory();
  
  const handleCardClick = () => {
    history.push(`/docs/projects/${project.id}`);
  };

  return (
    <div className={styles.card} onClick={handleCardClick} style={{cursor: 'pointer'}}>
      {project.image ? (
        <img
          className={styles.cardImage}
          src={project.image}
          alt={project.title}
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
            (e.target as HTMLImageElement).nextElementSibling?.removeAttribute('style');
          }}
        />
      ) : null}
      <div
        className={styles.cardImagePlaceholder}
        style={project.image ? {display: 'none'} : undefined}>
        {project.title.charAt(0)}
      </div>
      <div className={styles.cardBody}>
        <Heading as="h3" className={styles.cardTitle}>
          {project.title}
        </Heading>
        <p className={styles.cardCaption}>{project.caption}</p>
        <p className={styles.cardTech}>{project.tech}</p>
        <p className={styles.cardDate}>{project.date}</p>
      </div>
      {project.links.length > 0 && (
        <div className={styles.cardFooter}>
          {project.links.map((link) => (
            <a
              key={link.url}
              className={styles.cardLink}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}>
              {link.title} &rarr;
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ProjectsPage(): ReactNode {
  return (
    <Layout title="Projects" description="프로젝트 리스트">
      <main>
        <div className={styles.projectsHeader}>
          <Heading as="h1">Projects</Heading>
          <p>프로젝트 리스트</p>
        </div>
        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </main>
    </Layout>
  );
}
