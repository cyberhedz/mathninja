import { PageHero } from '../components/PageHero';
import { Accordion } from '../components/Accordion';
import { ScheduleCallButton } from '../components/ScheduleCallButton';
import { AtomIcon, PencilIcon } from '../components/icons';
import { programCategories, programs, getInvolvedFaq, testimonials } from '../data/content';
import styles from './GetInvolved.module.css';

export function GetInvolved() {
  return (
    <div>
      <PageHero
        background="var(--color-pink)"
        title="Get Involved"
        cta={<ScheduleCallButton label="Get started now" />}
      />

      <div className={`container ${styles.categories}`}>
        {programCategories.map((cat, i) => (
          <div key={cat.label} className={styles.categoryRow}>
            <div
              className={styles.categoryIcon}
              style={{ background: i === 0 ? 'var(--color-purple)' : 'var(--color-pink)' }}
            >
              {i === 0 ? <PencilIcon /> : <AtomIcon />}
            </div>
            <span className={styles.categoryLabel}>{cat.label}</span>
            <p className={styles.categoryCopy}>{cat.copy}</p>
          </div>
        ))}
      </div>

      <div className={`container ${styles.programs}`}>
        {programs.map((program) => (
          <div key={program.name} className={styles.program}>
            <div className={styles.programInfo}>
              <h2 className={styles.programName}>{program.name}</h2>
              <div className={styles.programButtons}>
                <button type="button" className={styles.detailBtn}>
                  Detailed curriculum
                </button>
                <button type="button" className={styles.scheduleBtn}>
                  Daily schedule
                </button>
              </div>
            </div>
            <div>
              <p className={styles.programDescription}>{program.description}</p>
              <ul className={styles.programBullets}>
                {program.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className={`container ${styles.faqSection}`}>
        <h2 className={styles.faqHeading}>F.A.Q.</h2>
        <div className={styles.faqColumns}>
          <Accordion items={getInvolvedFaq.slice(0, 5)} />
          <Accordion items={getInvolvedFaq.slice(5)} />
        </div>
      </div>

      <div className="container">
        <div className={styles.testimonials}>
          <h2 className={styles.testimonialsHeading}>What Our Families are Saying</h2>
          <div className={styles.testimonialGrid}>
            {testimonials.map((t, i) => (
              <blockquote key={i} className={styles.testimonial}>
                <p>"{t.quote}"</p>
                <footer>— {t.author}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
