// src/components/Contact.jsx - SIMPLE & WORKING
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" style={{padding: '80px 20px', textAlign: 'center', maxWidth: '800px', margin: '0 auto'}}>
      <h2 style={{fontSize: '2.5rem', marginBottom: '20px'}}>📬 Get In Touch</h2>
      <p style={{color: '#666', marginBottom: '40px', fontSize: '1.1rem'}}>
        Have a testing challenge? Let's discuss how we can ensure quality together.
      </p>

      {/* Resume Download - TESTED LINK */}
      <div style={{margin: '40px 0'}}>
        <a 
          href="https://drive.google.com/uc?export=download&id=1eKzsfSFS7rG6M9E3uHCBq2dPNCY0IVgJ"
          download="Harsh_Kumar_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: '16px 40px',
            background: 'linear-gradient(45deg, #00ff88, #00ccff)',
            color: '#000',
            border: 'none',
            borderRadius: '10px',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            textDecoration: 'none',
            display: 'inline-block',
            marginBottom: '15px'
          }}
        >
          📥 Download My Resume
        </a>
        <p style={{color: '#666', fontSize: '0.9rem'}}>Direct Google Drive download</p>
      </div>

      {/* Social Links */}
      <div style={{display: 'flex', justifyContent: 'center', gap: '20px', margin: '40px 0', flexWrap: 'wrap'}}>
        {/* LinkedIn */}
        <a 
          href="https://www.linkedin.com/in/harsh2311/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: '14px 28px',
            backgroundColor: '#0077B5',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: 'pointer',
            textDecoration: 'none'
          }}
        >
          🔗 LinkedIn
        </a>

        {/* GitHub */}
        <a 
          href="https://github.com/harshk9650"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: '14px 28px',
            backgroundColor: '#333',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: 'pointer',
            textDecoration: 'none'
          }}
        >
          🐙 GitHub
        </a>

        {/* Email */}
        <a 
          href="mailto:harshkr2134@gmail.com?subject=Portfolio Contact&body=Hello Harsh, I visited your portfolio"
          style={{
            padding: '14px 28px',
            backgroundColor: '#D44638',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: 'pointer',
            textDecoration: 'none'
          }}
        >
          📧 Email
        </a>

        {/* Phone */}
        <a 
          href="tel:+917668443965"
          style={{
            padding: '14px 28px',
            backgroundColor: '#25D366',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: 'pointer',
            textDecoration: 'none'
          }}
        >
          📱 Call
        </a>
      </div>

      <div style={{marginTop: '40px', color: '#666', fontSize: '1rem'}}>
        <p>📍 Based in India | 🎯 Automation Test Engineer</p>
        <p style={{marginTop: '10px', fontSize: '0.9rem', color: '#888'}}>
          Immediate response: harshkr2134@gmail.com | +91 7668443965
        </p>
      </div>
    </section>
  );
};

export default Contact;