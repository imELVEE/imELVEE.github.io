import about_profile from '@assets/about_profile.jpg';

import '@/App.css';
import "./About.css";

const About = () => {
    return (
        <div className='about'>
            <img src={about_profile} className="about-profile" alt="Me" />
            <p>
                Lorem ipsum.
            </p>
        </div>
    );
};

export default About;