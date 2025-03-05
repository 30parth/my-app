import React from 'react'

export default function About(props) {
    const styles = {
        container: {
            // backgroundColor:  props.dark ? '#333' : '#eee',
            backgroundColor:  props.dark ? '#eee' : '#333',
            // color:  props.dark ? '#eee' : '#333 ',
            color:  props.dark ? '#333' : '#eee',
            padding: '5rem',
            borderRadius: '12px',
            fontFamily: 'Roboto, sans-serif',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
            maxWidth: '800px',
            margin: '0rem auto',
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
        section: {
            marginBottom: '2.5rem',
            borderBottom: '1px solid rgb(68, 110, 142)',
            paddingBottom: '2rem',
        },
        sectionHeading: {
            // color: props.dark ? '#eee' : '#333',
            color:  props.dark ? '#333' : '#eee',
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
            // backgroundColor:  props.dark ? '#222' : '#fff',
            backgroundColor:  props.dark ? '#fff' : '#222',
            margin: '0',
            padding: '3rem',
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
                            <strong>Diploma in Computer Engineering with 9.05 CGPA</strong> - Gujarat Technological University in 2024
                        </li>
                        <li style={styles.listItem}>
                            <strong>Compeleted 10th with 86%</strong> - Adarsh School in 2021
                        </li>
                    </ul>
                </div>

                <div style={styles.section}>
                    <h3 style={styles.sectionHeading}>Skills</h3>
                    <ul>
                        <li style={styles.listItem}>JavaScript (React)</li>
                        <li style={styles.listItem}>HTML5/CSS3</li>
                        <li style={styles.listItem}>Git/GitHub</li>
                        <li style={styles.listItem}>Python</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
