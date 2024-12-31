import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaRegCopy } from 'react-icons/fa';

import './Navbar.css';

const Navbar = () => {
    const navigate = useNavigate();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [notification, setNotification] = useState('');

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.dropdown-content') && !event.target.closest('#contact')) {
                setIsDropdownOpen(false);
            }
        };

        if (isDropdownOpen) {
            document.addEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isDropdownOpen]);

    const navigateToAbout = () => {
        Array.from(document.querySelector('ul#navbar').getElementsByTagName('a')).forEach(function (e) {
            e.classList.remove("active")
        });
        document.getElementById('about').className = "active";

        navigate('/');
    };

    const navigateToPage = (page) => {
        Array.from(document.querySelector('ul#navbar').getElementsByTagName('a')).forEach(function (e) {
            e.classList.remove("active")
        });
        document.getElementById(page).className = "active";

        navigate(`/${page}`);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev);
    };
    
    const copyToClipboard = (text, fieldName) => {
        navigator.clipboard.writeText(text);
        setNotification(`${fieldName} copied to clipboard!`);

        // Automatically hide the notification after 3 seconds
        setTimeout(() => {
            setNotification('');
        }, 3000);
    };
    
    return (
        <>
            <ul id='navbar'>
                <li><a className="active" id='about' onClick={navigateToAbout}>ABOUT</a></li>
                <li><a id='resume' onClick={() => navigateToPage('resume')}>RESUME</a></li>
                <li><a id='projects' onClick={() => navigateToPage('projects')}>PROJECTS</a></li>

                <li className="right">
                    <a id='contact' onClick={toggleDropdown}>CONTACT ME</a>
                    {isDropdownOpen && (
                        <div className="dropdown-content">
                            <h3>Contact Information</h3>
                            <div className="field">
                                <strong>Email:</strong>
                                <span>imELVEE55@gmail.com</span>
                                <button
                                    className="copy-button"
                                    onClick={() => copyToClipboard('imELVEE55@gmail.com', 'Email')}
                                >
                                    <FaRegCopy />
                                </button>
                            </div>
                            <div className="field">
                                <strong>Phone:</strong>
                                <span>+1 (646) 316-7465</span>
                                <button
                                    className="copy-button"
                                    onClick={() => copyToClipboard('+1 (646) 316-7465', 'Phone')}
                                >
                                    <FaRegCopy />
                                </button>
                            </div>
                        </div>
                    )}
                </li>
            </ul>
            {notification && <div className="notification">{notification}</div>}
        </>
    )
};

export default Navbar;