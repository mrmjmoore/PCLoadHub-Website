import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Truck, ShieldCheck, Map, MessageSquare, CreditCard, Users, Menu, X, ArrowRight, CheckCircle } from 'lucide-react';
import './styles.css';

const navItems = ['Home', 'For Brokers', 'For Pilots', 'Pricing', 'Contact'];

function App() {
  const [page, setPage] = useState('Home');
  const [mobileOpen, setMobileOpen] = useState(false);

  const go = (item) => {
    setPage(item);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="site">
      <header className="header">
        <div className="container nav">
          <button className="brand" onClick={() => go('Home')}>
            <span className="brandMark">PC</span>
            <span>
              <strong>PCLoadHub</strong>
              <small>The Pilot Car Marketplace</small>
            </span>
          </button>

          <nav className="desktopNav">
            {navItems.map(item => (
              <button key={item} onClick={() => go(item)} className={page === item ? 'active' : ''}>{item}</button>
            ))}
          </nav>

          <button className="menuBtn" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Open menu">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileOpen && (
          <div className="mobileNav">
            {navItems.map(item => (
              <button key={item} onClick={() => go(item)}>{item}</button>
            ))}
          </div>
        )}
      </header>

      <main>
        {page === 'Home' && <Home go={go} />}
        {page === 'For Brokers' && <Brokers go={go} />}
        {page === 'For Pilots' && <Pilots go={go} />}
        {page === 'Pricing' && <Pricing go={go} />}
        {page === 'Contact' && <Contact />}
      </main>

      <footer className="footer">
        <div className="container footerGrid">
          <div>
            <h3>PCLoadHub</h3>
            <p>The Pilot Car Marketplace for brokers, carriers, and qualified pilot car operators.</p>
          </div>
          <div>
            <h4>Pages</h4>
            {navItems.map(item => <button key={item} onClick={() => go(item)}>{item}</button>)}
          </div>
          <div>
            <h4>Coming Soon</h4>
            <p>Messaging, load negotiation, pilot profiles, preferred pilots, certification management, and mobile apps.</p>
          </div>
        </div>
        <div className="container copyright">© {new Date().getFullYear()} PCLoadHub. All rights reserved.</div>
      </footer>
    </div>
  );
}

function Home({ go }) {
  return (
    <>
      <section className="hero">
        <div className="container heroGrid">
          <div>
            <p className="eyebrow">Nationwide Oversize Load Escort Marketplace</p>
            <h1>Find Pilots. Cover Loads.</h1>
            <p className="subhead">The nationwide marketplace for all pilot car services.</p>
            <div className="heroActions">
              <button className="primary" onClick={() => go('For Pilots')}>Join as a Pilot <ArrowRight size={18} /></button>
              <button className="secondary" onClick={() => go('For Brokers')}>Join as a Broker</button>
            </div>
          </div>
          <div className="heroCard">
            <div className="statusRow"><span></span> Marketplace Status</div>
            <h2>Coming Soon</h2>
            <p>Professional pilot car profiles, broker load posting, in-app messaging, negotiation tools, route survey visibility, and preferred pilot lists.</p>
            <div className="miniStats">
              <div><strong>50</strong><small>States</small></div>
              <div><strong>4</strong><small>Escort Types</small></div>
              <div><strong>24/7</strong><small>Load Visibility</small></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sectionHeader">
            <p className="eyebrow">Built for the heavy haul industry</p>
            <h2>One place for brokers and pilots to connect.</h2>
          </div>
          <div className="cards three">
            <Feature icon={<Truck />} title="Post Loads" text="Brokers can post escort positions and connect with qualified operators faster." />
            <Feature icon={<ShieldCheck />} title="Show Qualifications" text="Pilots can display certifications, equipment, insurance, and service areas." />
            <Feature icon={<Users />} title="Build Relationships" text="Preferred pilot lists help repeat partners work together more efficiently." />
          </div>
        </div>
      </section>

      <section className="splitSection">
        <div className="container split">
          <BenefitBlock title="For Brokers" items={['Find qualified escorts','Build preferred pilot lists','Review certifications']} />
          <BenefitBlock title="For Pilots" items={['Connect with brokers','Display certifications','In-app rate con & invoicing']} />
        </div>
      </section>

      <ComingSoon />
      <CTA go={go} />
    </>
  );
}

function Brokers({ go }) {
  return (
    <>
      <PageHero title="For Brokers" text="Post oversize escort needs, find qualified pilots, and build a dependable network nationwide." />
      <section className="section"><div className="container">
        <div className="cards two">
          <BenefitBlock title="Broker Benefits" items={['Post loads quickly','Find qualified escorts','Build preferred pilot lists','Fill positions faster','Manage pilot relationships']} />
          <div className="panel">
            <h3>Designed for dispatch pressure.</h3>
            <p>PCLoadHub is being built for real-world heavy haul coordination: lead cars, chase cars, pole cars, steermen, route surveyors, certifications, rates, overnights, and availability.</p>
            <button className="primary" onClick={() => go('Contact')}>Request Broker Access</button>
          </div>
        </div>
      </div></section>
    </>
  );
}

function Pilots({ go }) {
  return (
    <>
      <PageHero title="For Pilots" text="Create a professional profile, show your qualifications, and connect with brokers looking for available escort operators." />
      <section className="section"><div className="container">
        <div className="cards two">
          <BenefitBlock title="Pilot Benefits" items={['Find available loads','Connect with brokers','Display certifications','Build professional profiles','Grow your business']} />
          <div className="panel">
            <h3>Your pilot car business deserves visibility.</h3>
            <p>PCLoadHub is designed to help professional pilots show equipment, certifications, service areas, insurance status, and availability in one marketplace.</p>
            <button className="primary" onClick={() => go('Contact')}>Join Pilot List</button>
          </div>
        </div>
      </div></section>
    </>
  );
}

function Pricing({ go }) {
  return (
    <>
      <PageHero title="Pricing" text="Simple early access pricing will be announced as PCLoadHub moves toward launch." />
      <section className="section"><div className="container pricing">
        <div className="priceCard">
          <p className="eyebrow">Pilots</p>
          <h2>Early Access</h2>
          <p>Join the pilot interest list and be notified when profiles and load visibility open.</p>
          <button className="primary" onClick={() => go('Contact')}>Join as a Pilot</button>
        </div>
        <div className="priceCard featured">
          <p className="eyebrow">Brokers</p>
          <h2>Broker Access</h2>
          <p>Broker posting tools, preferred pilot lists, and marketplace features are coming soon.</p>
          <button className="primary light" onClick={() => go('Contact')}>Join as a Broker</button>
        </div>
      </div></section>
    </>
  );
}

function Contact() {
  return (
    <>
      <PageHero title="Contact PCLoadHub" text="Tell us who you are and how you want to use PCLoadHub." />
      <section className="section"><div className="container contactGrid">
        <form className="contactForm" name="contact" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />
          <label>Name<input name="name" required /></label>
          <label>Company<input name="company" /></label>
          <label>Email<input name="email" type="email" required /></label>
          <label>Phone<input name="phone" /></label>
          <label>User Type
            <select name="userType" required>
              <option value="">Select one</option>
              <option>Broker</option>
              <option>Carrier</option>
              <option>Pilot Car Operator</option>
            </select>
          </label>
          <label>Message<textarea name="message" rows="5" placeholder="Tell us what you need..."></textarea></label>
          <button className="primary" type="submit">Send Message</button>
        </form>
        <div className="panel">
          <h3>PCLoadHub</h3>
          <p><strong>Mission:</strong> PCLoadHub connects brokers, carriers, and qualified pilot car operators through a nationwide marketplace for oversize load escorts.</p>
          <p>Use this form for broker access, pilot early access, partnerships, or launch updates.</p>
        </div>
      </div></section>
    </>
  );
}

function PageHero({ title, text }) {
  return <section className="pageHero"><div className="container"><p className="eyebrow">PCLoadHub</p><h1>{title}</h1><p>{text}</p></div></section>;
}

function Feature({ icon, title, text }) {
  return <div className="feature"><div className="icon">{icon}</div><h3>{title}</h3><p>{text}</p></div>;
}

function BenefitBlock({ title, items }) {
  return <div className="panel"><h3>{title}</h3><ul className="checkList">{items.map(item => <li key={item}><CheckCircle size={18} /> {item}</li>)}</ul></div>;
}

function ComingSoon() {
  const items = [
    ['Messaging', <MessageSquare />],
    ['Load Negotiation', <Truck />],
    ['Mobile Apps', <Map />],
    ['Preferred Pilots', <Users />],
    ['Broker Directory', <CreditCard />],
    ['Pilot Profiles', <ShieldCheck />],
  ];
  return <section className="section dark"><div className="container">
    <div className="sectionHeader"><p className="eyebrow">Coming Soon</p><h2>More tools for real-world load coordination.</h2></div>
    <div className="cards three">{items.map(([title, icon]) => <Feature key={title} icon={icon} title={title} text="Planned for the PCLoadHub marketplace platform." />)}</div>
  </div></section>;
}

function CTA({ go }) {
  return <section className="cta"><div className="container ctaBox">
    <h2>Be ready when PCLoadHub launches.</h2>
    <p>Join the early access list for brokers, carriers, and pilot car operators.</p>
    <button className="primary" onClick={() => go('Contact')}>Get Early Access</button>
  </div></section>;
}

createRoot(document.getElementById('root')).render(<App />);
