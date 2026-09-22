import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, ShieldCheck, Users, MapPin, ArrowRight, Radio, Milestone, Compass, MessageSquare, CreditCard, Smartphone } from 'lucide-react';
import { Feature, BenefitBlock, CTA, RouteGraphic } from '../components/Shared.jsx';

const escortTypes = [
  { icon: <Truck />, label: 'Lead Car' },
  { icon: <Radio />, label: 'Chase Car' },
  { icon: <Milestone />, label: 'High-Pole Escort' },
  { icon: <Compass />, label: 'Steer Car' },
  { icon: <MapPin />, label: 'Route Survey' },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <RouteGraphic className="routeGraphic" />
        <div className="container heroGrid">
          <div>
            <p className="eyebrow">The Pilot Car Marketplace</p>
            <h1>Find pilots. Cover loads.</h1>
            <p className="subhead">
              PCLoadHub brings pilot car operators, heavy-haul carriers, and freight brokers together in one
              nationwide marketplace built specifically for the oversize and overweight transportation industry.
            </p>
            <div className="heroActions">
              <Link className="primary" to="/contact">Join as a Pilot <ArrowRight size={18} /></Link>
              <Link className="secondary" to="/contact">Join as a Broker</Link>
            </div>
            <p className="heroFineprint">Free to join. No credit card required.</p>
          </div>
          <div className="heroCard">
            <div className="statusRow"><span></span> Marketplace Status</div>
            <h2>Now Building the Network</h2>
            <p>
              Create your operator or broker profile today. Load posting, in-app messaging, negotiation tools,
              and preferred pilot lists are rolling out as PCLoadHub launches.
            </p>
            <div className="miniStats">
              <div><strong>50</strong><small>States</small></div>
              <div><strong>5</strong><small>Escort Types</small></div>
              <div><strong>1</strong><small>Marketplace</small></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sectionHeader">
            <p className="eyebrow">Why PCLoadHub</p>
            <h2>Finding a qualified escort shouldn&rsquo;t take hours of phone calls.</h2>
            <p className="sectionLede">
              No more scattered text threads and social media groups. PCLoadHub gives pilot car operators a
              place to showcase their vehicle, qualifications, certifications, and availability &mdash; and gives
              brokers and carriers a faster way to find the operators they need.
            </p>
          </div>
          <div className="cards three">
            <Feature icon={<ShieldCheck />} title="Showcase Qualifications" text="Pilots display their escort vehicle, equipment, certifications, licenses, and service areas in one professional profile." />
            <Feature icon={<Users />} title="Connect Directly" text="Brokers and carriers connect with the operators they need for lead, chase, high-pole, steer, and route survey positions." />
            <Feature icon={<Truck />} title="Built for Heavy-Haul" text="Every part of PCLoadHub is designed around how oversize and overweight loads actually move." />
          </div>
        </div>
      </section>

      <section className="section escortStrip">
        <div className="container">
          <p className="eyebrow center">Every position, one marketplace</p>
          <div className="escortRow">
            {escortTypes.map((e) => (
              <div className="escortPill" key={e.label}>{e.icon}<span>{e.label}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section className="splitSection">
        <div className="container split">
          <BenefitBlock
            title="For Pilot Car Operators"
            items={[
              'Create a professional profile that makes it easier for brokers and carriers to find you',
              'Showcase your escort vehicle, equipment, certifications, and the services you provide',
              'Connect with potential customers and build relationships with brokers and carriers nationwide',
            ]}
          />
          <BenefitBlock
            title="For Brokers & Carriers"
            items={[
              'Find pilot car operators for your oversize and overweight loads',
              'Review operator profiles, vehicle information, certifications, and available services',
              'Connect with operators for lead, chase, high-pole, steer, and route survey positions',
              'Build your preferred pilot network and simplify how you cover loads',
            ]}
          />
        </div>
      </section>

      <section className="section dark">
        <div className="container">
          <div className="sectionHeader">
            <p className="eyebrow">Built for the heavy-haul industry</p>
            <h2>One place for load posting, matching, and communication.</h2>
            <p className="sectionLede">
              PCLoadHub is being developed specifically for the needs of pilot car operators and the companies
              that hire them. Our long-term goal is to bring load posting, pilot car matching, communication,
              payment tracking, and additional services together in one platform.
            </p>
          </div>
          <div className="cards three">
            <Feature icon={<MessageSquare />} title="In-App Messaging" text="Direct communication between pilots and the brokers and carriers who need them." />
            <Feature icon={<Truck />} title="Load Board" text="Brokers and carriers post loads; pilots find and respond to available work." />
            <Feature icon={<CreditCard />} title="Payment Tracking" text="Visibility into rates and payment status between operators and the companies hiring them." />
          </div>
          <p className="comingSoonNote">These features are on our roadmap and are not yet available. Starter membership is free today.</p>
        </div>
      </section>

      <section className="section">
        <div className="container appTeaser">
          <div>
            <p className="eyebrow">Mobile apps</p>
            <h2>PCLoadHub is coming to Android and iOS.</h2>
            <p className="sectionLede">Our Android app is currently in closed testing, with iOS to follow. Join now on the web so your profile is ready when the apps launch.</p>
          </div>
          <div className="appTeaserBadges">
            <span className="appBadge large"><Smartphone size={18} /> Google Play &mdash; Coming Soon</span>
            <span className="appBadge large"><Smartphone size={18} /> App Store &mdash; Coming Soon</span>
          </div>
        </div>
      </section>

      <CTA
        title="One marketplace. More connections. Better opportunities."
        text="Join PCLoadHub free and be ready as the pilot car marketplace launches nationwide."
      />
    </>
  );
}
