// src/App.js
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Contact from './components/Contact';
import { testingSkills } from './data/skills';
import { projects } from './data/projects';

function App() {
  return (
    <div className="App">
      <Navbar />

      {/* Add padding to account for fixed navbar */}
      <div style={{ paddingTop: '70px' }}>
        <Hero />

        {/* Skills Section - DYNAMIC */}
        <section style={{ padding: '50px 20px', maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '40px' }}>
            🧪 Testing Skills & Expertise
          </h2>

          {Object.entries(testingSkills).map(([category, skills]) => (
            <div key={category} style={{ marginBottom: '40px' }}>
              <h3
                style={{
                  fontSize: '1.5rem',
                  color: '#667eea',
                  marginBottom: '20px',
                  textTransform: 'capitalize'
                }}
              >
                {category}
              </h3>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    style={{
                      padding: '12px 24px',
                      backgroundColor: '#f8f9fa',
                      borderRadius: '25px',
                      border: '1px solid #e0e0e0',
                      fontSize: '1rem',
                      transition: 'all 0.3s',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#667eea';
                      e.target.style.color = 'white';
                      e.target.style.transform = 'translateY(-3px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = '#f8f9fa';
                      e.target.style.color = 'black';
                      e.target.style.transform = 'translateY(0)';
                    }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Projects Section - DYNAMIC */}
        <section
          style={{
            padding: '50px 20px',
            backgroundColor: '#f8f9fa',
            maxWidth: '1200px',
            margin: '0 auto'
          }}
        >
          <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '50px' }}>
            🚀 Projects & Case Studies
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '30px'
            }}
          >
            {projects.map((project) => (
              <div
                key={project.id}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '15px',
                  padding: '30px',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s'
                }}
              >
                <h3 style={{ fontSize: '1.5rem', color: '#333', marginBottom: '15px' }}>
                  {project.title}
                </h3>

                <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '20px' }}>
                  {project.description}
                </p>

                <div style={{ marginBottom: '20px' }}>
                  <h4 style={{ marginBottom: '10px', color: '#667eea' }}>Technologies:</h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        style={{
                          padding: '5px 12px',
                          backgroundColor: '#eef2ff',
                          color: '#667eea',
                          borderRadius: '15px',
                          fontSize: '0.9rem'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ marginBottom: '25px' }}>
                  <h4 style={{ marginBottom: '10px', color: '#667eea' }}>Key Features:</h4>
                  <ul style={{ paddingLeft: '20px', color: '#555' }}>
                    {project.features.map((feature, index) => (
                      <li key={index} style={{ marginBottom: '8px' }}>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={project.github}
                  style={{
                    display: 'inline-block',
                    padding: '10px 25px',
                    backgroundColor: '#667eea',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '25px',
                    fontWeight: 'bold'
                  }}
                >
                  View Project →
                </a>
              </div>
            ))}
          </div>
        </section>

        <Contact />
      </div>
    </div>
  );
}

export default App;
