import React from 'react';
import logoUFC from '../assets/img/UFC-LOGO.png';

function Footer(){
    const handleContactClick = () => {
        window.open('https://www.ufcespanol.com/faq', '_blank');
      };

    return(
        <footer className="mt-5 md:mt-10 flex justify-between w-full h-[70px] overflow-hidden bg-black border-t border-black">
        
            <div className="flex items-center justify-center h-full bg-white">
                <img 
                    src={logoUFC}
                    alt="UFC Logo" 
                    className="w-[100px] h-[70px] object-contain cursor-pointer"
                />
            </div>

            <div 
                className="flex items-center justify-center px-4 h-full text-md md:text-[16px] text-white cursor-pointer transition duration-300"
                onClick={handleContactClick}
                role="button"
                aria-label="Ir a la página de contacto/FAQ de UFC"
            >
                <h1 className="font-bold tracking-wider">CONTACTO</h1>
            </div>

        </footer>
    )
}

export default Footer