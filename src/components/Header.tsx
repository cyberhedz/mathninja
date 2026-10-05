import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import styles from './Header.module.css';

const LINKS = [
  { to: '/about-math-ninja', label: 'About Math Ninja' },
  { to: '/get-involved', label: 'Get Involved' },
  { to: '/contact', label: 'Contact' },
  { to: '/blog', label: 'Blog' },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.bar}`}>
        <Link to="/" className={styles.logo} onClick={() => setOpen(false)}>
          <img src={logo} alt="Math Ninja" className={styles.logoImg} />
        </Link>

        <nav className={styles.nav} aria-label="Primary">
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className={styles.menuToggle}
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {open && (
        <nav className={styles.mobileNav} aria-label="Primary mobile">
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={styles.mobileLink}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
