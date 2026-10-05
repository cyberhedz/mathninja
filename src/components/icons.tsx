// Small social-icon glyphs for the footer — simplified shapes, not brand
// marks, drawn to sit inside a colored circle badge.
type IconProps = { size?: number };

export function FacebookIcon({ size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M12.5 6.5h-2a1 1 0 0 0-1 1V9h3l-.4 2.5H9.5V18h-2v-6.5H6V9h1.5V7.2c0-1.8 1.1-3.2 3-3.2h2v2.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function TwitterIcon({ size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M17 5.6c-.5.2-1 .4-1.6.5a2.8 2.8 0 0 0 1.2-1.5c-.5.3-1.1.6-1.8.7a2.8 2.8 0 0 0-4.8 2.5A8 8 0 0 1 4.1 4.8a2.8 2.8 0 0 0 .9 3.7c-.4 0-.9-.1-1.2-.3v.1a2.8 2.8 0 0 0 2.3 2.7c-.4.1-.8.2-1.3.1a2.8 2.8 0 0 0 2.6 2 5.6 5.6 0 0 1-3.5 1.2H3a7.9 7.9 0 0 0 4.3 1.3c5.1 0 7.9-4.3 7.9-7.9v-.4c.5-.4 1-.9 1.4-1.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function BookIcon({ size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M4 4.5A1.5 1.5 0 0 1 5.5 3H15a1 1 0 0 1 1 1v11.5a1 1 0 0 1-1 1H5.5A1.5 1.5 0 0 0 4 18V4.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M4 15.5A1.5 1.5 0 0 1 5.5 14H16" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function RssIcon({ size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="5.5" cy="14.5" r="1.7" fill="currentColor" />
      <path
        d="M4 8.5a7.5 7.5 0 0 1 7.5 7.5M4 4a12 12 0 0 1 12 12"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function PlusIcon({ size = 18 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function MinusIcon({ size = 18 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M4 10h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function MapPinIcon({ size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M10 18s6-5.7 6-10a6 6 0 1 0-12 0c0 4.3 6 10 6 10Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="10" cy="8" r="2.2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function PhoneIcon({ size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M5 3h2.3l1 3.6-1.8 1.5a9 9 0 0 0 5.4 5.4l1.5-1.8 3.6 1V16a2 2 0 0 1-2.2 2C8.9 17.6 2.4 11.1 2 4.2A2 2 0 0 1 5 3Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PencilIcon({ size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M12.5 4.5 15.5 7.5 6.5 16.5 3 17l.5-3.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M11 6 14 9" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function AtomIcon({ size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="1.6" fill="currentColor" />
      <ellipse cx="10" cy="10" rx="7.5" ry="3" stroke="currentColor" strokeWidth="1.4" />
      <ellipse
        cx="10"
        cy="10"
        rx="7.5"
        ry="3"
        stroke="currentColor"
        strokeWidth="1.4"
        transform="rotate(60 10 10)"
      />
      <ellipse
        cx="10"
        cy="10"
        rx="7.5"
        ry="3"
        stroke="currentColor"
        strokeWidth="1.4"
        transform="rotate(120 10 10)"
      />
    </svg>
  );
}

export function MailIcon({ size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M3.5 6 10 11l6.5-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function GraduationCapIcon({ size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M10 4 18 8l-8 4-8-4 8-4Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M5.5 9.5v3.2c0 1.1 2 2 4.5 2s4.5-.9 4.5-2V9.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M17.3 8.3v4.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function LightbulbIcon({ size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M10 3a5 5 0 0 0-3 9c.6.5 1 1.1 1 1.8v.2h4v-.2c0-.7.4-1.3 1-1.8a5 5 0 0 0-3-9Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M8.5 16.5h3M9 18h2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

export function LaptopIcon({ size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="4" y="4.5" width="12" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M2.5 15.5h15l-1.3-2.5h-12.4L2.5 15.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function TrophyIcon({ size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M6 4h8v4.5a4 4 0 0 1-8 0V4Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M6 5H4a2 2 0 0 0 2 3.5M14 5h2a2 2 0 0 1-2 3.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M10 12.5V15M7.5 16.5h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function SunIcon({ size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="3.6" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M10 2.5v2M10 15.5v2M17.5 10h-2M4.5 10h-2M15.3 4.7l-1.4 1.4M6.1 13.9l-1.4 1.4M15.3 15.3l-1.4-1.4M6.1 6.1 4.7 4.7"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function UsersIcon({ size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="7" cy="7" r="2.3" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="14" cy="8" r="1.8" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M2.5 16c.6-2.8 2.4-4.3 4.5-4.3s3.9 1.5 4.5 4.3M12.3 11.8c1.8 0 3.2 1.3 3.7 3.7"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
