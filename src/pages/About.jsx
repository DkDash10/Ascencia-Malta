import { useEffect } from "react";
import PageHero from "../components/about/PageHero";
import Pedagogy from "../components/about/Pedagogy";
import Values from "../components/about/Values";
import Partners from "../components/common/Partners";

const STUDENT_IMG =
  "https://www.ascencia-business-school.mt/wp-content/uploads/2022/12/etudiante-ascencia.jpg";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-wrapper">
      <PageHero
        page="About Us"
        heading="We are eager to give you<br />the <em>best education</em>"
        lead="Ascencia’s ambition is to realize your potential of ascension. Through an individualized follow-up of the students, our teams are at your service for your future: come and present us your projects, and we will do our best to help you realize them."
        bgUrl={STUDENT_IMG}
      />
      <Pedagogy />
      <Values />
      <Partners/>
    </div>
  );
}
