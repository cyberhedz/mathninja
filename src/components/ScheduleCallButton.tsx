import { useState } from 'react';

/** The live site's "Schedule A Call" / "Apply Now" buttons don't go
 * anywhere real yet (no booking backend behind this rebuild) — clicking
 * shows an inline confirmation instead of silently doing nothing. */
export function ScheduleCallButton({ label }: { label: string }) {
  const [clicked, setClicked] = useState(false);

  if (clicked) {
    return (
      <p style={{ color: 'inherit', fontWeight: 600 }}>
        Thanks! We'll reach out to schedule a time. (Demo only — no booking system yet.)
      </p>
    );
  }

  return (
    <button type="button" className="btn btn-primary" onClick={() => setClicked(true)}>
      {label}
    </button>
  );
}
