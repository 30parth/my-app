import React from 'react'

export default function Body() {
    return (
        <main style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
            <section id="home" style={{ marginBottom: '4rem' }}>
                <h2>Welcome to My Portfolio</h2>
                <p>
                    Hello! I'm [Your Name], a passionate [Your Profession] with a focus on [Your Skills/Interests].
                    This portfolio showcases my projects and experiences.
                </p>
                {/* Add more home section content like a hero image or a brief bio */}
            </section>

            <section id="about" style={{ marginBottom: '4rem' }}>
                <h2>About Me</h2>
                <p>
                    I have a background in [Your Background]. I'm particularly interested in [Specific Areas].
                    My goal is to [Your Goal].
                </p>
                {/* Add more about section content like your education, skills, and experience */}
            </section>

            <section id="projects" style={{ marginBottom: '4rem' }}>
                <h2>My Projects</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {/* Example Project Cards */}
                    <div style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '8px' }}>
                        <h3>Project 1</h3>
                        <p>Description of Project 1.</p>
                        <a href="/">View Project</a>
                    </div>
                    <div style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '8px' }}>
                        <h3>Project 2</h3>
                        <p>Description of Project 2.</p>
                        <a href="/">View Project</a>
                    </div>
                    {/* Add more project cards */}
                </div>
            </section>

            <section id="contact" style={{ marginBottom: '4rem' }}>
                <h2>Contact Me</h2>
                <p>Feel free to reach out to me for collaborations or inquiries.</p>
                <form>
                    <div style={{ marginBottom: '1rem' }}>
                        <label htmlFor="name">Name:</label><br />
                        <input type="text" id="name" name="name" style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }} />
                    </div>
                    <div style={{ marginBottom: '1rem' }}>
                        <label htmlFor="email">Email:</label><br />
                        <input type="email" id="email" name="email" style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }} />
                    </div>
                    <div style={{ marginBottom: '1rem' }}>
                        <label htmlFor="message">Message:</label><br />
                        <textarea id="message" name="message" rows="4" style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}></textarea>
                    </div>
                    <button type="submit" style={{ backgroundColor: '#283593', color: 'white', padding: '0.5rem 1rem', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                        Send Message
                    </button>
                </form>
            </section>
        </main>
    );
}
