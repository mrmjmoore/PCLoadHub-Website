import React from 'react';
import { Truck, Users, ShieldCheck, ClipboardList, Star, MessageSquare } from 'lucide-react';
import { PageHero, Feature, BenefitBlock, CTA } from '../components/Shared.jsx';

export default function ForBrokers() {
  return (
    <>
      <PageHero
        title="For Brokers & Carriers"
        text="Find pilot car operators for your oversize and overweight loads, and build a dependable network nationwide."
      />

      <section className="section">
        <div className="container">
          <div className="cards three">
            <Feature icon={<Truck />} title="Find Qualified Operators" text="Search pilot car profiles by service type, equipment, certifications, and coverage area." />
            <Feature icon={<ShieldCheck />} title="Review Before You Hire" text="See operator profiles, vehicle information, certifications, and available services before you reach out." />
            <Feature icon={<Users />} title="Build a Preferred Network" text="Keep track of the pilots you trust and work with them again for future loads." />
          </div>
        </div>
      </section>

      <section className="splitSection">
        <div className="container split">
          <BenefitBlock
            title="What you can do today"
            items={[
              'Browse pilot car operator profiles nationwide',
              'Review certifications, equipment, and service areas',
              'Connect directly with operators for lead, chase, high-pole, steer, and route survey positions',
              'Reach out to build your preferred pilot list',
            ]}
          />
          <div className="panel">
            <h3>Designed for dispatch pressure.</h3>
            <p>
              PCLoadHub is being built for real-world heavy-haul coordination &mdash; lead cars, chase cars,
              pole cars, steermen, route surveyors, certifications, rates, overnights, and availability, all in
              one place.
            </p>
            <ul className="checkList">
              <li><ClipboardList size={18} /> <span>Operator certifications & equipment on file</span></li>
              <li><Star size={18} /> <span>Preferred pilot lists</span></li>
              <li><MessageSquare size={18} /> <span>Direct operator communication</span></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="container">
          <div className="sectionHeader">
            <p className="eyebrow">Coming soon for brokers & carriers</p>
            <h2>Post loads and fill positions faster.</h2>
          </div>
          <div className="cards three">
            <Feature icon={<Truck />} title="Load Posting" text="Post escort positions and get discovered by qualified operators covering your route." />
            <Feature icon={<MessageSquare />} title="In-App Negotiation" text="Discuss rates and availability directly through PCLoadHub." />
            <Feature icon={<ShieldCheck />} title="Payment Tracking" text="Visibility into rates and payment status across jobs and operators." />
          </div>
          <p className="comingSoonNote">These features are planned and not yet available. Starter membership is free today &mdash; no credit card required.</p>
        </div>
      </section>

      <CTA
        title="Build your preferred pilot network."
        text="Join PCLoadHub free as a broker or carrier and start connecting with qualified pilot car operators."
        actionLabel="Join as a Broker"
        to="/contact"
      />
    </>
  );
}
