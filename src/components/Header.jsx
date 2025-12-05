import React from 'react';
import ufcLogo from '../assets/img/UFC-LOGO.png';

function Header(){
    return(
        <header className="fixed top-0 left-0 z-1000 w-full h-[70px] bg-black text-white flex justify-between items-center px-12 md:px-[50px]">
        
            {/* Navbar-1 (Enlaces de Navegación Interna) */}
            <nav className="navbar-links">
                <ul className="list-none flex gap-5 md:gap-8 h-full items-center">
                    <li><a href="" className="header-link">INICIO</a></li>
                    <li><a href="" className="header-link">RANKINGS</a></li>
                    <li><a href="" className="header-link">PELEADORES</a></li>
                </ul>
            </nav>

            {/* Título/Logo */}
            <div className="flex items-center justify-center h-[70px] w-auto md:w-[15%] bg-gray-100 border border-gray-300 rounded-sm">
                <img 
                    src={ufcLogo}
                    alt="UFC Logo" 
                    className="block max-h-[120px] w-auto object-contain cursor-pointer"
                />
            </div>

            {/* Navbar-2 (Enlaces Externos/Redes Sociales) */}
            <nav className="navbar-links">
                <ul className="list-none flex gap-5 md:gap-8 h-full items-center">
                    <li><a href="https://www.instagram.com/ufc/" target="_blank" rel="noopener noreferrer" className="header-link">INSTAGRAM</a></li>
                    <li><a href="https://www.youtube.com/@ufcespanol/videos" target="_blank" rel="noopener noreferrer" className="header-link">VIDEOS</a></li>
                    <li><a href="https://www.ufcstore.com/en/?_s=bm-ufccom-Main-Navigation-ES" target="_blank" rel="noopener noreferrer" className="header-link">TIENDA</a></li>
                </ul>
            </nav>

        </header>
    )
}

export default Header