import styles from './PageHero.module.css';

export default function PageHero({ page, heading, lead, bgUrl }) {
  return (
    <section className={styles.hero}>
      {bgUrl && (
        <div
          className={styles.bgImage}
          style={{ backgroundImage: `url(${bgUrl})` }}
          aria-hidden="true"
        />
      )}
      <div className={styles.overlay} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={`${styles.breadcrumb} fade-up delay-1`}>
          <span>Home</span>
          <span>&gt;</span>
          <span>{page}</span>
        </div>

        <h1
          className={`${styles.heading} fade-up delay-2`}
          dangerouslySetInnerHTML={{ __html: heading }}
        />

        {lead && <p className={`${styles.lead} fade-up delay-3`}>{lead}</p>}
      </div>
    </section>
  );
}
