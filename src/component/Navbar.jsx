import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav style={{
            backgroundColor: '#283593', // Deep blue background
            padding: '1rem 2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', // Subtle shadow
        }}>
            <div style={{ color: '#E3F2FD', fontSize: '1.5rem', fontWeight: 'bold' }}>
                My Portfolio
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', gap: '2rem' }}>
                <li>
                    <Link to="/home" style={{ color: '#BBDEFB', textDecoration: 'none', transition: 'color 0.3s ease-in-out' }}
                        onMouseOver={(e) => (e.target.style.color = '#FFFFFF')}
                        onMouseOut={(e) => (e.target.style.color = '#BBDEFB')}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/about" style={{ color: '#BBDEFB', textDecoration: 'none', transition: 'color 0.3s ease-in-out' }}
                        onMouseOver={(e) => (e.target.style.color = '#FFFFFF')}
                        onMouseOut={(e) => (e.target.style.color = '#BBDEFB')}
                    >
                        About me
                    </Link>
                </li>
                <li>
                    <Link to="/projects" style={{ color: '#BBDEFB', textDecoration: 'none', transition: 'color 0.3s ease-in-out' }}
                        onMouseOver={(e) => (e.target.style.color = '#FFFFFF')}
                        onMouseOut={(e) => (e.target.style.color = '#BBDEFB')}
                    >
                        Projects
                    </Link>
                </li>
                <li>
                    <Link to="/contact" style={{ color: '#BBDEFB', textDecoration: 'none', transition: 'color 0.3s ease-in-out' }}
                        onMouseOver={(e) => (e.target.style.color = '#FFFFFF')}
                        onMouseOut={(e) => (e.target.style.color = '#BBDEFB')}
                    >
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
