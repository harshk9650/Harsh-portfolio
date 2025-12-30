// src/components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  // WORKING RESUME DOWNLOAD
  const downloadResume = () => {
    const resumeUrl = process.env.PUBLIC_URL + 'Harsh_Resume.pdf';
    console.log('Downloading from:', resumeUrl); // Debug
    
    // Method 1: Direct download
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Harsh_Resume_Automation_Engineer.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Method 2: Backup - open in new tab if download fails
    setTimeout(() => {
      const downloaded = localStorage.getItem('resumeDownloaded');
      if (!downloaded) {
        window.open(resumeUrl, '_blank');
        localStorage.setItem('resumeDownloaded', 'true');
      }
    }, 1000);
  };

  // WORKING PROJECTS LINK
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      style={{
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '20px',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
      }}
    >
      <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>
        Harsh Kumar
      </h1>

      <h2 style={{ fontSize: '1.5rem', marginBottom: '30px', opacity: '0.9' }}>
        Automation Test Engineer | Quality Advocate | Problem Solver
      </h2>

      <p style={{ maxWidth: '600px', fontSize: '1.1rem', lineHeight: '1.6' }}>
        I break things so users don't have to. Specialized in building robust
        automation frameworks that catch bugs before they reach production.
      </p>

      <div style={{ marginTop: '40px', display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255,255,255,0.3)' }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToProjects}
          style={{
            padding: '12px 30px',
            fontSize: '1rem',
            backgroundColor: 'white',
            color: '#667eea',
            border: 'none',
            borderRadius: '30px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          View My Projects
        </motion.button>

        {/* Download Resume Button */}
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255,255,255,0.3)' }}
          whileTap={{ scale: 0.95 }}
          onClick={downloadResume}
          style={{
            padding: '12px 30px',
            fontSize: '1rem',
            backgroundColor: 'transparent',
            color: 'white',
            border: '2px solid white',
            borderRadius: '30px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          📄 Download CV
        </motion.button>
      </div>
    </div>
  );
};

export default Hero;