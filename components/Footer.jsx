import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, Smartphone } from 'lucide-react';

const platformLinks = [
  { label: 'For Pilots', to: '/for-pilots' },
  { label: 'For Brokers & Carriers', to: '/for-brokers-carriers' },
  { label: 'How It Works', to: '/how-it-works' },
  { label: 'Membership', to: '/membership' },
  { label: 'Contact', to: '/contact' },
];

const legalLinks = [
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Terms & Conditions', to: '/terms-and-conditions' },
  { label: 'Delete Account', to: '/delete-account' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footerGrid">
        <div className="footerBrand">
          <div className="footerLogo">
            <span className="brandMark small"><Truck size={18} /></span>
            <strong>PCLoadHub</strong>
          </div>
          <p>The Pilot Car Marketplace &mdash; connecting pilot car operators, heavy-haul carriers, and freight brokers nationwide.</p>
          <div className="appBadges">
            <span className="appBadge"><Smartphone size={16} /> App Store &mdash; Coming Soon</span>
            <span className="appBadge"><Smartphone size={16} /> Google Play &mdash; Coming Soon</span>
          </div>
        </div>

        <div>
          <h4>Platform</h4>
          {platformLinks.map((item) => (
            <Link key={item.to} to={item.to}>{item.label}</Link>
          ))}
        </div>

        <div>
          <h4>Legal</h4>
          {legalLinks.map((item) => (
            <Link key={item.to} to={item.to}>{item.label}</Link>
          ))}
        </div>
      </div>
      <div className="container copyright">
        &copy; {new Date().getFullYear()} PCLoadHub. All rights reserved.
      </div>
    </footer>
  );
}
