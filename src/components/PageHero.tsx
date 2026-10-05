import type { ReactNode } from 'react';
import { Wave } from './Wave';
import styles from './PageHero.module.css';

interface Props {
  background: string;
  title: string;
  subtitle?: string;
  cta?: ReactNode;
}

/** The centered title + subtitle + button banner used by About, Get
 * Involved, Contact, and Blog — each page just swaps the background color. */
export function PageHero({ background, title, subtitle, cta }: Props) {
  return (
    <section className={styles.hero} style={{ background }}>
      <div className={`container ${styles.inner}`}>
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        {cta}
      </div>
      <Wave />
    </section>
  );
}
