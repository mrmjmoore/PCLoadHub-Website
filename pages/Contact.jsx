import React from 'react';
import { PageHero } from '../components/Shared.jsx';
import { Mail } from 'lucide-react';

export default function Contact() {
  return (
    <>
      <PageHero title="Contact PCLoadHub" text="Tell us who you are and how you want to use PCLoadHub." />
      <section className="section">
        <div className="container contactGrid">
          <form className="contactForm" name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="contact" />
            <p className="hp-field"><label>Don&rsquo;t fill this out: <input name="bot-field" /></label></p>

            <label>Name<input name="name" required /></label>
            <label>Company<input name="company" /></label>
            <label>Email<input name="email" type="email" required /></label>
            <label>Phone<input name="phone" type="tel" /></label>
            <label>I am a
              <select name="userType" required defaultValue="">
                <option value="" disabled>Select one</option>
                <option>Pilot Car Operator</option>
                <option>Broker</option>
                <option>Carrier</option>
                <option>Other</option>
              </select>
            </label>
            <label>Message<textarea name="message" rows="5" placeholder="Tell us what you need..."></textarea></label>
            <button className="primary" type="submit">Send Message</button>
          </form>

          <div className="panel">
            <h3>PCLoadHub</h3>
            <p><strong>Mission:</strong> PCLoadHub connects brokers, carriers, and qualified pilot car operators through a nationwide marketplace for oversize load escorts.</p>
            <p>Use this form to join as a pilot or broker, ask a question, or request support.</p>
            <p className="contactEmail"><Mail size={16} /> <a href="mailto:support@pcloadhub.com">support@pcloadhub.com</a></p>
          </div>
        </div>
      </section>
    </>
  );
}
