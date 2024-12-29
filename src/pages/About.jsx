import logo from '@/logo.svg';
import '@/App.css';

const About = () => {
    return (
        <>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    This is the About page.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </>
    );
};

export default About;