import { useEffect } from 'react';
import PageHero     from '../components/about/PageHero';
import ContactInfo  from '../components/contact/ContactInfo';
import ContactForm  from '../components/contact/ContactForm';
import Departments  from '../components/contact/Departments';
import Section      from '../components/common/Section';
import styles       from './Contact.module.css';

const CONTACT_IMG =
  "https://www.ascencia-business-school.mt/wp-content/uploads/2023/01/malta-ascencia-bs.jpg";

export default function Contact() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="page-wrapper">
      <PageHero
        page="Contact Us"
        heading="Get in <em>Touch</em>"
        lead="We are always happy to hear from prospective students, partners, and anyone curious about studying in Malta. Reach out — we will respond promptly."
        bgUrl={CONTACT_IMG}
      />
      <Section bg="Cream" padding="Md">
        <div className={styles.contactLayout}>
          <ContactForm />
          <ContactInfo />
        </div>
      </Section>
      <Departments />
    </div>
  );
}
