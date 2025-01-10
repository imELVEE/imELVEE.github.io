
import { Route, Routes } from 'react-router-dom';

import Navbar from '@components/Navbar.jsx';
import About from '@pages/About.jsx';
import Resume from '@pages/Resume.jsx';
import Projects from '@pages/Projects.jsx';

function App() {
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
