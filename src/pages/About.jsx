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
    Hello! Welcome to my portfolio.
</p>
<p>
    My name is Alvi Aziz, and I am a soon-to-be graduate of Hunter College with a passion for software development. 
    Over the years, I have nurtured this passion through extensive studying and hands-on learning. 
    Initially, I explored various fields, including web development, mobile development, and game development. 
    Along the way, I also gained knowledge in database management, graph theory, and networking. 
    This broad foundation has given me a well-rounded perspective on the world of software development.
</p>
<p>
    My curiosity has always driven me to delve deeper into any subject matter. 
    Whether it's understanding the inner workings of a system, equation, or protocol, I strive for a comprehensive understanding. 
    For example, I am currently exploring Azure DevOps and its applications for my next project, as well as honing my skills in React while building this portfolio. 
    As a former STEM tutor, I enjoy the process of learning and problem-solving, which has equipped me to adapt to various work environments and challenges.
</p>
<p>
    Through my experiences, I have also discovered what I enjoy most in the field of computer science. 
    While I find database management less engaging, I thrive when working on creating or optimizing logic-based systems and applications. 
    Challenges like those found on platforms such as LeetCode are both stimulating and rewarding for me. 
    My primary interest lies in backend development, where I can contribute to optimizing infrastructure and developing robust systems. 
    However, I remain open to exploring frontend work, particularly in collaboration with teams working on cohesive user experiences.
</p>
<p>
    If you wish to get in touch, you can find my contact information in the "CONTACT ME" section at the top-right corner or on my resume. 
    I look forward to connecting and discussing how we can work together.
</p>

                <p className="last-updated">
                    Last Updated: December 2024
                </p>
            </div>
        </div>
    );
};

export default About;