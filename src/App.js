
import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Navbar from '@components/Navbar.jsx';
import About from '@pages/About.jsx';
import Resume from '@pages/Resume.jsx';
import Projects from '@pages/Projects.jsx';

import profileIcon from '@icons/profile.png';

function App() {
    const location = useLocation();

    useEffect(() => {
        const favicon = document.getElementById('dynamic-favicon');
        if (favicon) {
            favicon.href = profileIcon;
            favicon.type = 'image/png';
        }
    }, []);

    useEffect(() => {
        const path = location.pathname;
        const pageTitle = path === '/'
            ? 'Alvi Aziz - About'
            : `Alvi Aziz - ${path.slice(1).charAt(0).toUpperCase() + path.slice(2)}`;
        document.title = pageTitle;
    }, [location.pathname]);

    return (
    <div className="App">
        <Navbar />
        <div className='Page'>
            <Routes>
                <Route path="/" element={<About />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </div>
        
    </div>
    );
}

export default App;
