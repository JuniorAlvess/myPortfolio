import React from 'react';
import { FaLink, FaGithub, FaHtml5, FaCss3, FaNode, FaReact, FaNodeJs } from 'react-icons/fa'

import imageProject from '../assets/imageProject.jpg'

export default function Projects() {
    return (
        <section>
            <h2>Projetos</h2>
            <div className="projects">
                <div className="project">
                    <img src={imageProject} alt="Imagem do projeto" />
                    <span><h3>Projeto 1</h3> <FaLink className="project-icon" size={22} color="#333" /> <FaGithub className="project-icon" size={22} /></span>
                    <div className="techs">
                        <FaHtml5 className="project-icon" size={22} color="#e34f26" />
                        <FaCss3 className="project-icon" size={22} color="#1AA3FF" />
                        <FaReact className="project-icon" size={22} color="#66D9FF" />
                        <FaNodeJs className="project-icon" size={22} color="#00B300" />
                    </div>
                </div>
                <div className="project">
                    <img src={imageProject} alt="Imagem do projeto" />
                    <span><h3>Projeto 2</h3> <FaLink className="project-icon" size={22} color="#333" /> <FaGithub className="project-icon" size={22} /></span>
                    <div className="techs">
                        <FaHtml5 className="project-icon" size={22} color="#e34f26" />
                        <FaCss3 className="project-icon" size={22} color="#1AA3FF" />
                        <FaReact className="project-icon" size={22} color="#66D9FF" />
                        <FaNodeJs className="project-icon" size={22} color="#00B300" />
                    </div>
                </div>
                <div className="project">
                    <img src={imageProject} alt="Imagem do projeto" />
                    <span><h3>Projeto 3</h3> <FaLink className="project-icon" size={22} color="#333" /> <FaGithub className="project-icon" size={22} /></span>
                    <div className="techs">
                        <FaHtml5 className="project-icon" size={22} color="#e34f26" />
                        <FaCss3 className="project-icon" size={22} color="#1AA3FF" />
                        <FaReact className="project-icon" size={22} color="#66D9FF" />
                        <FaNodeJs className="project-icon" size={22} color="#00B300" />
                    </div>
                </div>
                <div className="project">
                    <img src={imageProject} alt="Imagem do projeto" />
                    <span><h3>Projeto 4</h3> <FaLink className="project-icon" size={22} color="#333" /> <FaGithub className="project-icon" size={22} /></span>
                    <div className="techs">
                        <FaHtml5 className="project-icon" size={22} color="#e34f26" />
                        <FaCss3 className="project-icon" size={22} color="#1AA3FF" />
                        <FaReact className="project-icon" size={22} color="#66D9FF" />
                        <FaNodeJs className="project-icon" size={22} color="#00B300" />
                    </div>
                </div>
                <div className="project">
                    <img src={imageProject} alt="Imagem do projeto" />
                    <span><h3>Projeto 5</h3> <FaLink className="project-icon" size={22} color="#333" /> <FaGithub className="project-icon" size={22} /></span>
                    <div className="techs">
                        <FaHtml5 className="project-icon" size={22} color="#e34f26" />
                        <FaCss3 className="project-icon" size={22} color="#1AA3FF" />
                        <FaReact className="project-icon" size={22} color="#66D9FF" />
                        <FaNodeJs className="project-icon" size={22} color="#00B300" />
                    </div>
                </div>
                <div className="project">
                    <img src={imageProject} alt="Imagem do projeto" />
                    <span><h3>Projeto 6</h3> <FaLink className="project-icon" size={22} color="#333" /> <FaGithub className="project-icon" size={22} /></span>
                    <div className="techs">
                        <FaHtml5 className="project-icon" size={22} color="#e34f26" />
                        <FaCss3 className="project-icon" size={22} color="#1AA3FF" />
                        <FaReact className="project-icon" size={22} color="#66D9FF" />
                        <FaNodeJs className="project-icon" size={22} color="#00B300" />
                    </div>
                </div>
            </div>
        </section>
    );
}