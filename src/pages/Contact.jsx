import { useState } from 'react';
import Seo from '../components/Seo';

const EMAIL = 'karunaworldwidellp@gmail.com';
const ADDRESS = 'A/321, Sun Trade Center, Near Gujarat Gas, Char Rasta, Vapi - 396195';
const PHONE_1 = '9023260875';
const PHONE_2 = '9978895557';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <Seo
        title="Contact Us | Karuna Worldwide LLP - Get in Touch"
        description="Contact Karuna Worldwide LLP for paper and packaging inquiries, quotes, and partnerships. Email karunaworldwidellp@gmail.com."
        path="/contact"
      />
      <div className="page-header">
        <h1>Let's Talk</h1>
        <p>Get in touch for quotes, product inquiries, or partnerships. We'd love to hear from you.</p>
      </div>

      <section className="section container">
        <div className="contact-wrap">
          <div className="contact-info">
            <h3>Reach Us</h3>
            <p>We would love to hear from you. Send us your requirements and we will get back to you at the earliest.</p>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <h3 style={{ marginTop: '1.5rem' }}>Office Address</h3>
            <p>Karuna Worldwide LLP</p>
            <p style={{ whiteSpace: 'pre-line' }}>{ADDRESS}</p>
            <h3 style={{ marginTop: '1rem' }}>Phone</h3>
            <a href={`tel:+91${PHONE_1}`}>+91 {PHONE_1}</a>
            <a href={`tel:+91${PHONE_2}`}>+91 {PHONE_2}</a>
          </div>

          <div className="contact-form">
            <h3>Send a Message</h3>
            {submitted ? (
              <p style={{ color: 'var(--color-primary)', fontWeight: 500 }}>
                Thank you! We have received your message and will get back to you soon.
              </p>
            ) : (
              <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required placeholder="Your name" />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required placeholder="your@email.com" />
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" placeholder="Inquiry subject" />
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required placeholder="Your message..." />
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
