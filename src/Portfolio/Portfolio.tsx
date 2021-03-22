import React from 'react';
import Header from '../Header/Header'
import Projects from '../Projects/Projects'
import Project from '../components/Project/Project'
import { FaLink, FaGithub, FaHtml5, FaCss3, FaNode, FaReact, FaNodeJs } from 'react-icons/fa'

import imageProject from '../assets/imageProject.jpg'

export default function Portfolio() {
    // const icon = `$<FaCss3 />`
    return (
        <>
            <Header />
            <main>
                <section>
                    <h2>Projetos</h2>
                    <Project
                        image={imageProject}
                        title="Projeto 1"
                        icon={
                            [
                                <FaCss3 className="project-icon" size={22} color="#1AA3FF" />,
                                <FaHtml5 className="project-icon" size={22} color="#e34f26" />,
                                <FaReact className="project-icon" size={22} color="#66D9FF" />,
                                <FaNodeJs className="project-icon" size={22} color="#00B300" />
                            ]
                        }
                        linkToDocumentation="https://developer.mozilla.org/pt-BR/docs/Web/CSS"
                    />
                </section>
                {/* <Projects /> */}
            </main>
        </>
    );
}