import React from 'react';
import { PageHero } from '../components/Shared.jsx';
import { Mail } from 'lucide-react';

export default function DeleteAccount() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Delete Your Account" text="How to request deletion of your PCLoadHub account and data." />

      <section className="section">
        <div className="container prose">
          <p>
            PCLoadHub is operated by PCLoadHub LLC, an Iowa limited liability company and a wholly owned
            subsidiary of Altuxe Holdings Inc. This page explains how to request deletion of your PCLoadHub
            account and the data associated with it.
          </p>

          <h2>How to Request Deletion</h2>
          <p>
            If account deletion is available directly within the PCLoadHub mobile app, you can delete your
            account from your in-app settings. You can also request deletion at any time using the form below,
            or by emailing us directly at <a href="mailto:support@pcloadhub.com">support@pcloadhub.com</a> from
            the email address associated with your account. Please allow us a reasonable time to verify your
            request and process it.
          </p>

          <h2>What Gets Deleted</h2>
          <p>
            When we process your deletion request, we delete your account profile, including your name, contact
            information, vehicle and certification details, uploaded photographs and documents, and your
            messages within the Service.
          </p>

          <h2>What May Be Retained, and Why</h2>
          <p>
            We may retain a limited amount of information after account deletion where necessary to comply with
            legal obligations, resolve disputes, enforce our agreements, or prevent fraud and abuse &mdash; for
            example, records required for tax, accounting, or legal compliance purposes. Any information
            retained for these purposes is kept only as long as necessary for that purpose and is not used to
            continue operating your account or profile.
          </p>

          <h2>Timing</h2>
          <p>
            We aim to process account deletion requests within a reasonable timeframe after we are able to
            verify the request. Deletion is not always instantaneous, particularly where information must be
            retained temporarily to satisfy a legal or accounting requirement described above.
          </p>

          <h2>Submit a Deletion Request</h2>
          <form className="contactForm" name="delete-account-request" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="delete-account-request" />
            <p className="hp-field"><label>Don&rsquo;t fill this out: <input name="bot-field" /></label></p>
            <label>Full Name<input name="name" required /></label>
            <label>Account Email<input name="email" type="email" required /></label>
            <label>Additional Details<textarea name="message" rows="4" placeholder="Optional — anything that helps us find your account"></textarea></label>
            <button className="primary" type="submit">Request Account Deletion</button>
          </form>

          <p className="contactEmail"><Mail size={16} /> Or email us directly at <a href="mailto:support@pcloadhub.com">support@pcloadhub.com</a></p>
        </div>
      </section>
    </>
  );
}
