import React from 'react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/Shared.jsx';

export default function NotFound() {
  return (
    <PageHero title="Page Not Found" text="The page you're looking for doesn't exist or may have moved.">
      <Link className="primary" to="/">Back to Home</Link>
    </PageHero>
  );
}
