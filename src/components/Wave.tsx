import styles from './Wave.module.css';

/** The wavy edge every hero section on the live site has where it meets the
 * white page body below it. */
export function Wave({ fill = '#ffffff' }: { fill?: string }) {
  return (
    <svg
      className={styles.wave}
      viewBox="0 0 1440 90"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0,32 C220,90 420,0 720,34 C1020,68 1220,4 1440,36 L1440,90 L0,90 Z"
        fill={fill}
      />
    </svg>
  );
}
