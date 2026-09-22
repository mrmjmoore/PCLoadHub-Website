import React from 'react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/Shared.jsx';

export default function PrivacyPolicy() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" text="Effective Date: September 22, 2026" />

      <section className="section">
        <div className="container prose">
          <p>
            This Privacy Policy explains how PCLoadHub LLC, an Iowa limited liability company and a wholly
            owned subsidiary of Altuxe Holdings Inc. (&ldquo;PCLoadHub,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo;
            or &ldquo;our&rdquo;), collects, uses, discloses, and protects information when you use the
            PCLoadHub website and mobile application (together, the &ldquo;Service&rdquo;). By using the
            Service, you agree to the collection and use of information as described in this policy.
          </p>

          <h2>1. Information We Collect</h2>
          <p>We collect the following categories of information when you use the Service:</p>
          <h3>Account &amp; Registration Information</h3>
          <p>When you create an account, we collect information such as your name, email address, phone number, and business or company information (for example, whether you are a pilot car operator, broker, or carrier).</p>
          <h3>Profile, Vehicle &amp; Certification Information</h3>
          <p>Pilot car operators may add profile information including escort vehicle details, equipment, service areas, and availability, along with certifications, licenses, and their expiration dates.</p>
          <h3>User-Generated Content</h3>
          <p>We collect content you choose to upload or send through the Service, including profile and vehicle photographs, certification or license documents, and messages you exchange with other users through the Service.</p>
          <h3>Information We Do Not Currently Collect</h3>
          <p>PCLoadHub does not currently collect precise device location or GPS data, and does not currently collect or process payment information, because payment features are not yet part of the Service. If this changes, we will update this Privacy Policy before introducing those features.</p>

          <h2>2. How We Use Information</h2>
          <p>We use the information we collect to:</p>
          <p>
            operate and maintain the PCLoadHub marketplace; create and display pilot, broker, and carrier
            profiles; enable users to search for and connect with one another; facilitate messaging between
            users; respond to support requests submitted through our Contact page; maintain the security and
            integrity of the Service; and communicate with you about your account or changes to the Service.
          </p>

          <h2>3. What Information Is Visible to Other Users</h2>
          <p>
            Profile information you choose to add &mdash; such as your business name, escort vehicle and
            equipment details, service area, and certifications &mdash; is visible to other registered users of
            the Service so that brokers, carriers, and pilot car operators can find and evaluate one another.
            Messages you send through the Service are visible only to the participants in that conversation.
            Your account email and phone number are not displayed publicly unless you choose to include them in
            your profile or share them directly with another user.
          </p>

          <h2>4. Third-Party Service Providers</h2>
          <p>
            We use third-party service providers to help us operate the Service, including website hosting and
            form processing through Netlify. Our mobile application is distributed through the Google Play
            Store and, when available, the Apple App Store, each of which has its own privacy practices
            governing your interaction with those platforms. As PCLoadHub introduces additional functionality,
            we may engage additional service providers (for example, for analytics, cloud storage, or account
            authentication); this Privacy Policy will be updated to name those providers before they process
            your information.
          </p>

          <h2>5. Data Security</h2>
          <p>
            We use reasonable administrative and technical safeguards designed to protect information submitted
            through the Service. No method of transmission over the internet or electronic storage is completely
            secure, and we cannot guarantee absolute security.
          </p>

          <h2>6. Data Retention</h2>
          <p>
            We retain account and profile information for as long as your account remains active, and for a
            reasonable period afterward in case you choose to reactivate your account, to comply with legal
            obligations, resolve disputes, and enforce our agreements. When you request deletion of your account,
            we delete or de-identify your information as described in Section 8 below, except where we are
            required or permitted to retain certain records.
          </p>

          <h2>7. Your Rights</h2>
          <p>
            You may request access to, correction of, or deletion of your personal information at any time by
            contacting us at <a href="mailto:support@pcloadhub.com">support@pcloadhub.com</a>. You may also
            update most profile information directly within your account.
          </p>

          <h2>8. Account &amp; Data Deletion</h2>
          <p>
            You can request deletion of your PCLoadHub account and associated data at any time. Visit our{' '}
            <Link to="/delete-account">Account Deletion</Link> page for details on what is deleted, what may be
            retained, and how to submit a request. If account deletion is available directly within the mobile
            app, you may also delete your account there.
          </p>

          <h2>9. Children&rsquo;s Privacy</h2>
          <p>
            PCLoadHub is a business-to-business marketplace intended for use by licensed pilot car operators,
            brokers, and carriers. The Service is not directed to, and we do not knowingly collect information
            from, anyone under the age of 18.
          </p>

          <h2>10. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time as the Service evolves. We will update the
            effective date above when we make changes, and material changes will be reflected on this page
            before they take effect.
          </p>

          <h2>11. Contact Us</h2>
          <p>
            PCLoadHub LLC<br />
            An Iowa limited liability company, a subsidiary of Altuxe Holdings Inc.<br />
            Email: <a href="mailto:support@pcloadhub.com">support@pcloadhub.com</a>
          </p>
        </div>
      </section>
    </>
  );
}
