import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';

export function PageHero({ eyebrow = 'PCLoadHub', title, text, children }) {
  return (
    <section className="pageHero">
      <RouteGraphic className="routeGraphic" />
      <div className="container pageHeroInner">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {text && <p>{text}</p>}
        {children}
      </div>
    </section>
  );
}

export function Feature({ icon, title, text }) {
  return (
    <div className="feature">
      <div className="icon">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

export function BenefitBlock({ title, items }) {
  return (
    <div className="panel">
      <h3>{title}</h3>
      <ul className="checkList">
        {items.map((item) => (
          <li key={item}><CheckCircle size={18} /> <span>{item}</span></li>
        ))}
      </ul>
    </div>
  );
}

export function CTA({ title, text, actionLabel = 'Get Started Free', to = '/membership' }) {
  return (
    <section className="cta">
      <div className="container ctaBox">
        <h2>{title}</h2>
        <p>{text}</p>
        <Link className="primary" to={to}>{actionLabel} <ArrowRight size={18} /></Link>
      </div>
    </section>
  );
}

export function Step({ number, title, text }) {
  return (
    <div className="step">
      <div className="stepNumber">{number}</div>
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

export function Badge({ children, tone = 'default' }) {
  return <span className={`badge badge-${tone}`}>{children}</span>;
}

/* Abstract route line with waypoints — stands in for photography,
   used across hero sections so the brand doesn't depend on hotlinked stock photos. */
export function RouteGraphic({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 1200 400" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M-20 340 C 220 340, 260 120, 480 120 S 740 300, 980 220 S 1180 60, 1240 60"
        stroke="url(#routeGrad)" strokeWidth="3" strokeDasharray="2 14" strokeLinecap="round" />
      <circle cx="-20" cy="340" r="6" fill="#f59e0b" />
      <circle cx="480" cy="120" r="6" fill="#f59e0b" opacity="0.85" />
      <circle cx="980" cy="220" r="6" fill="#f59e0b" opacity="0.7" />
      <circle cx="1240" cy="60" r="8" fill="#f59e0b" />
      <defs>
        <linearGradient id="routeGrad" x1="0" y1="0" x2="1200" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f59e0b" stopOpacity="0.15" />
          <stop offset="0.5" stopColor="#f59e0b" stopOpacity="0.55" />
          <stop offset="1" stopColor="#f59e0b" stopOpacity="0.85" />
        </linearGradient>
      </defs>
    </svg>
  );
}
