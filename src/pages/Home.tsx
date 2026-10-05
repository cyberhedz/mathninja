import mascot from '../assets/images/mascot.png';
import chart from '../assets/images/chart.png';
import { Wave } from '../components/Wave';
import { ScheduleCallButton } from '../components/ScheduleCallButton';
import styles from './Home.module.css';

export function Home() {
  return (
    <div>
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <img
            src={mascot}
            alt="The Math Ninja mascot, a round character with plus, minus, times, and divide symbols for a face, holding an abacus"
            className={styles.mascot}
          />
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>A small change can make a big impact on math</h1>
            <a href="#stats" className="btn btn-primary">
              Learn more
            </a>
          </div>
        </div>
        <Wave />
      </section>

      <section id="stats" className={`container ${styles.stats}`}>
        <div className={styles.statsText}>
          <h2 className={styles.statsHeading}>America is struggling at math</h2>
          <h3 className={styles.statsSubheading}>We can change that…</h3>
          <p>
            The data in the OECD shows that the U.S. ranked 32nd out of 38 countries, using the
            mean scores of the math tests in Mathematics performance (PISA), in 2015. At the
            same time, the U.S. ranks fifth in spending per student. How seriously should we
            take these dismal findings? We want to make a simple and small change to brighten
            our children's future.
          </p>
        </div>
        <div className={styles.statsChart}>
          <img
            src={chart}
            alt="Chart comparing mean PISA math scores across OECD countries, with the United States highlighted near the bottom"
          />
          <p className={styles.chartCaption}>
            Mathematical performance, for PISA, measures the mathematical literacy of a
            15-year-old to formulate, employ and interpret mathematics in a variety of contexts
            to describe, predict and explain phenomena, recognizing the role that mathematics
            plays in the world. The mean score is the measure. A mathematically literate student
            recognizes the role that mathematics plays in the world in order to make
            well-founded judgments and decisions needed by constructive, engaged and reflective
            citizens.
          </p>
        </div>
      </section>

      <section className="container">
        <div className={styles.ctaCard}>
          <h2 className={styles.ctaTitle}>Try Math Ninja</h2>
          <ScheduleCallButton label="Schedule a call" />
        </div>
      </section>
    </div>
  );
}
