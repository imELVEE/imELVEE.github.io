import React from 'react';
import ListItem from '@components/ListItem';

import peepifyLogo from '@icons/peepifyLogo.png';
import { VscTerminalPowershell } from "react-icons/vsc";
import { TbWorldWww } from "react-icons/tb";
import { FaGamepad } from "react-icons/fa";
import { IoPhonePortraitOutline } from "react-icons/io5";

import "./ProjectList.css";

const ProjectList = () => {
    const projects = [
        {
            id: 0,
            icon: <TbWorldWww />,
            title: 'This Website',
            description: 'A collection of personal info as my portfolio. Source code in "source" branch.',
        },
        {
            id: 1,
            icon: <VscTerminalPowershell />,
            title: 'PowerShell Profile and Scripts',
            description: 'A collection of commands and scripts for use in Powershell.',
        },
        {
            id: 2,
            image: peepifyLogo,
            title: 'Peepify',
            description: 'An interface for Spotify, giving recommendations based on song choice.',
        },
        {
            id: 5,
            icon: <IoPhonePortraitOutline />,
            title: 'Task Manager App',
            description: 'A phone app built in Flutter that allows you to create and manage tasks and projects.',
        },
        {
            id: 3,
            icon: <FaGamepad />,
            title: 'Game Engine implementation',
            description: 'An implementation of a game engine using OpenGL (GLFW) and GLAD as well as a very simple game using it.',
        },
        {
            id: 4,
            icon: <TbWorldWww />,
            title: 'NBA Website',
            description: 'A website to view live game scores and view teams/players from the NBA. Currently disfunctional because I stopped paying for the API key.',
        },
    ];

    return (
        <>
            <h1>A List of Some Neat Projects!</h1>
            <ul className="project-list">
                {projects.map((project) => (
                    <ListItem
                        key={project.id}
                        icon={project.icon}
                        image={project.image}
                        title={project.title}
                        description={project.description}
                        onClick={() => console.log(`Clicked on ${project.title}`)}
                    />
                ))}
            </ul>
        </>
    );
};

export default ProjectList;