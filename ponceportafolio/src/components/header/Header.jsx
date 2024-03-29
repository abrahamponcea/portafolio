import React, { useState } from "react"
import './header.css'
import { Outlet, Link } from "react-router-dom"

const Header = () => {
    /*TOGGLE MENU */
    const[Toggle, showMenu] = useState(false)
    const[activeNav, setActiveNav] = useState('#home')
    /*Change Background Header*/
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header")
        if(this.scrollY >= 80){
            header.classList.add("scroll-header")
        } 
        else{
            header.classList.remove("scroll-header")
        } 
    })


    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo">Abraham</a>
                
                <div className={Toggle ? "nav__menu show-menu" : 
                "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <Link to="/"></Link>
                            <a href="/" onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'nav__link active-link' : 'active-link'}>
                                <i className="uil uil-estate nav__icon"></i> Inicio
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'nav__link active-link' : 'active-link'}>
                                <i className="uil uil-user nav__icon"></i> Acerca de Mi
                            </a>
                        </li>
                        
                        <li className="nav__item">
                            <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'nav__link active-link' : 'active-link'}>
                                <i className="uil uil-file-alt nav__icon"></i> 
                                Habilidades
                            </a>
                        </li>
                        
                        <li className="nav__item">
                            <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'nav__link active-link' : 'active-link'}>
                                <i className="uil uil-briefcase-alt nav__icon"></i>
                                Servicios
                            </a>
                        </li>
                        
                        <li className="nav__item">
                            <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'nav__link active-link' : 'active-link'}>
                                <i className="uil uil-scenery nav__icon"></i>
                                Portafolio
                            </a>
                        </li>
                        
                        <li className="nav__item">
                            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'nav__link active-link' : 'active-link'}>
                                <i className="uil uil-message nav__icon"></i>
                                Contacto
                            </a>
                        </li>
                    </ul>
 
                    <i class="uil uil-times nav__close" onClick={() => showMenu
                    (!Toggle)}></i>
                </div>

                <div className="nav__togle" onClick={() => showMenu
                    (!Toggle)}>
                    <i class="uil uil-apps"></i>
                </div>
            </nav>
            <Outlet/>
        </header>
    )
}

export default Header
