import Calendar from "@/components/Calendar.jsx";
import ProjectList from "@/components/ProjectList.jsx";

import "./Projects.css";

const Projects = () => {
    
    return (
        <div className='projects'>
            <Calendar />
            <ProjectList />
        </div>
    );
};

export default Projects;