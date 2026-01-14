import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ufcLogo from '../assets/img/UFC-LOGO.png';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 z-[999] w-full h-[70px] bg-black text-white flex justify-between items-center px-6 md:px-[50px]">
            
            <div className="flex items-center justify-center h-[100%] w-[100px] bg-gray-100 px-4 rounded-sm md:order-2">
                <img 
                    src={ufcLogo}
                    alt="UFC Logo" 
                    className="block w-full max-h-[200px] md:max-h-[100px] w-auto cursor-pointer"
                />
            </div>

            <button 
                className="md:hidden text-white focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {isOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    )}
                </svg>
            </button>

            <nav className={`
                absolute md:static top-[70px] left-0 w-full md:w-auto bg-black md:bg-transparent
                flex flex-col md:flex-row items-center gap-6 p-8 md:p-0
                transition-all duration-300 ease-in-out md:order-1
                ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible md:opacity-100 md:visible'}
            `}>
                <ul className="flex flex-col md:flex-row list-none gap-6 md:gap-8 items-center text-sm font-bold tracking-widest">
                    <li><Link to="/" onClick={() => setIsOpen(false)} className="hover:text-red-600 transition-colors uppercase">Inicio</Link></li>
                    <li><Link to="/rankings" onClick={() => setIsOpen(false)} className="hover:text-red-600 transition-colors uppercase">Rankings</Link></li>
                    <li><Link to="/peleadores" onClick={() => setIsOpen(false)} className="hover:text-red-600 transition-colors uppercase">Peleadores</Link></li>
                </ul>
            </nav>

            <nav className={`
                absolute md:static top-[240px] md:top-0 left-0 w-full md:w-auto bg-black md:bg-transparent
                flex flex-col md:flex-row items-center gap-6 pb-8 md:pb-0
                transition-all duration-300 ease-in-out md:order-3
                ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible md:opacity-100 md:visible'}
            `}>
                <ul className="flex flex-col md:flex-row list-none gap-6 md:gap-8 items-center text-sm font-bold tracking-widest">
                    <li><a href="https://www.instagram.com/ufc/" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-colors">INSTAGRAM</a></li>
                    <li><a href="https://www.youtube.com/@ufcespanol/videos" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-colors">VIDEOS</a></li>
                    <li><a href="https://www.ufcstore.com/en/" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-colors">TIENDA</a></li>
                </ul>
            </nav>

        </header>
    );
}

export default Header;