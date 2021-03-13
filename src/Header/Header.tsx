import React from 'react';
import './style.css'

export default function Header() {

    function handleMenu() {
        document.getElementById('menu')?.classList.toggle("change")
        document.getElementById('heightMenu')?.classList.toggle("height-menu")
    }
    return (
        <header>
            <nav>
                <div id="menu" className="menu-hamburger" onClick={handleMenu}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
                <ul id="heightMenu">
                    <li>Home</li>
                    <li>Projetos</li>
                    <li>Sobre</li>
                    <li>Habilidades</li>
                </ul>
            </nav>
            <article>
                <p>
                    Junior Alves.
                    Web Developer.
                    Front-end Developer.
                    </p>

                <div className="social-networks">

                </div>
            </article>
        </header>
    );
}