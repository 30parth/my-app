import React from 'react'

export default function Projects() {
  const styles = {
    container: {
      backgroundColor: 'rgb(153, 209, 255)',
      color: 'white',
      padding: '3rem',
      fontFamily: 'Roboto, sans-serif',
    },
    heading: {
      color: 'rgb(153, 209, 255)',
      marginBottom: '2rem',
      textAlign: 'center',
      fontSize: '2.5rem',
      fontWeight: '700',
      textTransform: 'uppercase',
      letterSpacing: '2px',
    },
    projectGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
    },
    projectCard: {
      backgroundColor: '#303f9f', // Slightly lighter dark blue
      borderRadius: '12px',
      padding: '2rem',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    projectTitle: {
      color: 'rgb(153, 209, 255)',
      fontSize: '1.8rem',
      fontWeight: '600',
      marginBottom: '1rem',
      textAlign: 'center',
    },
    projectDescription: {
      marginBottom: '1.5rem',
      lineHeight: '1.6',
    },
    projectTech: {
      marginTop: '1rem',
      textAlign: 'center',
    },
    techTag: {
      backgroundColor: '#424242', // Darker gray for tags
      padding: '0.5rem 1rem',
      borderRadius: '20px',
      margin: '0.3rem',
      fontSize: '0.8rem',
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '1.5rem',
    },
    button: {
      backgroundColor: 'rgb(153, 209, 255)',
      color: '#283593',
      padding: '0.8rem 1.5rem',
      borderRadius: '8px',
      border: 'none',
      cursor: 'pointer',
      margin: '0 0.5rem',
      fontWeight: '600',
    },
    projectImage: {
      width: '100%',
      borderRadius: '8px',
      marginBottom: '1rem',
      objectFit: 'cover',
      maxHeight: '200px', // Adjust as needed
    },
  };

  const projectsData = [
    {
      title: 'Dev Portfolio',
      description: 'Developer Portfolio Website made in React. Fully customisable and dynamic, easily change data and images. Dark Mode Support.',
      tech: ['React', 'Portfolio', 'JavaScript'],
      githubLink: '#', // Replace with your GitHub link
      liveLink: '#', // Replace with your live link
      image: 'path/to/dev-portfolio-image.png', // Replace with your image path
    },
    {
      title: 'Caaring - Cab Share App',
      description: 'A Cab Sharing web app made using Django for VIT Students. People can create a new cab or request to join an existing cab. Added User authentication and password reset using SendGrid. Deployed on Heroku using gunicorn.',
      tech: ['Python', 'Django', 'Bootstrap', 'SendGrid', 'Heroku', 'Gunicorn', 'VIT'],
      githubLink: '#',
      liveLink: '#',
      image: 'path/to/caaring-image.png',
    },
    {
      title: 'Quiet Hours App',
      description: 'An Android App that automatically silences your phone during class hours, designed for VITians. Option to select class slots and custom time. Option to put on Vibrate instead of Silent.',
      tech: ['Java', 'Android', 'Alarm Manager', 'VIT'],
      githubLink: '#',
      liveLink: '#',
      image: 'path/to/quiet-hours-image.png',
    },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Projects</h2>
      <div style={styles.projectGrid}>
        {projectsData.map((project, index) => (
          <div key={index} style={styles.projectCard}>
            {project.image && <img src={project.image} alt={project.title} style={styles.projectImage} />}
            <h3 style={styles.projectTitle}>{project.title}</h3>
            <p style={styles.projectDescription}>{project.description}</p>
            <div style={styles.projectTech}>
              {project.tech.map((tech, techIndex) => (
                <span key={techIndex} style={styles.techTag}>
                  {tech}
                </span>
              ))}
            </div>
            <div style={styles.buttonContainer}>
              {project.githubLink && (
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <button style={styles.button}>GitHub</button>
                </a>
              )}
              {project.liveLink && (
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                  <button style={styles.button}>Live</button>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
