import React from 'react';
import { ShieldCheck, Users, Star, FileCheck, MapPin, MessageSquare } from 'lucide-react';
import { PageHero, Feature, BenefitBlock, CTA } from '../components/Shared.jsx';

export default function ForPilots() {
  return (
    <>
      <PageHero
        title="For Pilot Car Operators"
        text="Create your professional profile and make it easier for brokers and carriers to find you."
      />

      <section className="section">
        <div className="container">
          <div className="cards three">
            <Feature icon={<ShieldCheck />} title="Showcase Your Business" text="Display your escort vehicle, equipment, certifications, licenses, and the services you provide in one professional profile." />
            <Feature icon={<Users />} title="Connect With Brokers & Carriers" text="Communicate about available work and build relationships with the companies that hire pilot car operators nationwide." />
            <Feature icon={<Star />} title="Build Your Reputation" text="A consistent, professional profile helps you stand out and get called back for repeat work." />
          </div>
        </div>
      </section>

      <section className="splitSection">
        <div className="container split">
          <BenefitBlock
            title="What you can do today"
            items={[
              'Create a professional operator profile',
              'List your escort vehicle, equipment, and service area',
              'Add certifications, licenses, and qualifications',
              'Get discovered by brokers and carriers searching for pilots',
            ]}
          />
          <div className="panel">
            <h3>Every position you run.</h3>
            <p>Whether you provide lead car, chase car, high-pole escort, steer car, or route survey services, your profile shows brokers and carriers exactly what you offer and where you cover.</p>
            <ul className="checkList">
              <li><FileCheck size={18} /> <span>Certifications & expiration tracking</span></li>
              <li><MapPin size={18} /> <span>Service area & availability</span></li>
              <li><MessageSquare size={18} /> <span>Direct communication with hirers</span></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="container">
          <div className="sectionHeader">
            <p className="eyebrow">Coming soon for pilots</p>
            <h2>More ways to find and manage work.</h2>
          </div>
          <div className="cards three">
            <Feature icon={<MessageSquare />} title="Load Board Access" text="Browse and respond to loads posted by brokers and carriers." />
            <Feature icon={<Star />} title="Preferred Pilot Status" text="Get added to a broker or carrier's preferred pilot list for repeat work." />
            <Feature icon={<ShieldCheck />} title="Rate & Payment Tracking" text="Keep a record of negotiated rates and payment status by job." />
          </div>
          <p className="comingSoonNote">These features are planned and not yet available. Starter membership is free today &mdash; no credit card required.</p>
        </div>
      </section>

      <CTA
        title="Ready to build your profile?"
        text="Join PCLoadHub free as a pilot car operator and get ready to connect with brokers and carriers nationwide."
        actionLabel="Join as a Pilot"
        to="/contact"
      />
    </>
  );
}
