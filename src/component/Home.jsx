import React from 'react'

export default function Home() {
    return (
        <section id="home" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '80vh',
            background: 'linear-gradient(135deg, #E3F2FD, #BBDEFB)', // Gradient background
            padding: '4rem 2rem',
            textAlign: 'center',
          }}>
            <div style={{ maxWidth: '800px', borderRadius: '12px', padding: '3rem', background: 'rgba(255, 255, 255, 0.9)', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
              <div style={{ marginBottom: '2rem' }}>
                <img
                  src="./component/parth.jpg" // Replace with your image path
                  alt="Your Profile"
                  style={{
                    width: '150px',
                    height: '150px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    marginBottom: '1rem',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)',
                  }}
                />
              </div>
              <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#283593' }}>
                Hello, I'm [Parth Solanki Jitendrabhai]
              </h1>
              <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#333' }}>
                I'm a passionate [Your Profession] with a focus on building robust and user-friendly web applications.
                My expertise lies in [List Key Technologies/Skills]. I enjoy tackling challenging problems and creating innovative solutions.
              </p>
              <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#333' }}>
                  I am currently focusing on improving my skills in [Current Focus Area].
              </p>
              <div style={{ marginTop: '2rem' }}>
                <a
                  href="/projects" // Link to your projects section
                  style={{
                    backgroundColor: '#283593',
                    color: 'white',
                    padding: '1rem 2rem',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    transition: 'background-color 0.3s ease',
                  }}
                  onMouseOver={(e) => (e.target.style.backgroundColor = '#1A237E')}
                  onMouseOut={(e) => (e.target.style.backgroundColor = '#283593')}
                >
                  View My Work
                </a>
              </div>
            </div>
          </section>
    );
}
