import React from 'react';
import { CheckCircle, Clock } from 'lucide-react';
import { PageHero, CTA } from '../components/Shared.jsx';

const tiers = [
  {
    name: 'Starter',
    price: 'Free',
    priceNote: 'No credit card required',
    status: 'available',
    statusLabel: 'Available now',
    description: 'Everything you need to join the PCLoadHub marketplace today.',
    features: [
      'Pilot, broker, or carrier profile',
      'Vehicle, equipment & certification details',
      'Discoverable in the marketplace',
      'Direct contact with brokers, carriers & pilots',
    ],
  },
  {
    name: 'Pro',
    price: '~$9',
    priceNote: 'per month, estimated — not yet available',
    status: 'future',
    statusLabel: 'Future release',
    description: 'Introduced alongside the load board and additional membership features.',
    features: [
      'Everything in Starter',
      'Load board access',
      'Additional membership tools (planned)',
    ],
  },
  {
    name: 'Premium',
    price: '~$19',
    priceNote: 'per month, estimated — not yet available',
    status: 'future',
    statusLabel: 'Future release',
    description: 'Our top tier, with advanced services and capabilities still being defined.',
    features: [
      'Everything in Pro',
      'Advanced marketplace capabilities (to be determined)',
    ],
  },
];

export default function Membership() {
  return (
    <>
      <PageHero
        title="Membership"
        text="PCLoadHub is free to join and use today. Additional membership tiers are planned as the marketplace grows."
      />

      <section className="section">
        <div className="container">
          <div className="cards three membershipCards">
            {tiers.map((tier) => (
              <div key={tier.name} className={`priceCard ${tier.status === 'available' ? 'featured' : ''}`}>
                <div className={`statusPill ${tier.status}`}>
                  {tier.status === 'available' ? <CheckCircle size={14} /> : <Clock size={14} />}
                  {tier.statusLabel}
                </div>
                <p className="eyebrow">{tier.name}</p>
                <h2>{tier.price}<small>{tier.price !== 'Free' ? '/mo' : ''}</small></h2>
                <p className="priceNote">{tier.priceNote}</p>
                <p>{tier.description}</p>
                <ul className="checkList">
                  {tier.features.map((f) => (
                    <li key={f}><CheckCircle size={16} /> <span>{f}</span></li>
                  ))}
                </ul>
                {tier.status === 'available' ? (
                  <a className={tier.status === 'available' ? 'primary light' : 'primary'} href="/contact">Join Starter Free</a>
                ) : (
                  <span className="disabledBtn">Coming Soon</span>
                )}
              </div>
            ))}
          </div>
          <p className="comingSoonNote center">
            Pro and Premium pricing and features are estimates and are not final. PCLoadHub will never require
            payment information for the free Starter membership, and any future paid plan will be disclosed in
            full before you&rsquo;re asked to subscribe.
          </p>
        </div>
      </section>

      <CTA
        title="Join the free Starter plan today."
        text="No subscription charges, no credit card. Upgrade later only if a paid plan fits your business."
        actionLabel="Join Free"
        to="/contact"
      />
    </>
  );
}
