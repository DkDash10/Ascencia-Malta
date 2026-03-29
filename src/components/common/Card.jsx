import styles from './Card.module.css';

/**
 * Card
 * @param {'default'|'ghost'|'dark'} variant
 */
export default function Card({ children, variant = 'default', className = '', style }) {
  const variantClass = variant === 'ghost' ? styles.ghost
                     : variant === 'dark'  ? styles.dark
                     : '';

  return (
    <div className={`${styles.card} ${variantClass} ${className}`} style={style}>
      {children}
    </div>
  );
}
