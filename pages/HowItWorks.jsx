import React from 'react';
import { UserPlus, FileCheck2, Search, MessageCircle, Handshake } from 'lucide-react';
import { PageHero, Step, CTA } from '../components/Shared.jsx';

export default function HowItWorks() {
  return (
    <>
      <PageHero
        title="How It Works"
        text="PCLoadHub is designed to simplify the process of finding the right operator for the job."
      />

      <section className="section">
        <div className="container">
          <div className="sectionHeader">
            <p className="eyebrow">For Pilot Car Operators</p>
            <h2>From sign-up to getting found.</h2>
          </div>
          <div className="steps">
            <Step number="1" title="Create a free account" text="Sign up as a pilot car operator at no cost. No credit card required." />
            <Step number="2" title="Build your profile" text="Add your escort vehicle, equipment, certifications, licenses, service area, and availability." />
            <Step number="3" title="Get discovered" text="Brokers and carriers search the marketplace and review your profile when they need an operator." />
            <Step number="4" title="Connect & work" text="Communicate directly with brokers and carriers about available jobs and build repeat relationships." />
          </div>
        </div>
      </section>

      <section className="splitSection">
        <div className="container">
          <div className="sectionHeader">
            <p className="eyebrow">For Brokers & Carriers</p>
            <h2>From search to covered load.</h2>
          </div>
          <div className="steps">
            <Step number="1" title="Create a free account" text="Sign up as a broker or carrier at no cost." />
            <Step number="2" title="Search the marketplace" text="Find pilot car operators by service type, certifications, equipment, and coverage area." />
            <Step number="3" title="Review qualifications" text="Check certifications, vehicle information, and available services before reaching out." />
            <Step number="4" title="Connect & build your network" text="Contact operators directly and build a preferred pilot list for future loads." />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sectionHeader">
            <p className="eyebrow">The process</p>
            <h2>What happens at each step.</h2>
          </div>
          <div className="cards three">
            <IconStep icon={<UserPlus />} title="Register" text="Choose whether you're a pilot car operator, carrier, or broker and create your free Starter account." />
            <IconStep icon={<FileCheck2 />} title="Complete Your Profile" text="Operators add vehicle and certification details; brokers and carriers add company information." />
            <IconStep icon={<Search />} title="Search & Discover" text="Brokers and carriers search for operators; operators can be found by the companies that need them." />
            <IconStep icon={<MessageCircle />} title="Communicate" text="Reach out directly to discuss availability, rates, and the details of the job." />
            <IconStep icon={<Handshake />} title="Cover the Load" text="Agree on the work directly between operator and hiring company &mdash; PCLoadHub is the marketplace that connects you." />
          </div>
        </div>
      </section>

      <CTA
        title="See it for yourself."
        text="Registration is free for pilot car operators, brokers, and carriers."
      />
    </>
  );
}

function IconStep({ icon, title, text }) {
  return (
    <div className="feature">
      <div className="icon">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}
