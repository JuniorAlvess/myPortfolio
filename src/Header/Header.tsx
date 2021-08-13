import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope } from 'react-icons/fa'
import './style.css'
// import BackImageHeader from '../assets/BackImageHeader.svg'
// import BackImageFooter from '../assets/BackImageFooter.svg'

export default function Header() {

    function handleMenu() {
        document.getElementById('menu')?.classList.toggle("change")
        document.getElementById('heightMenu')?.classList.toggle("height-menu")

        document.querySelectorAll('a')?.forEach(element => {
            element.onclick = () => {
                document.querySelector('ul')?.classList.remove('height-menu')
                document.getElementById('menu')?.classList.toggle("change")
            }
        })
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
                    <a href="#">
                        <li>Home</li>
                    </a>
                    <a href="#projects">
                        <li>Projetos</li>
                    </a>
                    <a href="#">
                        <li>Sobre</li>
                    </a>
                    <a href="#">
                        <li>Habilidades</li>
                    </a>
                </ul>
            </nav>
            <article>
                <p>
                    Junior Alves.
                    <br />
                    Web Developer.
                    <br />
                    Front-end Developer.
                </p>

                <div className="social-networks">
                    <p>Redes Sociais</p>
                    <FaFacebook className="icon-networks" fontSize={31.12} color="#3b5998" />
                    <FaTwitter className="icon-networks" fontSize={31.12} color="#00aced" />
                    <FaLinkedin className="icon-networks" fontSize={31.12} color="#007bb6" />
                    <FaGithub className="icon-networks" fontSize={31.12} />
                </div>

                <div className="contact">
                    <p>Contatos</p>
                    <FaWhatsapp className="icon-contact" fontSize={31.12} color="#34af23" />
                    <FaEnvelope className="icon-contact" fontSize={31.12} color="#EA4335" />
                </div>
            </article>
            <div className="backImageHeader">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#f3f4f5" fill-opacity="1" height="300px" d="M0,256L11.4,250.7C22.9,245,46,235,69,229.3C91.4,224,114,224,137,218.7C160,213,183,203,206,170.7C228.6,139,251,85,274,85.3C297.1,85,320,139,343,176C365.7,213,389,235,411,245.3C434.3,256,457,256,480,234.7C502.9,213,526,171,549,176C571.4,181,594,235,617,245.3C640,256,663,224,686,186.7C708.6,149,731,107,754,122.7C777.1,139,800,213,823,208C845.7,203,869,117,891,74.7C914.3,32,937,32,960,32C982.9,32,1006,32,1029,42.7C1051.4,53,1074,75,1097,101.3C1120,128,1143,160,1166,160C1188.6,160,1211,128,1234,122.7C1257.1,117,1280,139,1303,138.7C1325.7,139,1349,117,1371,96C1394.3,75,1417,53,1429,42.7L1440,32L1440,320L1428.6,320C1417.1,320,1394,320,1371,320C1348.6,320,1326,320,1303,320C1280,320,1257,320,1234,320C1211.4,320,1189,320,1166,320C1142.9,320,1120,320,1097,320C1074.3,320,1051,320,1029,320C1005.7,320,983,320,960,320C937.1,320,914,320,891,320C868.6,320,846,320,823,320C800,320,777,320,754,320C731.4,320,709,320,686,320C662.9,320,640,320,617,320C594.3,320,571,320,549,320C525.7,320,503,320,480,320C457.1,320,434,320,411,320C388.6,320,366,320,343,320C320,320,297,320,274,320C251.4,320,229,320,206,320C182.9,320,160,320,137,320C114.3,320,91,320,69,320C45.7,320,23,320,11,320L0,320Z"></path>
                </svg>
            </div>
        </header>
    );
}