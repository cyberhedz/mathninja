import { BookIcon, FacebookIcon, RssIcon, TwitterIcon } from './icons';
import styles from './Footer.module.css';

const YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.copy}>
          © {YEAR} Cyberhedz Media LLC &nbsp;|&nbsp; Terms &amp; Conditions &nbsp;|&nbsp; Privacy
        </p>
        <div className={styles.social} aria-label="Social links">
          <a href="#" aria-label="Facebook" className={`${styles.socialLink} ${styles.facebook}`}>
            <FacebookIcon />
          </a>
          <a href="#" aria-label="Twitter" className={`${styles.socialLink} ${styles.twitter}`}>
            <TwitterIcon />
          </a>
          <a
            href="https://www.amazon.com/Black-Rock-improve-health-relationships/dp/B087CP7H8Z"
            target="_blank"
            rel="noreferrer"
            aria-label="Our book on Amazon"
            className={`${styles.socialLink} ${styles.amazon}`}
          >
            <BookIcon />
          </a>
          <a href="#" aria-label="RSS" className={`${styles.socialLink} ${styles.rss}`}>
            <RssIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
