import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ThreeDBackground from './components/ThreeDBackground';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
   // Resume Download Function
  const downloadResume = () => {
    // Direct link to public folder
    const resumeUrl = 'Harsh_Resume.pdf'; // Change to your filename
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Harsh_Resume_Automation_Engineer.pdf'; // What users see
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Mouse move effect for 3D parallax
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) * 0.01,
        y: (e.clientY - window.innerHeight / 2) * 0.01
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Skills data - DYNAMIC
  const skills = {
    '🔬 Automation Testing': ["Selenium", "TestNG", "Cypress", "Playwright", "Appium"],
    '💻 Programming': ["Java", "Python", "JavaScript", "TypeScript"],
    '⚙️ Tools & DevOps': ["Git", "Jenkins", "Docker", "Postman", "JIRA"],
    '📊 Testing Types': ["API Testing", "Performance", "Security", "Mobile", "Web"]
  };

  // Projects data - DYNAMIC
  const projects = [
    {
      id: 1,
      title: "🚀 AI-Powered Test Automation",
      description: "Built intelligent automation framework that self-heals and adapts to UI changes",
      tech: ["Selenium", "Python", "OpenCV", "Machine Learning"],
      github: "#",
      features: ["95% accuracy", "Self-healing tests", "CI/CD integrated", "Real-time reporting"]
    },
    {
      id: 2,
      title: "🔗 API Testing Framework",
      description: "Enterprise-grade API testing suite with 200+ endpoints automated",
      tech: ["RestAssured", "Java", "Postman", "Newman"],
      github: "#",
      features: ["Load testing", "Security scanning", "Automated documentation", "Webhook testing"]
    },
    {
      id: 3,
      title: "📱 Mobile Automation Suite",
      description: "Cross-platform mobile testing for iOS & Android apps",
      tech: ["Appium", "Java", "XCTest", "Espresso"],
      github: "#",
      features: ["Parallel execution", "Visual testing", "Gesture automation", "Battery profiling"]
    }
  ];

  // Animation on scroll
  const ScrollAnimation = ({ children }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    
    useEffect(() => {
      if (inView) {
        controls.start('visible');
      }
    }, [controls, inView]);
    
    return (
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        transition={{ duration: 0.5 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 }
        }}
      >
        {children}
      </motion.div>
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // EmailJS integration here
    alert(`✅ Message sent! I'll get back to you soon at ${email}`);
    setEmail('');
  };

  return (
    <div className="App">
      {/* 3D Background */}
      <ThreeDBackground />
      
      {/* Glass Morphism Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        style={{
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(10, 10, 30, 0.8)',
          borderBottom: '1px solid rgba(0, 255, 136, 0.3)',
          padding: '20px 5%',
          position: 'fixed',
          top: 0,
          width: '100%',
          zIndex: 1000,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            background: 'linear-gradient(45deg, #00ff88, #00ccff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          HARSH
        </motion.div>
        
        <div style={{ display: 'flex', gap: '30px' }}>
          {['Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              style={{
                color: '#fff',
                textDecoration: 'none',
                padding: '10px 20px',
                borderRadius: '25px',
                border: '2px solid rgba(0, 255, 136, 0.5)',
                transition: 'all 0.3s'
              }}
            >
              {item}
            </motion.a>
          ))}
        </div>
      </motion.nav>

      {/* Hero Section - CYBERPUNK STYLE */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '120px 5% 60px',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Animated gradient border */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '300px',
          height: '300px',
          background: 'linear-gradient(45deg, #00ff88, #00ccff, #ff00ff)',
          borderRadius: '50%',
          filter: 'blur(100px)',
          opacity: 0.3,
          zIndex: -1
        }} />
        
        <motion.h1
          animate={{ 
            textShadow: [
              '0 0 10px #00ff88',
              '0 0 20px #00ccff',
              '0 0 10px #00ff88'
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{
            fontSize: '5rem',
            marginBottom: '20px',
            background: 'linear-gradient(45deg, #00ff88, #00ccff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 'bold'
          }}
        >
           AUTOMATION ENGINEER AND TESTER
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={{
            fontSize: '2rem',
            marginBottom: '40px',
            color: '#00ff88'
          }}
        >
          I Break Code Before Users Do
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          style={{
            fontSize: '1.3rem',
            maxWidth: '800px',
            marginBottom: '50px',
            color: '#cccccc'
          }}
        >
          Building <span style={{ color: '#00ff88', fontWeight: 'bold' }}>bulletproof</span> automation frameworks that 
          catch bugs at light speed. Specializing in AI-powered testing, 
          performance optimization, and delivering <span style={{ color: '#00ccff', fontWeight: 'bold' }}>flawless user experiences</span>.
        </motion.p>
        
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px #00ff88' }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: '18px 40px',
              fontSize: '1.2rem',
              background: 'linear-gradient(45deg, #00ff88, #00ccff)',
              color: '#000',
              border: 'none',
              borderRadius: '50px',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}
          >
            🚀 Explore My Work
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px #ff00ff' }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: '18px 40px',
              fontSize: '1.2rem',
              background: 'transparent',
              color: '#fff',
              border: '2px solid #ff00ff',
              borderRadius: '50px',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}
          >
            📄 Download CV
          </motion.button>
        </div>
        
        {/* Animated stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '60px',
            marginTop: '80px',
            flexWrap: 'wrap'
          }}
        >
          {[
            { value: '500+', label: 'Test Cases' },
            { value: '99.8%', label: 'Accuracy' },
            { value: '40+', label: 'Projects' },
            { value: '100%', label: 'Bug Free' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1 + index * 0.1, type: 'spring' }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              style={{
                textAlign: 'center',
                padding: '20px',
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '15px',
                border: '1px solid rgba(0, 255, 136, 0.2)',
                minWidth: '150px'
              }}
            >
              <div style={{
                fontSize: '2.5rem',
                fontWeight: 'bold',
                background: 'linear-gradient(45deg, #00ff88, #00ccff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '10px'
              }}>
                {stat.value}
              </div>
              <div style={{ color: '#888', fontSize: '1rem' }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Skills Section - 3D CARDS */}
      <section id="skills" style={{ padding: '100px 5%', background: 'rgba(10, 10, 20, 0.9)' }}>
        <ScrollAnimation>
          <h2 style={{
            textAlign: 'center',
            fontSize: '3.5rem',
            marginBottom: '80px',
            background: 'linear-gradient(45deg, #00ccff, #ff00ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            🛠 TECHNICAL ARSENAL
          </h2>
        </ScrollAnimation>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px',
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          {Object.entries(skills).map(([category, skillList], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 50, rotateY: 90 }}
              animate={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ 
                y: -10,
                rotateX: 5,
                boxShadow: '0 20px 40px rgba(0, 255, 136, 0.3)'
              }}
              style={{
                background: 'rgba(20, 20, 40, 0.8)',
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
                padding: '30px',
                border: '1px solid rgba(0, 255, 136, 0.2)',
                transformStyle: 'preserve-3d',
                perspective: '1000px'
              }}
            >
              <h3 style={{
                color: '#00ff88',
                fontSize: '1.5rem',
                marginBottom: '25px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                {category}
              </h3>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                {skillList.map((skill, idx) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.1, rotate: 2 }}
                    style={{
                      padding: '12px 22px',
                      background: 'linear-gradient(45deg, rgba(0, 255, 136, 0.1), rgba(0, 204, 255, 0.1))',
                      color: '#fff',
                      borderRadius: '50px',
                      fontSize: '1rem',
                      border: '1px solid rgba(0, 255, 136, 0.3)',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                  >
                    <div style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: '#00ff88',
                      boxShadow: '0 0 10px #00ff88'
                    }} />
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section - 3D FLIP CARDS */}
      <section id="projects" style={{ 
        padding: '100px 5%',
        background: 'linear-gradient(180deg, rgba(10,10,20,0.9) 0%, rgba(20,10,40,0.9) 100%)'
      }}>
        <ScrollAnimation>
          <h2 style={{
            textAlign: 'center',
            fontSize: '3.5rem',
            marginBottom: '80px',
            background: 'linear-gradient(45deg, #ff00ff, #00ccff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            🚀 RECENT PROJECTS
          </h2>
        </ScrollAnimation>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '40px',
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 100, rotateX: 45 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8, type: 'spring' }}
              whileHover={{ 
                y: -20,
                rotateY: 5,
                boxShadow: '0 30px 60px rgba(0, 204, 255, 0.4)'
              }}
              style={{
                background: 'rgba(20, 20, 40, 0.9)',
                borderRadius: '25px',
                padding: '40px',
                border: '1px solid rgba(0, 204, 255, 0.3)',
                transformStyle: 'preserve-3d',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Glowing corner */}
              <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '100px',
                height: '100px',
                background: 'radial-gradient(circle, rgba(0,255,136,0.3) 0%, transparent 70%)',
                filter: 'blur(20px)'
              }} />
              
              <h3 style={{
                fontSize: '1.8rem',
                marginBottom: '20px',
                color: '#00ccff',
                display: 'flex',
                alignItems: 'center',
                gap: '15px'
              }}>
                {project.title}
              </h3>
              
              <p style={{
                color: '#aaa',
                marginBottom: '25px',
                lineHeight: '1.7',
                fontSize: '1.1rem'
              }}>
                {project.description}
              </p>
              
              <div style={{ marginBottom: '25px' }}>
                <div style={{ 
                  color: '#00ff88', 
                  marginBottom: '10px',
                  fontWeight: 'bold'
                }}>
                  Tech Stack:
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {project.tech.map((tech, idx) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.1 }}
                      style={{
                        padding: '8px 18px',
                        background: 'rgba(0, 255, 136, 0.1)',
                        color: '#00ff88',
                        borderRadius: '20px',
                        fontSize: '0.9rem',
                        border: '1px solid rgba(0, 255, 136, 0.3)'
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
              
              <div style={{ marginBottom: '30px' }}>
                <div style={{ 
                  color: '#00ccff', 
                  marginBottom: '10px',
                  fontWeight: 'bold'
                }}>
                  Features:
                </div>
                <ul style={{ paddingLeft: '20px', color: '#ccc' }}>
                  {project.features.map((feature, idx) => (
                    <motion.li 
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + idx * 0.1 }}
                      style={{ marginBottom: '8px' }}
                    >
                      ✅ {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              <motion.a
                href={project.github}
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px #00ff88' }}
                whileTap={{ scale: 0.95 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '15px 30px',
                  background: 'linear-gradient(45deg, #00ff88, #00ccff)',
                  color: '#000',
                  textDecoration: 'none',
                  borderRadius: '50px',
                  fontWeight: 'bold',
                  fontSize: '1.1rem'
                }}
              >
                <span>👨‍💻 View Code</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section - GLASS MORPHISM */}
      <section id="contact" style={{ 
        padding: '100px 5%',
        background: 'rgba(10, 10, 30, 0.95)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(20px)',
            borderRadius: '40px',
            padding: '60px',
            maxWidth: '800px',
            width: '100%',
            border: '1px solid rgba(0, 255, 136, 0.2)',
            boxShadow: '0 30px 60px rgba(0, 0, 0, 0.5)'
          }}
        >
          <h2 style={{
            textAlign: 'center',
            fontSize: '3rem',
            marginBottom: '20px',
            background: 'linear-gradient(45deg, #ff00ff, #00ccff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            📬 LET'S CONNECT
          </h2>
          
          <p style={{
            textAlign: 'center',
            color: '#aaa',
            marginBottom: '50px',
            fontSize: '1.2rem'
          }}>
            Got a project that needs <span style={{ color: '#00ff88' }}>bulletproof testing</span>? 
            Let's build something amazing together!
          </p>
          
          <form onSubmit={handleSubmit} style={{ width: '100%' }}>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(2, 1fr)', 
              gap: '30px',
              marginBottom: '30px'
            }}>
              <div>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '10px',
                  color: '#00ff88',
                  fontWeight: 'bold'
                }}>
                  HARSH KUMAR
                </label>
                <input
                  type="text"
                  required
                  style={{
                    width: '100%',
                    padding: '18px 25px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(0, 255, 136, 0.3)',
                    borderRadius: '15px',
                    fontSize: '1.1rem',
                    color: '#fff',
                    outline: 'none',
                    transition: 'all 0.3s'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#00ff88'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(0, 255, 136, 0.3)'}
                />
              </div>
              
              <div>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '10px',
                  color: '#00ccff',
                  fontWeight: 'bold'
                }}>
                  Your Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{
                    width: '100%',
                    padding: '18px 25px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(0, 204, 255, 0.3)',
                    borderRadius: '15px',
                    fontSize: '1.1rem',
                    color: '#fff',
                    outline: 'none',
                    transition: 'all 0.3s'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#00ccff'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(0, 204, 255, 0.3)'}
                />
              </div>
            </div>
            
            <div style={{ marginBottom: '40px' }}>
              <label style={{ 
                display: 'block', 
                marginBottom: '10px',
                color: '#ff00ff',
                fontWeight: 'bold'
              }}>
                Your Message
              </label>
              <textarea
                rows="6"
                required
                style={{
                  width: '100%',
                  padding: '20px 25px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 0, 255, 0.3)',
                  borderRadius: '15px',
                  fontSize: '1.1rem',
                  color: '#fff',
                  resize: 'vertical',
                  outline: 'none',
                  transition: 'all 0.3s'
                }}
                onFocus={(e) => e.target.style.borderColor = '#ff00ff'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(255, 0, 255, 0.3)'}
              ></textarea>
            </div>
            
            <motion.button
              type="submit"
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 40px rgba(0, 255, 136, 0.5)'
              }}
              whileTap={{ scale: 0.95 }}
              style={{
                width: '100%',
                padding: '22px',
                background: 'linear-gradient(45deg, #00ff88, #00ccff)',
                color: '#000',
                border: 'none',
                borderRadius: '15px',
                fontSize: '1.3rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <span style={{ position: 'relative', zIndex: 2 }}>
                🚀 Launch Message
              </span>
              <motion.div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(45deg, #ff00ff, #00ccff)'
                }}
                animate={{
                  x: ['-100%', '100%']
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: 'reverse'
                }}
              />
            </motion.button>
          </form>
          
          {/* Social Links - 3D Hover */}
          <div style={{ 
            marginTop: '60px',
            display: 'flex',
            justifyContent: 'center',
            gap: '30px',
            flexWrap: 'wrap'
          }}>
            {[
              { icon: '🐙', label: 'GitHub', color: '#fff' },
              { icon: '💼', label: 'LinkedIn', color: '#0077b5' },
              { icon: '📧', label: 'Email', color: '#00ff88' },
              { icon: '📱', label: 'Phone', color: '#ff00ff' }
            ].map((social) => (
              <motion.a
                key={social.label}
                href="#"
                whileHover={{ y: -10, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px',
                  padding: '18px 30px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '20px',
                  textDecoration: 'none',
                  color: '#fff',
                  border: `1px solid ${social.color}40`,
                  minWidth: '200px'
                }}
              >
                <span style={{ fontSize: '1.8rem' }}>{social.icon}</span>
                <div>
                  <div style={{ color: social.color, fontWeight: 'bold' }}>
                    {social.label}
                  </div>
                  <div style={{ fontSize: '0.9rem', color: '#aaa' }}>
                    Click to connect
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Footer - Animated */}
      <footer style={{ 
        padding: '50px 5%',
        background: 'linear-gradient(180deg, rgba(10,10,30,1) 0%, #000000 100%)',
        borderTop: '1px solid rgba(0, 255, 136, 0.2)',
        textAlign: 'center'
      }}>
        <motion.div
          animate={{ 
            textShadow: [
              '0 0 10px rgba(0, 255, 136, 0.5)',
              '0 0 20px rgba(0, 204, 255, 0.5)',
              '0 0 10px rgba(0, 255, 136, 0.5)'
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{
            fontSize: '1.5rem',
            marginBottom: '30px',
            color: '#00ff88'
          }}
        >
          Ready to Build Something Extraordinary?
        </motion.div>
        
        <div style={{ 
          color: '#888',
          fontSize: '1rem',
          maxWidth: '800px',
          margin: '0 auto 40px'
        }}>
          © {new Date().getFullYear()} Harsh - QA Automation Engineer. 
          Built with React, Three.js & Framer Motion. 
          Every pixel and animation crafted to showcase technical excellence.
        </div>
        
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: '0 0 30px #ff00ff' }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            padding: '15px 40px',
            background: 'transparent',
            color: '#ff00ff',
            border: '2px solid #ff00ff',
            borderRadius: '50px',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            margin: '0 auto'
          }}
        >
          <motion.span
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            ⬆
          </motion.span>
          Back to Top
        </motion.button>
      </footer>
    </div>
  );
}

export default App;