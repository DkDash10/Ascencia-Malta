import { useState } from 'react';
import styles from './ContactForm.module.css';

const INITIAL_STATE = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  programme: '',
  message: '',
};

const PROGRAMMES = [
  "Masters Degrees",
  "MBA Degrees",
  "DBA Degrees",
  "MSc Business Economics",
  "MA International Management",
  "MA Human Resource Management",
  "Bachelors Degrees",
  "BSc Computer Science",
  "Postgraduate Programmes",
  "Diploma Degrees",
  "Award Certificates",
  "English Language School",
  'Other / Not sure yet',
];

export default function ContactForm() {
  const [form, setForm]           = useState(INITIAL_STATE);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors]       = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const errs = {};
    if (!form.firstName.trim()) errs.firstName = 'Required';
    if (!form.lastName.trim())  errs.lastName  = 'Required';
    if (!form.email.trim())     errs.email     = 'Required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Invalid email';
    return errs;
  };

  const handleSubmit = () => {
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={styles.form}>
        <h3 className={styles.formHeading}>Message Sent!</h3>
        <p className={styles.formSubtitle}>We will get back to you shortly.</p>
        <div className={styles.success}>
          ✓ Thank you, <strong>{form.firstName}</strong>! Your enquiry has been received.
          Our team will respond within 24–48 business hours.
        </div>
      </div>
    );
  }

  return (
    <div className={styles.form}>
      <h3 className={styles.formHeading}>Send Us a Message</h3>
      <p className={styles.formSubtitle}>
        Fill in the form below and our team will be in touch within 24–48 hours.
      </p>
      <div className={styles.row}>
        <Field
          label="First Name *"
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
          placeholder="e.g. Maria"
          error={errors.firstName}
        />
        <Field
          label="Last Name *"
          name="lastName"
          value={form.lastName}
          onChange={handleChange}
          placeholder="e.g. Borg"
          error={errors.lastName}
        />
      </div>
      <div className={styles.row}>
        <Field
          label="Email Address *"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="you@example.com"
          error={errors.email}
        />
        <Field
          label="Phone Number"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="+356 0000 0000"
        />
      </div>
      <div className={styles.group}>
        <label>Programme of Interest</label>
        <select name="programme" value={form.programme} onChange={handleChange}>
          <option value="">— Select a programme —</option>
          {PROGRAMMES.map(p => (
            <option key={p} value={p}>{p}</option>
          ))}
        </select>
      </div>
      <div className={styles.group}>
        <label>Your Message</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your academic goals, questions, or anything you'd like to know…"
        />
      </div>

      <button className={styles.submit} type="button" onClick={handleSubmit}>
        Send Message →
      </button>
    </div>
  );
}

function Field({ label, name, type = 'text', value, onChange, placeholder, error }) {
  return (
    <div className={styles.group}>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={error ? { borderColor: '#c0392b' } : {}}
      />
      {error && (
        <span style={{ color: '#c0392b', fontSize: '0.75rem', marginTop: '0.25rem', display: 'block' }}>
          {error}
        </span>
      )}
    </div>
  );
}
