import React, { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'For Pilots', to: '/for-pilots' },
  { label: 'For Brokers & Carriers', to: '/for-brokers-carriers' },
  { label: 'How It Works', to: '/how-it-works' },
  { label: 'Membership', to: '/membership' },
  { label: 'Contact', to: '/contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
  }, [location.pathname]);

  return (
    <header className="header">
      <div className="container nav">
        <Link to="/" className="brand">
          <span className="brandMark">PC</span>
          <span>
            <strong>PCLoadHub</strong>
            <small>The Pilot Car Marketplace</small>
          </span>
        </Link>

        <nav className="desktopNav" aria-label="Primary">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === '/'} className={({ isActive }) => (isActive ? 'active' : '')}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="navActions">
          <Link to="/membership" className="navCta">Join Free</Link>
          <button className="menuBtn" onClick={() => setMobileOpen((v) => !v)} aria-label="Open menu" aria-expanded={mobileOpen}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="mobileNav">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === '/'} className={({ isActive }) => (isActive ? 'active' : '')}>
              {item.label}
            </NavLink>
          ))}
          <Link to="/membership" className="mobileCta">Join Free</Link>
        </div>
      )}
    </header>
  );
}
