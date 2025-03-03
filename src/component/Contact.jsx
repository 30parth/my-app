import React from 'react'
import { Link } from 'react-router-dom';

export default function Contact(props) {
    const styles = {
        container: {
            backgroundColor:  props.dark ? '#333' : '#eee',
            color:  props.dark ? '#eee' : '#333 ',
            padding: '5rem',
            borderRadius: '12px',
            fontFamily: 'Roboto, sans-serif',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
            maxWidth: '800px',
            margin: '1rem auto',
            justifyContent: 'center',
            textAlign: 'center',
        },
        title: {
            fontSize: '2rem',
            marginBottom: '30px',
        },
        contactDetails: {
            marginBottom: '20px',
            color: props.dark ? '#eee' : '#333'
        },
        socialIcons: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '20px',
            maxWidth: '1000px',
            borderRadius: '10px',
            backgroundColor: props.dark ? '#ccc' : '#aaa'
        },
        socialIcon: {
            margin: '0 20px',
            fontSize: '2.5rem',
            color: '#333',
            textDecoration: 'none',
        },
        whatsappIcon: {
            color: '#25D366',
        },
        instagramIcon: {
            color: '#E1306C',
        },
        githubIcon: {
            color: '#171515',
        },
        back: {
            backgroundColor:  props.dark ? '#222' : '#fff',
            margin: '0',
            padding: '5rem',
        },
    };

    return (
        <div style={styles.back}>
            <div style={styles.container} id="contact">
                <h2 style={styles.title}>Contact Us</h2>

                <div style={styles.contactDetails}>
                    <p>Email: <Link to="mailto:aparth3010@gmail.com"> aparth3010@gmail.com</Link></p>
                    <p>Phone: <Link to="tel:+91 798401721">+91 79840 17213</Link></p>
                    <p>Address: Block 5 Pujan aepartment ,near jain derasar Bhaikaka nagar thaltej, Ahmedabad </p>
                </div>
                <p>Connect with us on social media:</p>

                <div style={styles.socialIcons}>
                    <a
                        href="YOUR_INSTAGRAM_LINK"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ ...styles.socialIcon, ...styles.instagramIcon }}
                    >
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a
                        href="YOUR_GITHUB_LINK"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ ...styles.socialIcon, ...styles.githubIcon }}
                    >
                        <i className="fab fa-github"></i>
                    </a>
                    <a
                        href="YOUR_WHATSAPP_LINK"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ ...styles.socialIcon, ...styles.whatsappIcon }}
                    >
                        <i className="fab fa-whatsapp"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}
