import React from 'react';
import { Link } from 'react-router-dom';
import { FaLink, FaGithub, FaHtml5, FaCss3, FaNode, FaReact, FaNodeJs } from 'react-icons/fa'

import imageProject from '../assets/imageProject.jpg'

interface ProjectProps {
    image: string;
    title: string;
    linkToWebsite?: string;
    linkToRepo?: string;
    icon?: Array<any>;
    linkToDocumentation?: string;
}

const Project: React.FC<ProjectProps> = (props) => {
    return (
        <div className="projects">
            <div className="project">
                <img src={props.image} alt="Imagem do projeto" />
                <span>
                    <h3>
                        {props.title}
                    </h3>
                    <a href={props.linkToWebsite} target="_blank">
                        <FaLink className="project-icon" size={22} color="#333" />
                    </a>
                    <a href={props.linkToRepo} target="_blank">
                        <FaGithub className="project-icon" size={22} />
                    </a>
                </span>
                <div className="techs">
                    <a href={props.linkToDocumentation} target="_blank">
                        {props.icon}
                    </a>
                    {/* <FaHtml5 className="project-icon" size={22} color="#e34f26" /> */}
                    {/* <FaCss3 className="project-icon" size={22} color="#1AA3FF" /> */}
                    {/* <FaReact className="project-icon" size={22} color="#66D9FF" /> */}
                    {/* <FaNodeJs className="project-icon" size={22} color="#00B300" /> */}
                </div>
            </div>
        </div>
    );
}

export default Project;