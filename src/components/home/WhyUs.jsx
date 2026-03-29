import { useNavigate } from "react-router-dom";
import Partners from "../common/Partners";
import Section from "../common/Section";
import Button from "../common/Button";
import styles from "./WhyUs.module.css";
import Athelogo from "../../assets/accredited/athelogo.png";
import Bgam from "../../assets/accredited/bgam.png";
import Edusign from "../../assets/accredited/edusign.png";
import EQF from "../../assets/accredited/EQF.png";
import Erasmuspluslogo from "../../assets/accredited/erasmuspluslogo.png";
import Getqualified from "../../assets/accredited/getqualified.png";
import Tmc from "../../assets/accredited/tmc.png";

const MALTA_IMG =
  "https://www.ascencia-business-school.mt/wp-content/uploads/2023/01/malta-ascencia-bs.jpg";
const DIRECTOR_IMG =
  "https://www.ascencia-business-school.mt/wp-content/uploads/2022/11/Tess-Giordmaina-Ascencia-Malta-1024x768.jpg";
const PARIS_IMG =
  "https://www.ascencia-business-school.mt/wp-content/uploads/2022/11/ascencia-paris-campus.jpg";
const VALENCIA_IMG =
  "https://www.ascencia-business-school.mt/wp-content/uploads/2022/11/ascencia-valencia-campus.jpg";
const ACCREDITED = [
  "https://www.ascencia-business-school.mt/wp-content/uploads/2023/01/mqf-logo.png.webp",
  "https://www.ascencia-business-school.mt/wp-content/uploads/2023/01/elt-council.png.webp",
  Athelogo,
  EQF,
  "https://www.ascencia-business-school.mt/wp-content/uploads/2024/06/Colour-Logo-Black-Text-Full-Text-2.svg",
  "https://www.ascencia-business-school.mt/wp-content/uploads/2025/06/download.png",
  "https://www.ascencia-business-school.mt/wp-content/uploads/2025/06/amte-min.png",
  Bgam,
];

const COLLAB = [
  {
    src: Edusign,
    link: "https://www.edusign.fr/",
    name: "Edusign",
  },
  {
    src: Getqualified,
    link: "https://www.maltaenterprise.com/support/get-qualified-2017-2023",
    name: "Get Qualified",
  },
  {
    src: Erasmuspluslogo,
    link: "https://erasmus-plus.ec.europa.eu/",
    name: "Erasmus Plus",
  },
    {
    src: Tmc,
    link: "https://www.maltachamber.org.mt/",
    name: "Malta Chamber",
  }
];

const FLORIANA_REASONS = [
  {
    icon: "🏛️",
    title: "History",
    desc: "Centuries of layered Maltese heritage — every street tells a story that enriches your academic mindset.",
  },
  {
    icon: "🏗️",
    title: "Architecture",
    desc: "Stunning baroque and neoclassical buildings form an inspiring daily backdrop for your studies.",
  },
  {
    icon: "🌿",
    title: "Public Gardens",
    desc: "Beautifully kept green spaces perfect for reflection, study, and relaxing between classes.",
  },
  {
    icon: "🎶",
    title: "Music Festivals",
    desc: "Vibrant cultural events throughout the year bring energy and community spirit to campus life.",
  },
  {
    icon: "✨",
    title: "Authenticity",
    desc: "An unpolished, genuine Maltese experience away from tourist-heavy areas of the island.",
  },
];

export default function WhyUs() {
  const navigate = useNavigate();

  return (
    <>
      <AboutStrip navigate={navigate} />
      <WhyFloriana />
      <DirectorMessage />
      <Campuses />
      <Partners />
      <Accreditations />
    </>
  );
}

function AboutStrip({ navigate }) {
  return (
    <Section bg="Navy" padding="Md">
      <div className={styles.aboutStrip}>
        <div className={styles.stripCopy}>
          <p className="section-tag">About Ascencia Malta</p>
          <h2 className={`section-title ${styles.stripTitle}`}>
            Located at the heart of <em>Valletta</em>
          </h2>
          <p className={`section-subtitle ${styles.subtitle}`}>
            Ascencia Malta is located in Floriana — right on the doorstep of
            Valletta. A short walk separates the two historic towns. Floriana
            sits at the very heart of the Maltese islands, with roads and buses
            connecting you to all major cities.
          </p>
          <p className={`section-subtitle ${styles.subtitle}`}>
            Our campus is open to all international candidates who wish to study
            management and technology in the heart of the Mediterranean.
          </p>
          <Button
            variant="primary"
            style={{ marginTop: "1.5rem" }}
            onClick={() => navigate("/about")}
          >
            Learn More About Us
          </Button>
        </div>

        <div className={styles.imgWrap}>
          <img src={MALTA_IMG} alt="Ascencia campus Malta" />
          <div className={styles.imgBadge}>
            <strong>2013</strong>
            <span>Established</span>
          </div>
        </div>
      </div>
    </Section>
  );
}

function WhyFloriana() {
  return (
    <Section bg="CreamDark" id="floriana">
      <p className="section-tag">Why Floriana?</p>
      <h2 className="section-title">
        A city that <em>inspires</em> learning
      </h2>
      <p className="section-subtitle">
        Floriana isn't just a location — it's a living, breathing cultural
        experience that enriches your academic journey every single day.
      </p>

      <div className={styles.floGrid}>
        {FLORIANA_REASONS.map(({ icon, title, desc }) => (
          <div key={title} className={styles.floCard}>
            <div className={styles.floIcon}>{icon}</div>
            <h4 className={styles.floTitle}>{title}</h4>
            <p className={styles.floDesc}>{desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function DirectorMessage() {
  return (
    <Section bg="White">
      <p className="section-tag">From the Director</p>
      <h2 className="section-title" style={{ marginBottom: "3rem" }}>
        A message of <em>welcome</em>
      </h2>

      <div className={styles.directorGrid}>
        <div className={styles.directorPhoto}>
          <img src={DIRECTOR_IMG} alt="Dr. Tess Giordmaina" />
          <div className={styles.directorCaption}>
            <strong>Dr. Tess Giordmaina</strong>
            <span>Director, Ascencia Malta</span>
          </div>
        </div>

        <div>
          <blockquote className={styles.directorQuote}>
            "I am honoured to spearhead a school built on a solid foundation of
            academic integrity and excellence, paired with an inherent
            commitment to learn, teach, innovate and champion knowledge and
            business success."
          </blockquote>
          <p className={styles.directorBody}>
            As the Director of Ascencia Malta Business and English Language
            School, it is an honour and a pleasure to welcome you to our
            beautiful campus in Floriana, Malta. Our academic teams have been
            tasked with the responsibility of mentoring some of the brightest
            minds of this generation.
          </p>
          <p className={styles.directorBody}>
            Watching our students evolve into trailblazers with achievements in
            both professional and personal spheres fuels our commitment to
            offering practical, business-relevant education. Our mission is to
            ensure that after completing their studies, our students are able to
            step right into the world of work and excel.
          </p>
          <p className={styles.directorBody}>
            I invite you all to join us at the heart of the Mediterranean to
            start your journey of self-discovery.{" "}
            <strong>Your career starts here!</strong>
          </p>
        </div>
      </div>
    </Section>
  );
}

function Campuses() {
  return (
    <Section bg="Cream">
      <p className="section-tag">Our Campuses</p>
      <h2 className="section-title">
        Ascencia around <em>the world</em>
      </h2>
      <p className="section-subtitle">
        Discover Ascencia Business School campuses and their international
        mobility programs.
      </p>

      <div className={styles.campusGrid}>
        {[
          {
            img: PARIS_IMG,
            city: "Paris",
            desc: "Ascencia Business School and its international programs are pleased to welcome you on our vibrant Paris campus.",
          },
          {
            img: VALENCIA_IMG,
            city: "Valencia",
            desc: "Discover Mediterranean culture and business at our dynamic Valencia campus in the heart of Spain.",
          },
        ].map(({ img, city, desc }) => (
          <div key={city} className={styles.campusCard}>
            <img src={img} alt={`${city} campus`} />
            <div className={styles.campusOverlay}>
              <h3>{city}</h3>
              <p>{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Accreditations() {
  return (
    <Section bg="CreamDark" padding="Sm">
      <p className="section-tag">Accreditation & Recognition</p>
      <h2 className="section-title">
        Ascencia Malta is <em>accredited</em> by
      </h2>
      <div className={styles.accred}>
        <div className={styles.accred__block}>
          <div className={styles.accred__grid}>
            {ACCREDITED.map((src, i) => (
              <div key={i} className={styles.accred__card}>
                <img
                  className={styles.accred__img}
                  src={src}
                  alt={`Accreditation ${i + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <h2 className="section-title" style={{ marginTop: "3rem" }}>
        in <em>collaboration</em> with
      </h2>
      <div className={styles.accred}>
        <div className={styles.accred__block}>
          <div className={styles.accred__grid}>
            {COLLAB.map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.accred__collabItem}
              >
                <img
                  className={styles.accred__collabImg}
                  src={item.src}
                  alt={item.name}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
