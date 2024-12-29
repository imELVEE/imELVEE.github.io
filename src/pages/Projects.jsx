import Calendar from "@/components/Calendar.jsx";
import RepoList from "@/components/RepoList.jsx";

import "./Projects.css";

const Projects = () => {
    
    return (
        <div className='projects'>
            <Calendar />
            <RepoList />
        </div>
    );
};

export default Projects;