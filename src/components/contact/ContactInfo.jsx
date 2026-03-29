import styles from './ContactInfo.module.css';
import { MdLocationPin } from "react-icons/md";
import { MdMailOutline } from "react-icons/md";

const INFO_ITEMS = [
  {
    icon: <MdLocationPin />,
    label: 'Address',
    text: 'Ascencia Malta Ltd \n23, Vincenzo Dimech Street, \nFloriana, \nMalta',
  },
  {
    icon: <MdMailOutline />,
    label: 'Email Us',
    text: 'erasmus@ascenciamalta.mt',
    type: 'email'
  }
];

export default function ContactInfo() {
  return (
    <div className={styles.wrap}>
      <h3 className={styles.heading}>Contact Information</h3>
      <div className={styles.addresses}>
        {INFO_ITEMS.map(({ icon, label, text, type }) => (
          <div key={label} className={styles.item}>
            <div className={styles.iconBox}>{icon}</div>
            <div className={styles.itemText}>
              <strong>{label}</strong>
              {type === "email" ? (
                  <a href={`mailto:${text}`} className='test'>{text}</a>
                  ) : (
                  <p style={{ whiteSpace: 'pre-line' }}>{text}</p>
                  )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
