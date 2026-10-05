import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <div className="container section" style={{ paddingBottom: '96px' }}>
      <h1>Page not found</h1>
      <p style={{ color: 'var(--color-muted)', marginTop: 'var(--space-3)' }}>
        <Link to="/">Back to home</Link>
      </p>
    </div>
  );
}
