import styles from "./Partners.module.css";
import Section from "./Section";

const BASE_URL = "https://www.ascencia-business-school.mt/wp-content/uploads";

const createImg = (path) => `${BASE_URL}/${path}`;

const PARTNER_IMGS = [
  ...Array.from({ length: 8 }, (_, i) =>
    createImg(`2023/01/partner-${i + 1}.jpg.webp`),
  ),
  createImg("2025/06/CGC-Jhanjeri-Logo.jpg"),
  createImg("2025/06/ITBS_logo_resized.jpg"),
  createImg("2025/06/JRNRVU-LOGO-302x272-1.jpg"),
  createImg("2025/06/LogoCeumh.png"),
  createImg("2025/06/logo-suptech4.png"),
  createImg("2025/06/TARUND_INSTITUTE_Logo_Resized.jpg"),
  createImg("2025/06/Untitled-design.png"),
  createImg("2025/06/cT3bDM6Zkz0FH70neN2ij1iITPJ4x1A86r5uTsvO.jpg"),
  createImg("2025/06/digital.jpg"),
];

export default function Partners() {
  return (
    <Section bg="White" padding="md">
        <p className="section-tag">Partner Institutions</p>
        <h2 className="section-title">
        Proudly <em>partnered</em> with the world
        </h2>
        <div className={styles.marquee}>
        <div className={styles.track}>
            {[...PARTNER_IMGS, ...PARTNER_IMGS].map((src, i) => (
            <div key={i} className={styles.logo}>
                <img src={src} alt={`Partner ${i}`} />
            </div>
            ))}
        </div>
        </div>
    </Section>
  )
}