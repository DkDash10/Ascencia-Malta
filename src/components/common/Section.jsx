import styles from './Section.module.css';

/**
 * Section wrapper
 * @param {'cream'|'creamDark'|'white'|'navy'|'navyDeep'} bg
 * @param {'sm'|'md'|'lg'|'none'} padding
 * @param {string} id  - for anchor links
 */
export default function Section({
  children,
  bg = 'cream',
  padding = 'md',
  id,
  className = '',
}) {
  const bgClass     = styles[`bg${bg.charAt(0).toUpperCase() + bg.slice(1)}`] || '';
  const padClass    = styles[`padding${padding.charAt(0).toUpperCase() + padding.slice(1)}`] || '';

  return (
    <section
      id={id}
      className={`${styles.section} ${bgClass} ${padClass} ${className}`}
    >
      <div className={styles.inner}>
        {children}
      </div>
    </section>
  );
}
