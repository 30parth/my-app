import React from 'react';
import {Link } from "react-router-dom";
import Profile from '../assets/images/profile.png';

export default function Home(props) {
  const styles = {
    container: {
      backgroundColor: props.dark ? ' #f4f4f4': ' #222',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      fontFamily: 'Roboto, sans-serif',
      padding: '2rem',
    },
    card: {
      backgroundColor: props.dark ? '#fff' : '#333',
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
      color: props.dark ? '#333' : '#eee',
    },
    paragraph: {
      fontSize: '1.1rem',
      lineHeight: '1.8',
      color: props.dark ? '#332' : '#eed',
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
          src={{Profile}} // Replace with your image path
          alt="Profile"
          style={styles.profileImage}
        />
        <h1 style={styles.heading}>Hello, I'm Parth Solanki Jitendrabhai</h1>
        <p style={styles.paragraph}>
        As a computer engineer and web developer, I'm passionate about crafting dynamic and user-friendly web experiences. My expertise lies in React, where I enjoy building interactive interfaces and optimizing performance.
        </p>
        <p style={styles.paragraph}>
          I am currently focusing on improving my skills in web development .My goal is to create impactful and efficient web applications that meet user needs.I enjoy solving problems and making websites work well.
        </p>
        <Link
          to="/projects" // Link to your projects section
          style={{
            backgroundColor: 'rgb(153, 209, 255)',
            color: '#283593',
            padding: '1rem 2rem',
            borderRadius: '8px',
            textDecoration: 'none',
            transition: 'background-color 0.3s ease',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = 'rgb(153, 209, 255)')}
          onMouseOut={(e) => (e.target.style.backgroundColor = 'rgb(167, 191, 255)')}
        >
          View My Work
        </Link>
      </div>
    </div>
  );
};
