import styles  from './Departments.module.css';

export default function Departments() {
  return (
    <>
      <div className={styles.mapWrap}>
        <iframe
          title="Ascencia Malta – Floriana"
          src="https://maps.google.com/maps?q=23%20Vincenzo%20Dimech%20Rd%20Floriana%2C%20FRN%201502%2C%20Malta&t=m&z=16&output=embed&iwloc=near"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </>
  );
}
