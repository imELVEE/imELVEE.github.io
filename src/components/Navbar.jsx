import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaRegCopy } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';
import { IoClose } from "react-icons/io5";

import './Navbar.css';

const Navbar = () => {
    const navigate = useNavigate();
    const [activePage, setActivePage] = useState(undefined);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [notification, setNotification] = useState('');

    useEffect(() => {
        // Set the active page based on the current URL
        const path = window.location.pathname;
        if (path === '/') {
            setActivePage('about');
        } else if (path === '/resume') {
            setActivePage('resume');
        } else if (path === '/projects') {
            setActivePage('projects');
        }
    }, []);

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

    const navigateToPage = (page) => {
        setActivePage(page);
        setIsMenuOpen(false);

        if (page === 'about') {
            navigate('/');
            return;
        }
        navigate(`/${page}`);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev);
    };

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
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
            <nav id="navbar">
                <div className="navbar-header">
                    <button
                        className="hamburger"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen && <IoClose  />}
                        {!isMenuOpen && <FaBars />}
                    </button>
                    <h1>My Portfolio</h1>
                </div>
                <ul id='navbar-links' className={`${isMenuOpen ? 'open' : ''}`}>
                    <li className='left'><button className={activePage === 'about' ? 'active' : ''} id='about' onClick={() =>navigateToPage('about')}>ABOUT</button></li>
                    <li className='left'><button className={activePage === 'resume' ? 'active' : ''} id='resume' onClick={() => navigateToPage('resume')}>RESUME</button></li>
                    <li className='left'><button className={activePage === 'projects' ? 'active' : ''} id='projects' onClick={() => navigateToPage('projects')}>PROJECTS</button></li>

                    <li className="right">
                        <button id='contact' onClick={toggleDropdown}>CONTACT ME</button>
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
            </nav>
            {notification && <div className="notification">{notification}</div>}
        </>
    )
};

export default Navbar;