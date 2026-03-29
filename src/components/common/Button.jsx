import styles from './Button.module.css';

/**
 * Button
 * @param {string}   variant  - 'primary' | 'outlineLight' | 'outlineDark' | 'dark'
 * @param {string}   size     - 'sm' | 'md' | 'lg'
 * @param {function} onClick
 * @param {ReactNode} children
 * @param {string}   className - extra class names
 */
export default function Button({
  variant = 'primary',
  size = 'md',
  onClick,
  children,
  className = '',
  type = 'button',
  ...rest
}) {
  const sizeClass = size === 'sm' ? styles.sm : size === 'lg' ? styles.lg : '';

  return (
    <button
      type={type}
      className={`${styles.btn} ${styles[variant]} ${sizeClass} ${className}`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
}
