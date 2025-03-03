import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const styles = {
    navbar: {
      backgroundColor: '#333',
      color: 'white',
      padding: '30px 0',
      fontFamily: 'Roboto, sans-serif',
    },
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px',
    },
    logo: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      textDecoration: 'none',
      color: 'white',
    },
    menu: {
      listStyle: 'none',
      display: 'flex',
      margin: '0',
      padding: '0',
    },
    item: {
      marginLeft: '20px',
    },
    link: {
      backgroundColor: '#333',
      textDecoration: 'none',
      color: 'white',
      padding: '20px 15px',
    },
    linkToggle: {
      backgroundColor: 'rgb(255, 255, 255)',
      textDecoration: 'none',
      color: 'black',
      padding: '20px 15px',
    },
    linkHover: {
      color: 'rgb(0,0,0)',
      padding: '20px 15px',
      backgroundColor: 'rgb(255, 255, 255)',
      borderRadius: '4px',
    },
    button: {
      textDecoration: 'none',
      background: 'none',
      border: 'none',
      color: 'white',
      cursor: 'pointer',
    },
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.container}>
        <Link to="/" style={styles.logo}>
          Parth Solanki
        </Link>
        <ul style={styles.menu}>
          <li style={styles.item}>
            <Link
              to="/home"
              style={styles.link}
              onMouseOver={(e) => {
                e.target.style.color = styles.linkHover.color;
                e.target.style.backgroundColor = styles.linkHover.backgroundColor;
                e.target.style.borderRadius = styles.linkHover.borderRadius;
              }}
              onMouseOut={(e) => {
                e.target.style.color = styles.link.color;
                e.target.style.backgroundColor = styles.link.backgroundColor;
              }}
            >
              Home
            </Link>
          </li>
          <li style={styles.item}>
            <Link
              to="/about"
              style={styles.link}
              onMouseOver={(e) => {
                e.target.style.color = styles.linkHover.color;
                e.target.style.backgroundColor = styles.linkHover.backgroundColor;
                e.target.style.borderRadius = styles.linkHover.borderRadius;
              }}
              onMouseOut={(e) => {
                e.target.style.color = styles.link.color;
                e.target.style.backgroundColor = styles.link.backgroundColor;
              }}
            >
              About
            </Link>
          </li>
          <li style={styles.item}>
            <Link
              to="/projects"
              style={styles.link}
              onMouseOver={(e) => {
                e.target.style.color = styles.linkHover.color;
                e.target.style.backgroundColor = styles.linkHover.backgroundColor;
                e.target.style.borderRadius = styles.linkHover.borderRadius;
              }}
              onMouseOut={(e) => {
                e.target.style.color = styles.link.color;
                e.target.style.backgroundColor = styles.link.backgroundColor;
              }}
            >
              Projects
            </Link>
          </li>
          <li style={styles.item}>
            <Link
              to="/contact"
              style={styles.link}
              onMouseOver={(e) => {
                e.target.style.color = styles.linkHover.color;
                e.target.style.backgroundColor = styles.linkHover.backgroundColor;
                e.target.style.borderRadius = styles.linkHover.borderRadius;
              }}
              onMouseOut={(e) => {
                e.target.style.color = styles.link.color;
                e.target.style.backgroundColor = styles.link.backgroundColor;
              }}
            >
              Contact
            </Link>
          </li>
          <li style={styles.item}>
            <Link style={styles.linkToggle} 
              onMouseOver={(e) => {
                e.target.style.color = styles.linkHover.color;
                e.target.style.backgroundColor = styles.linkHover.backgroundColor;
                e.target.style.borderRadius = styles.linkHover.borderRadius;
              }}
              onMouseOut={(e) => {e.target.style.color = styles.linkToggle.color;
                e.target.style.backgroundColor = styles.linkToggle.backgroundColor;
              }}
              onClick={props.toggleDark}
            >
              {props.dark ? 'DarkMode' : 'Lightmode' }
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}