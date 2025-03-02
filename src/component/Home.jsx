import React from 'react';
import { Outlet, Link } from "react-router-dom";
import photoMy from './parth.jpg';

export default function Home() {
  const styles = {
    container: {
      backgroundColor: '#e0f2fe', // Light blue background
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      fontFamily: 'sans-serif',
      padding: '2rem',
    },
    card: {
      backgroundColor: 'white',
      borderRadius: '12px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      padding: '3rem',
      maxWidth: '800px',
      width: '100%',
      textAlign: 'center',
    },
    profileLabel: {
      backgroundColor: '#1e88e5', // Blue for "Your Profile" label
      color: 'white',
      padding: '0.5rem 1rem',
      borderRadius: '20px',
      fontSize: '0.9rem',
      marginBottom: '2rem',
      display: 'inline-block',
    },
    heading: {
      fontSize: '2.5rem',
      fontWeight: '600',
      marginBottom: '1.5rem',
      color: '#333',
    },
    paragraph: {
      fontSize: '1.1rem',
      lineHeight: '1.8',
      color: '#555',
      marginBottom: '2rem',
    },
    button: {
      backgroundColor: 'rgb(153, 209, 255)',
      color: 'white',
      padding: '1rem 2rem',
      borderRadius: '8px',
      border: 'none',
      cursor: 'pointer',
      fontSize: '1rem',
      fontWeight: '600',
    },
    profileImage: { // Style for the profile image
      width: '150px',
      height: '150px',
      borderRadius: '50%',
      marginBottom: '1.5rem',
      objectFit: 'cover', // Ensure the image fills the circle
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <img
          src={{photoMy}} // Replace with your image path
          alt="Profile"
          style={styles.profileImage}
        />
        <h1 style={styles.heading}>Hello, I'm [Parth Solanki Jitendrabhai]</h1>
        <p style={styles.paragraph}>
          I'm a passionate [Your Profession] with a focus on building robust and user-friendly web
          applications. My expertise lies in [List Key Technologies/Skills]. I enjoy tackling challenging
          problems and creating innovative solutions.
        </p>
        <p style={styles.paragraph}>
          I am currently focusing on improving my skills in [Current Focus Area].
        </p>
        <Link
          to="/projects" // Link to your projects section
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
        </Link>
      </div>
    </div>
  );
};
