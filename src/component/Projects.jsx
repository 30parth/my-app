import React from 'react'

export default function Projects(props) {
  const styles = {
    container: {
      // backgroundColor: props.dark ? '#222' : '#eee',
      backgroundColor: props.dark ? '#eee' : '#222',
      // color: props.dark ? '#eee' : '#333',
      color: props.dark ? '#333' : '#eee',
      padding: '3rem 1.5rem',
      fontFamily: 'Roboto, sans-serif',
    },
    heading: {
      // color:  props.dark ? '#eee' : '#333',
      color:  props.dark ? '#333' : '#eee',
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
      // backgroundColor: props.dark ? '#333' : '#ddd',
      backgroundColor: props.dark ? '#ddd' : '#333', 
      borderRadius: '12px',
      padding: '2rem',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.34)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    projectTitle: {
      // color:  props.dark ? '#eee' : '#333',
      color:  props.dark ? '#333' : '#eee',
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
      // color: props.dark ? '#333' : '#eee',
      color: props.dark ? '#eee' : '#333',
    },
    techTag: {
      // backgroundColor:  props.dark ? '#ddd' : '#222', 
      backgroundColor:  props.dark ? '#222' : '#ddd', // Darker gray for tags
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
  };

  const projectsData = [
    {
      title: 'Dev Portfolio',
      description: 'Developer Portfolio Website made in React. Fully customisable and Dark Mode Support.',
      tech: ['React', 'Portfolio', 'JavaScript'],
      githubLink: 'https://github.com/30parth/my-app', // Replace with your GitHub link
      liveLink: 'https://parthsolankij.netlify.app/', // Replace with your live link
    },
    {
      title: 'NewsMonkey',
      description: 'A News application with daily news updates made in React.  ',
      tech: ['JavaScrpit', 'React', 'NEWSAPI','Bootstrap'],
      githubLink: 'https://github.com/30parth/newsApp',
    },
    {
      title: 'Foodly',
      description: 'An Android App that automatically silences your phone during class hours, designed for VITians. Option to select class slots and custom time. Option to put on Vibrate instead of Silent.',
      tech: ['HTML', 'CSS', 'PHP', 'Bootstrap'],
      githubLink: 'https://github.com/30parth/Foodly',
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
