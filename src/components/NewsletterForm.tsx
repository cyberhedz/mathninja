import { useState, type FormEvent } from 'react';
import styles from './NewsletterForm.module.css';

/** No real mailing-list backend yet — submitting shows an inline
 * confirmation instead of silently discarding the input. */
export function NewsletterForm({ compact = false }: { compact?: boolean }) {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className={styles.confirmation}>
        Thanks{name ? `, ${name}` : ''} — you're on the list. (Demo only — no mailing list is
        connected yet.)
      </p>
    );
  }

  return (
    <form className={`${styles.form} ${compact ? styles.compact : ''}`} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        aria-label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={styles.input}
      />
      <input
        type="email"
        placeholder="Email"
        aria-label="Email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={styles.input}
      />
      <button type="submit" className={styles.submit}>
        Subscribe
      </button>
    </form>
  );
}
