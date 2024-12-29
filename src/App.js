import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';

import Navbar from '@components/Navbar.jsx';
import About from '@pages/About.jsx';
import Resume from '@pages/Resume';

function App() {
    const location = useLocation();

    useEffect(() => {
        const initializeNavbar = () => {
            let currentPath = location.pathname;
            if (currentPath === '/') {
                currentPath = 'about';
            }
            else {
                currentPath = currentPath.substring(1);
            }
            Array.from(document.querySelector('ul#navbar').getElementsByTagName('a')).forEach(function (e) {
                e.classList.remove("active")
            });
            document.getElementById(currentPath).className = "active";
        };

        initializeNavbar()
    }, [location.pathname]);

    return (
    <div className="App">
        <Navbar />
        <div className='Page'>
            <Routes>
                <Route path="/" element={<About />} />
                <Route path="/resume" element={<Resume />} />
            </Routes>
        </div>
        
    </div>
    );
}

export default App;