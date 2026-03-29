import { useNavigate } from 'react-router-dom';
import Button  from '../common/Button';
import styles  from './JoinUs.module.css';

const PERKS = [
  {
    icon: '🌍',
    title: 'International Community',
    desc: 'Study alongside peers from over 40 countries in the heart of the Mediterranean.',
  },
  {
    icon: '🎓',
    title: 'Accredited Degrees',
    desc: 'All programmes are accredited by MQF, ELT Council, ATHE and recognised across Europe.',
  },
  {
    icon: '💼',
    title: 'Career-First Curriculum',
    desc: 'Industry-led teaching ensures you graduate ready to step straight into your career.',
  },
  {
    icon: '☀️',
    title: 'Life in Malta',
    desc: '300 days of sunshine, rich history, and a safe, English-speaking island nation.',
  },
];

export default function JoinUs() {
  const navigate = useNavigate();

  return (
    <>
      <section className={styles.whySection} id="join-us">
        <div className={styles.whyBg} aria-hidden="true" />
        <div className={styles.whyOverlay} aria-hidden="true" />

        <div className={styles.whyInner}>
          <div className={styles.whyCopy}>
            <p className={`section-tag ${styles.lightTag}`}>Why Choose Ascencia?</p>
            <h2 className={styles.whyHeading}>
              Your future starts<br />in <em>Malta</em>
            </h2>
            <p className={styles.whyDesc}>
              Ascencia Malta offers more than a degree — it offers a transformative
              life experience. Join a diverse community of learners, build lifelong
              connections, and launch your career from one of Europe's most vibrant
              island campuses.
            </p>
            <div className={styles.whyActions}>
              <Button variant="primary" size="lg" onClick={() => navigate('/contact')}>
                Apply Now
              </Button>
              <Button variant="outlineLight" size="lg" onClick={() => navigate('/about')}>
                Learn More
              </Button>
            </div>
          </div>
          <div className={styles.perksGrid}>
            {PERKS.map(({ icon, title, desc }) => (
              <div key={title} className={styles.perkCard}>
                <span className={styles.perkIcon}>{icon}</span>
                <h4 className={styles.perkTitle}>{title}</h4>
                <p className={styles.perkDesc}>{desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}