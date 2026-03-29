import { useState } from 'react';
import Section from '../common/Section';
import Button  from '../common/Button';
import styles  from './News.module.css';

const NEWS = [
  {
    id: 1,
    category: 'News',
    date: '02 Feb 2026',
    title: 'World Cancer Day – Cancer Awareness at Ascencia Malta',
    excerpt:
      'Ascencia Malta proudly joined the global movement for World Cancer Day, raising awareness in partnership with Puttinu Cares and encouraging our community to stand together.',
    img: 'https://www.ascencia-business-school.mt/wp-content/uploads/2026/02/4-769x1024.jpg',
    tag: '💜 Awareness',
  },
  {
    id: 2,
    category: 'News',
    date: '02 Feb 2026',
    title: 'A New National Benchmark and Historic Achievement',
    excerpt:
      'Ascencia Malta has set a new national benchmark, marking a historic achievement in Maltese higher education — a milestone that reflects our unwavering commitment to excellence.',
    img: 'https://www.ascencia-business-school.mt/wp-content/uploads/2026/02/8-769x1024.jpg',
    tag: '🎉 Milestone',
  },
  {
    id: 3,
    category: 'Event',
    date: '20 Sep 2025',
    title: 'Ascencia Malta to Present at ICEF Rio de Janeiro',
    excerpt:
      'Ascencia Malta is pleased to announce its participation at ICEF Rio de Janeiro, showcasing Malta as a premier study destination to education agents from across Latin America.',
    img: 'https://www.ascencia-business-school.mt/wp-content/uploads/2025/09/Icef-brazil-1024x512.jpg',
    tag: '✈️ Event',
  },
  {
    id: 4,
    category: 'News',
    date: '16 Jul 2025',
    title: 'New Cloudigo Partnership Elevates Employee Benefits',
    excerpt:
      'Ascencia Malta Business School is proud to announce a new partnership with Cloudigo, enhancing employee benefits and reinforcing our commitment to staff well-being.',
    img: 'https://www.ascencia-business-school.mt/wp-content/uploads/2025/07/Cloudigo.jpeg',
    tag: '🤝 Partnership',
  },
];

const CATEGORIES = ['All', 'News', 'Event'];

export default function News() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? NEWS : NEWS.filter(n => n.category === active);
  const [featured, ...rest] = filtered;

  return (
    <Section bg="White" id="news">
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <p className="section-tag">Latest Updates</p>
          <h2 className="section-title">
            News &amp; <em>Events</em>
          </h2>
          <p className="section-subtitle">
            Stay up to date with the latest happenings, partnerships, and milestones
            at Ascencia Business School Malta.
          </p>
        </div>
        <div className={styles.filters}>
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`${styles.filterBtn} ${active === cat ? styles.filterActive : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className={styles.empty}>No articles in this category yet.</p>
      ) : (
        <div className={styles.grid}>
          {featured && (
            <div className={styles.featured}>
              <div className={styles.featuredImg}>
                <img src={featured.img} alt={featured.title} />
                <span className={styles.catBadge}>{featured.tag}</span>
              </div>
              <div className={styles.featuredBody}>
                <span className={styles.date} style={{marginBottom: "0.75rem"}}>{featured.date}</span>
                <h3 className={styles.featuredTitle}>{featured.title}</h3>
                <p className={styles.excerpt}>{featured.excerpt}</p>
                <button className={styles.readMore}>
                  Read Article
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div>
            </div>
          )}

          {rest.length > 0 && (
            <div className={styles.sideStack}>
              {rest.map(item => (
                <div key={item.id} className={styles.sideCard}>
                  <div className={styles.sideImg}>
                    <img src={item.img} alt={item.title} />
                  </div>
                  <div className={styles.sideBody}>
                    <div className={styles.sideMeta}>
                      <span className={styles.sideCat}>{item.tag}</span>
                      <span className={styles.date}>{item.date}</span>
                    </div>
                    <h4 className={styles.sideTitle}>{item.title}</h4>
                    <p className={styles.sideExcerpt}>{item.excerpt}</p>
                    <button className={styles.readMore}>
                      Read more
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      <div className={styles.footer}>
        <Button variant="outlineDark">
          View All News &amp; Events
        </Button>
      </div>
    </Section>
  );
}