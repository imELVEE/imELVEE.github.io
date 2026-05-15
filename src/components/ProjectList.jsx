import ListItem from '@components/ListItem';

import peepifyLogo from '@icons/peepifyLogo.png';
import { ICONS } from "@icons/index";
import { projects } from "@data/projects";

import "./ProjectList.css";

const IMAGES = {
    peepifyLogo,
};

const ProjectList = () => {
    return (
        <>
            <h1 className='list-title'>A List of Some Neat Projects!</h1>
            <ul className="project-list">
                {projects.map((project) => {
                    const IconComponent = project.icon ? ICONS[project.icon] : null;
                    const iconElement = IconComponent ? <IconComponent /> : null;

                    const imageSrc = project.image ? IMAGES[project.image] : null;
                    
                    return (
                    <ListItem
                        key={project.id}
                        icon={iconElement}
                        image={imageSrc}
                        title={project.title}
                        description={project.description}
                        projectLink={project.url}
                    />
                    );
                })}
            </ul>
        </>
    );
};

export default ProjectList;
