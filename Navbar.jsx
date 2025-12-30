// src/components/Navbar.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        zIndex: 1000,
        boxShadow: '0 2px 20px rgba(0,0,0,0.1)',
        padding: '15px 20px'
      }}
    >
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#667eea',
            cursor: 'pointer'
          }}
        >
          Harsh
        </motion.div>

        {/* Desktop Menu */}
        <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
          <a href="#skills" style={{
            textDecoration: 'none',
            color: '#333',
            fontWeight: '500',
            transition: 'color 0.3s'
          }} 
          onMouseEnter={e => e.target.style.color = '#667eea'}
          onMouseLeave={e => e.target.style.color = '#333'}>
            Skills
          </a>
          <a href="#projects" style={{
            textDecoration: 'none',
            color: '#333',
            fontWeight: '500',
            transition: 'color 0.3s'
          }}
          onMouseEnter={e => e.target.style.color = '#667eea'}
          onMouseLeave={e => e.target.style.color = '#333'}>
            Projects
          </a>
          <a href="#contact" style={{
            textDecoration: 'none',
            color: '#333',
            fontWeight: '500',
            transition: 'color 0.3s'
          }}
          onMouseEnter={e => e.target.style.color = '#667eea'}
          onMouseLeave={e => e.target.style.color = '#333'}>
            Contact
          </a>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: '10px 25px',
              backgroundColor: '#667eea',
              color: 'white',
              border: 'none',
              borderRadius: '25px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            Hire Me
          </motion.button>
        </div>

        {/* Mobile Menu Button (Hidden on desktop) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            display: 'none',
            backgroundColor: 'transparent',
            border: 'none',
            fontSize: '1.5rem',
            cursor: 'pointer'
          }}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          style={{
            backgroundColor: 'white',
            padding: '20px',
            marginTop: '15px',
            borderTop: '1px solid #eee'
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <a href="#skills" style={{ textDecoration: 'none', color: '#333' }}>Skills</a>
            <a href="#projects" style={{ textDecoration: 'none', color: '#333' }}>Projects</a>
            <a href="#contact" style={{ textDecoration: 'none', color: '#333' }}>Contact</a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;