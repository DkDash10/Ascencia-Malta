import Section from '../common/Section';
import styles  from './Pedagogy.module.css';

const STUDENT_IMG = 'https://www.ascencia-business-school.mt/wp-content/uploads/2022/12/etudiante-ascencia.jpg';

export default function Pedagogy() {
  return (
    <Section bg="White">
      <div className={styles.grid}>
        <div className={styles.text}>
          <p className="section-tag">Our Approach</p>
          <h2 className="section-title">
            A participative &amp; <em>innovative</em> pedagogy
          </h2>
          <p className={`section-subtitle ${styles.subtitle}`}>
            Our training courses are based on a participative and innovative pedagogy based on the value of the example and the constant exchange between learners and experienced professionals. The realities of corporate life are at the heart of the personalized learning methods we use. They are intended to identify potentials and to hatch vocations of managers and business developers. Our campus is also open to all international candidates who wish to study management in Malta.
          </p>

          <div className={styles.missionBox}>
            <h4>Our Mission</h4>
            <p>
              At Ascencia Malta, we empower students through a student-centered approach that fosters critical thinking, creativity, and lifelong learning. We deliver high-quality education that meets rigorous standards and prepares graduates for success in a dynamic world. Together with our partnered stakeholders, we are dedicated to developing socially responsible leaders who champion diversity, inclusion, and equity, creating meaningful impact within our diverse community. 
            </p>
          </div>
        </div>
        <div className={styles.imgWrap}>
          <img src={STUDENT_IMG} alt="Student at Ascencia Malta" />
        </div>

      </div>
    </Section>
  );
}
