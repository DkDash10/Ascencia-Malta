import { useNavigate } from 'react-router-dom';
import Section from '../common/Section';
import Button  from '../common/Button';
import styles  from './Values.module.css';
import { IoGlobeSharp } from "react-icons/io5";
import { FaGoogleScholar } from "react-icons/fa6";
import { FaMoneyCheckAlt } from "react-icons/fa";

const VALUES = [
  {
    icon: <IoGlobeSharp />,
    num: '01',
    name: 'Openness to International Markets',
    desc: 'Our programs have been specifically designed to host international students and enable them to complete internships in English or study abroad — placing them at the heart of the international system.',
  },
  {
    icon: <FaGoogleScholar />,
    num: '02',
    name: 'Teaching Excellence',
    desc: 'All Ascencia member schools are recognised in their specialised domains. The faculty comprises an academic lecturing body and the very best professional players. All programs lead to state-recognised certifications.',
  },
  {
    icon: <FaMoneyCheckAlt />,
    num: '03',
    name: 'Job Access',
    desc: 'Because each training course corresponds to a personal ambition, all our students receive individual attention. The success of each student is our priority — our teams accompany each student in realising their project.',
  },
];

export default function Values() {
  const navigate = useNavigate();

  return (
    <>
      <Section bg="Cream">
        <p className="section-tag">Core Values</p>
        <h2 className="section-title">What we <em>stand for</em></h2>
        <p className="section-subtitle">
          Three pillars define the Ascencia experience and guide everything we do
          for our students, faculty, and partners.
        </p>

        <div className={styles.grid}>
          {VALUES.map(({ icon, num, name, desc }) => (
            <div key={num} className={styles.card}>
              <span className={styles.num}>{num}</span>
              <div className={styles.icon}>{icon}</div>
              <h3 className={styles.name}>{name}</h3>
              <p className={styles.desc}>{desc}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section bg="Navy" padding="Md">
        <div className={styles.missionBanner}>
          <p className="section-tag" style={{ justifyContent: 'center' }}>Our Commitment</p>
          <h2 className="section-title" style={{ color: '#ffffff', margin: '0 auto 2rem' }}>
            Some <em>special teachers</em> from the Industry!
          </h2>
          <p>
            At Ascencia Malta, you’ll experience a friendly and welcoming student-centred learning environment
          </p>
          <p>
           Our lecturers, many entrepreneurs themselves, provide learners with the opportunity to build their professional and academic qualifications through a career path that meets their interests and aspirations in their chosen career.
          </p>
          <p>
            Ascencia Malta lecturers support, mentor and guide you through the skills, knowledge and practical work experience to achieve your goals.
          </p>
          <Button variant="primary" onClick={() => navigate('/contact')} style={{ marginTop: '0.5rem' }}>
            Start Your Journey
          </Button>
        </div>
      </Section>
    </>
  );
}
