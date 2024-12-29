import { useNavigate } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
    const navigate = useNavigate();

    const navigateToAbout = () => {
        Array.from(document.querySelector('ul#navbar').getElementsByTagName('a')).forEach(function (e) {
            e.classList.remove("active")
        });
        document.getElementById('about').className = "active";

        navigate('/');
    };

    const navigateToResume = () => {
        Array.from(document.querySelector('ul#navbar').getElementsByTagName('a')).forEach(function (e) {
            e.classList.remove("active")
        });
        document.getElementById('resume').className = "active";

        navigate('/resume');
    };

    //<li><a id='dynamic' onClick={navigateToDynamic}>DYNAMIC</a></li>
    return (
        <ul id='navbar'>
            <li><a className="active" id='about' onClick={navigateToAbout}>ABOUT</a></li>
            <li><a id='resume' onClick={navigateToResume}>RESUME</a></li>
        </ul>
    )
};

export default Navbar;