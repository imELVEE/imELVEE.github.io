import about_profile from '@images/about_profile.jpg';

import '@/App.css';
import "./About.css";

const About = () => {
    return (
        <div className='about'>
            <img src={about_profile} className="about-profile" alt="Me" />
            <div className='about-text-section'>
                <h1>About Me</h1>
                <p>
                    I’m Alvi Aziz, a Computer Science graduate from Hunter College (CUNY) based in Queens, NY.
                    I like work that sits close to real systems: backend logic, infrastructure, automation, and integrations.
                </p>
                <p>
                    Recently I built a self-hosted Docker stack (Home Assistant, Frigate, Mosquitto) and focused on making it reliable and secure, including Nginx, TLS, and an MQTT event flow. 
                    I enjoy taking something that works “in theory” and pushing it until it works consistently in the real world.
                    
                </p>
                <p>
                    I’m currently looking for entry-level roles in backend, infrastructure, or software engineering, and I’m open to adjacent IT roles where I can keep building and shipping.
                </p>
                <p>
                    Core stack: C++ • Python • JavaScript/TypeScript • SQL • Docker • Linux • Nginx • Git
                </p>
                <p>
                    If you wish to get in touch, you can find my contact information in the "CONTACT ME" section at the top-right corner or on my resume. 
                </p>
                <p>
                    I look forward to connecting and discussing how we can work together.
                    Use the navbar to view Projects and Resume, or click the buttons below.
                </p>

                <p className="last-updated">
                    Last Updated: February 2026
                </p>
                <div className="about-buttons">
                    <a href="/resume" className="about-button">View Resume</a>
                    <a href="/projects" className="about-button">View Projects</a>
                </div>
            </div>
        </div>
    );
};

export default About;