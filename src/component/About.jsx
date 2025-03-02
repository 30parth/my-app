import React from 'react'

export default function About() {
    const styles = {
        container: {
            backgroundColor: '#283593',
            color: 'white',
            padding: '3rem',
            borderRadius: '12px',
            fontFamily: 'Roboto, sans-serif',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
            maxWidth: '800px',
            margin: '1rem auto',
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
        section: {
            marginBottom: '2.5rem',
            borderBottom: '1px solid rgba(153, 209, 255, 0.3)',
            paddingBottom: '2rem',
        },
        sectionHeading: {
            color: 'rgb(153, 209, 255)',
            marginBottom: '1rem',
            fontSize: '1.8rem',
            fontWeight: '600',
        },
        listItem: {
            listStyleType: 'none',
            marginBottom: '0.8rem',
            paddingLeft: '1.5rem',
            position: 'relative',
        },
        paragraph: {
            textAlign: 'justify',
            lineHeight: '1.8',
            fontSize: '1.1rem',
        },
        back: {
            backgroundColor: 'rgb(153, 209, 255)',
        },
    };

    return (
        <div style={styles.back}>

            <div style={styles.container}>
                <h2 style={styles.heading}>About Me</h2>

                <div style={styles.section}>
                    <h3 style={styles.sectionHeading}>Summary</h3>
                    <p style={styles.paragraph}>
                        I'm a dedicated and creative developer with a passion for crafting efficient and user-friendly web experiences. I thrive on continuous learning and enjoy tackling complex challenges. My goal is to contribute to innovative projects that make a positive impact.
                    </p>
                </div>

                <div style={styles.section}>
                    <h3 style={styles.sectionHeading}>Education</h3>
                    <ul>
                        <li style={styles.listItem}>
                            <strong>[Your Degree] in [Your Major]</strong> - [University Name], [Year Graduated]
                        </li>
                        <li style={styles.listItem}>
                            <strong>[Another Degree/Certification, if applicable]</strong> - [Institution Name], [Year]
                        </li>
                    </ul>
                </div>

                <div style={styles.section}>
                    <h3 style={styles.sectionHeading}>Skills</h3>
                    <ul>
                        <li style={styles.listItem}>JavaScript (React, Node.js)</li>
                        <li style={styles.listItem}>HTML5/CSS3</li>
                        <li style={styles.listItem}>Git/GitHub</li>
                        <li style={styles.listItem}>Responsive Design</li>
                    </ul>
                </div>

            </div>
        </div>
    );
}
