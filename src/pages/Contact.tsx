import { useState, type FormEvent } from 'react';
import { PageHero } from '../components/PageHero';
import { Accordion } from '../components/Accordion';
import { NewsletterForm } from '../components/NewsletterForm';
import { MailIcon, MapPinIcon, PhoneIcon } from '../components/icons';
import { applyFaq } from '../data/content';
import type { AdmissionInquiry } from '../types';
import styles from './Contact.module.css';

const EMPTY_INQUIRY: AdmissionInquiry = {
  parentName: '',
  parentPhone: '',
  parentEmail: '',
  childName: '',
  childBirthdate: '',
  interestedIn: '',
  anticipatedStart: '',
  message: '',
};

export function Contact() {
  const [inquiry, setInquiry] = useState<AdmissionInquiry>(EMPTY_INQUIRY);
  const [sent, setSent] = useState(false);

  function update<K extends keyof AdmissionInquiry>(key: K, value: string) {
    setInquiry((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div>
      <PageHero
        background="var(--color-seafoam)"
        title="Contact Us"
        subtitle="Questions about admissions, tuition, or our program? Reach out and we'll get back to you."
        cta={
          <a href="#apply" className="btn btn-primary">
            Apply now
          </a>
        }
      />

      <div className={`container ${styles.info}`}>
        <div>
          <h2 className={styles.infoHeading}>Contact Us</h2>
          <p className={styles.infoLine}>
            <MapPinIcon /> 1234 Divi St. #1000, San Francisco, CA 93152
          </p>
          <p className={styles.infoLine}>
            <PhoneIcon /> (135) 135-1242
          </p>
          <p className={styles.infoLine}>
            <MailIcon /> info@dividaycare.com
          </p>
        </div>
        <div>
          <h2 className={styles.infoHeading}>Hours</h2>
          <p className={styles.plain}>Mon–Friday: 7:30am – 3:00pm</p>
          <p className={styles.plain}>Child Drop Off: 7:00am – 7:30am</p>
          <p className={styles.plain}>Child Pickup: 3:00pm – 3:30pm</p>
        </div>
        <div>
          <h2 className={styles.infoHeading}>Tuition</h2>
          <p className={styles.plain}>
            Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla porttitor
            accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit.
          </p>
        </div>
      </div>

      <div className="container">
        <div className={styles.mapPlaceholder} role="img" aria-label="Map showing our San Francisco location">
          <MapPinIcon size={28} />
          <span>1234 Divi St. #1000, San Francisco, CA</span>
        </div>
      </div>

      <div id="apply" className={`container ${styles.applyRow}`}>
        <div>
          <h2 className={styles.applyHeading}>How to Apply</h2>
          <Accordion items={applyFaq} />
        </div>

        <div>
          <h2 className={styles.applyHeading}>Admission Inquiry</h2>
          {sent ? (
            <p className={styles.confirmation}>
              Thanks — your inquiry was received. (Demo only — this doesn't send anywhere yet.)
            </p>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <input
                className={styles.input}
                placeholder="Parent's Name"
                aria-label="Parent's name"
                required
                value={inquiry.parentName}
                onChange={(e) => update('parentName', e.target.value)}
              />
              <input
                className={styles.input}
                placeholder="Parent's Phone"
                aria-label="Parent's phone"
                value={inquiry.parentPhone}
                onChange={(e) => update('parentPhone', e.target.value)}
              />
              <input
                className={styles.input}
                type="email"
                placeholder="Parent's Email Address"
                aria-label="Parent's email address"
                required
                value={inquiry.parentEmail}
                onChange={(e) => update('parentEmail', e.target.value)}
              />
              <input
                className={styles.input}
                placeholder="Child's Name"
                aria-label="Child's name"
                value={inquiry.childName}
                onChange={(e) => update('childName', e.target.value)}
              />
              <input
                className={styles.input}
                placeholder="Child's Birthdate"
                aria-label="Child's birthdate"
                value={inquiry.childBirthdate}
                onChange={(e) => update('childBirthdate', e.target.value)}
              />
              <input
                className={styles.input}
                placeholder="Interested In"
                aria-label="Interested in"
                value={inquiry.interestedIn}
                onChange={(e) => update('interestedIn', e.target.value)}
              />
              <input
                className={styles.input}
                placeholder="Anticipated Start Date"
                aria-label="Anticipated start date"
                value={inquiry.anticipatedStart}
                onChange={(e) => update('anticipatedStart', e.target.value)}
              />
              <textarea
                className={styles.textarea}
                placeholder="Message"
                aria-label="Message"
                value={inquiry.message}
                onChange={(e) => update('message', e.target.value)}
              />
              <button type="submit" className={styles.submit}>
                Submit
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="container">
        <div className={styles.newsletter}>
          <h2 className={styles.newsletterHeading}>Join Our Newsletter</h2>
          <NewsletterForm />
        </div>
      </div>
    </div>
  );
}
