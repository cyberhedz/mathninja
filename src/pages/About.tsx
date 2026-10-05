import { PageHero } from '../components/PageHero';
import historyImg from '../assets/images/history.jpg';
import visionImg from '../assets/images/vision.jpg';
import { team, missionGoals } from '../data/content';
import styles from './About.module.css';

export function About() {
  return (
    <div>
      <PageHero
        background="var(--color-purple)"
        title="About Math Ninja"
        subtitle="Math Ninja is striving to make all children succeed in math, by making them a math warrior."
      />

      <div className={`container ${styles.content}`}>
        <section className={styles.row}>
          <div>
            <h2 className={styles.heading}>Our History</h2>
            <p>
              Math Ninja was founded in San Francisco, CA in 2017. Our founder has been in the
              high-tech business in Silicon Valley and saw the current trend of employment.
              While the qualified engineers are mostly from overseas, we found that American
              elementary school-aged children need to catch up on the level of math skills their
              counterparts possess in other industrial and emerging countries, to be more
              competitive. To improve their basic math skills we utilize the Soroban to teach
              calculation and mental calculation. The Japanese abacus, called "Soroban," was
              modified into a modern configuration — five beads in each column, one bead in the
              upper deck and four beads in the lower deck. The Soroban/abacus helps perform
              mainly addition, subtraction, multiplication, and division.
            </p>
          </div>
          <img src={historyImg} alt="A student practicing math calculations at a chalkboard" className={styles.photo} />
        </section>

        <section className={styles.rowReverse}>
          <div>
            <h2 className={styles.heading}>Our Vision</h2>
            <p>
              The soroban has been an excellent educational tool for children to visualize
              numbers. In addition, practicing soroban gives people an opportunity to develop
              their mental calculation ability. After mastering the soroban, the student will
              not need a calculator and becomes capable of calculating numbers by visualizing
              soroban beads. By cultivating the ability of mental calculating skills in
              pre-school and elementary students, they have a better understanding of more
              complex problems in math by developing great concentration. As a result, they have
              a good school record not only in math but also in other subjects. Soroban is not
              just a calculation tool, but an excellent instructional tool itself.
            </p>
          </div>
          <img src={visionImg} alt="A student writing math equations on a chalkboard" className={styles.photo} />
        </section>

        <section className={styles.mission}>
          <h2 className={styles.heading}>Our Mission</h2>
          <p>
            Math Ninja is striving to make all children succeed in math, by making them a math
            warrior — so that no child needs to struggle with math fatigue. We provide a
            gamification element of fun to mental calculation. We believe that if a child
            succeeds in math, they gain the self-confidence to achieve higher in other subjects
            academically, and become a contributing member of society.
          </p>
          <p className={styles.goalsLabel}>Math Ninja's goals:</p>
          <ul className={styles.goals}>
            {missionGoals.map((goal) => (
              <li key={goal}>{goal}</li>
            ))}
          </ul>
        </section>
      </div>

      <section className={styles.teamSection}>
        <div className="container">
          <h2 className={styles.teamHeading}>Our Team</h2>
          <div className={styles.teamGrid}>
            {team.map((member) => (
              <div key={member.name} className={styles.teamCard}>
                <img src={member.photo} alt={member.name} className={styles.teamPhoto} />
                <h3 className={styles.teamName}>{member.name}</h3>
                <p className={styles.teamTitle}>{member.title}</p>
                <p className={styles.teamBio}>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
