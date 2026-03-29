import { useNavigate } from 'react-router-dom';
import styles from './Footer.module.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok, FaYoutube } from "react-icons/fa";


const PROGRAMMES = [
  'Doctorate of Business Administration (DBA)', 'MBA in Leadership  Excellence', 'Master of Science Specialization', 'Master of Arts Specialization', 'Post Graduate Diploma - CS Specialization', 'Post Graduate Diploma Specialization', 'Bachelor Specialization', 'Undergraduate Diploma Specialization', 'Award certificates'
];
const ENG_PROGRAMMES = [
  'General English Course', 'Business English Course', 'Academic English Course', 'ESP – English For Special Purpose Course'
]
const QUICK_LINKS = ['Home', 'About Us', 'Contact'];
const ROUTE_MAP = { 'Home': '/', 'About Us': '/about', 'Contact': '/contact' };

const SOCIALS = [
  {
    icon: <FaFacebookF />,
    link: "https://www.facebook.com/Ascencia-Malta-100822499194582",
    name: "Facebook",
  },
  {
    icon: <FaInstagram />,
    link: "https://www.instagram.com/ascenciamalta/",
    name: "Instagram",
  },
  {
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/company/ascencia-malta-business-school/",
    name: "LinkedIn",
  },
  {
    icon: <FaTiktok />,
    link: "https://www.tiktok.com/@infoswhy9n",
    name: "TikTok",
  },
  {
    icon: <FaYoutube />,
    link: "https://www.youtube.com/@AscenciaMalta",
    name: "YouTube",
  },
];

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div className={styles.brand}>
          <span className={styles.brandName}>Ascencia <em>Malta</em> Ltd</span>
          <p className={styles.brandDesc}>
            Licensed by: The Malta Further and Higher Education Authority (MFHEA)<br/>
            License number: 2021-018<br/>
            Category: Higher Education Institution
          </p>
          <a href="https://www.collegedeparis.fr/" target='_blank' rel="noopener noreferrer"><img src="https://www.ascencia-business-school.mt/wp-content/uploads/2022/11/College-de-Paris-Logo-1.png.webp" alt="collegede_paris" /></a>
          <span className={styles.brandSub}>Member of College de Paris</span>
          <div className={styles.socials}>
            {SOCIALS.map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.name}
                className={styles.socialBtn}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
        <div className={styles.col}>
          <h5>Navigate</h5>
          <ul className={styles.navList}>
            {QUICK_LINKS.map(label => (
              <li key={label}>
                <button onClick={() => navigate(ROUTE_MAP[label] || '/')}>
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.col}>
          <h5>Programmes</h5>
          <ul className={styles.navList}>
            {PROGRAMMES.map(p => (
              <li key={p}><button>{p}</button></li>
            ))}
          </ul>
        </div>

        <div className={styles.col}>
          <h5>Programmes</h5>
          <ul className={styles.navList}>
            {ENG_PROGRAMMES.map(p => (
              <li key={p}><button>{p}</button></li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.bottom}>
        <span>© {new Date().getFullYear()} Ascencia Malta Ltd. All rights reserved.</span>
        <span className={styles.accredLine}>
          Erasmus + mobility :&nbsp;
          <span className={styles.gold}><a href='mailto:erasmus@ascenciamalta.mt'>erasmus@ascenciamalta.mt</a></span>
        </span>
      </div>
    </footer>
  );
}
