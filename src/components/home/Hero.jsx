import { useNavigate } from 'react-router-dom';
import Button from '../common/Button';
import styles from './Hero.module.css';

const STATS = [
  { num: '10+', label: 'Programmes' },
  { num: '15+', label: 'Partners' },
  { num: '3',   label: 'Campuses' },
];

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className={styles.hero}>
      <div className={styles.bgImage} aria-hidden="true" />
      <div className={styles.overlay} aria-hidden="true" />
      <div className={styles.glow}    aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.copy}>
          <p className={`${styles.eyebrow} fade-up delay-1`}>
            Floriana, Malta — Heart of the Mediterranean
          </p>

          <h1 className={`${styles.heading} fade-up delay-2`}>
            Welcome to<br />
            <em>Ascencia Malta</em><br />
          </h1>

          <p className={`${styles.desc} fade-up delay-3`}>
            We are eager to give you the best education. Through individualized
            follow-up and world-class faculty, we transform ambition into achievement
            at the heart of the Mediterranean.
          </p>

          <div className={`${styles.actions} fade-up delay-4`}>
            <Button variant="primary" size="lg" onClick={() => navigate('/about')}>
              Discover Ascencia
            </Button>
            <Button variant="outlineLight" size="lg" onClick={() => navigate('/contact')}>
              Get in Touch
            </Button>
          </div>
        </div>

        <div className={`${styles.statsPanel} fade-up delay-3`}>
          {STATS.map(({ num, label }, i) => (
            <div key={i} className={styles.stat}>
              <span className={styles.statNum}>{num}</span>
              <span className={styles.statLabel}>{label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
