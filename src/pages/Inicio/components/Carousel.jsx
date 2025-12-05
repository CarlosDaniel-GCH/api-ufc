import React, { useState, useRef } from 'react';
import PereiraAnkalaev from '../assets/img/Pereira-Ankalaev.jpeg';
import TopuriaOliveira from '../assets/img/Topuria-Oliveira.jpeg';
import ChimaevDDP from '../assets/img/Chimaev-DDP.jpg';

function Carousel(){
    // Estado para rastrear el índice de la diapositiva actual
    const [currentIndex, setCurrentIndex] = useState(0); 
    
    // Referencia al elemento DOM del track para aplicar la transformación
    const carouselTrackRef = useRef(null);
    
    // Total de diapositivas
    const totalSlides = 3;

    // Estilos de fondo
    const PereiraAnkalaev_image = {
        backgroundImage: `url(${PereiraAnkalaev})`,
    };
    const TopuriaOliveira_image = {
        backgroundImage: `url(${TopuriaOliveira})`,
    };
    const ChimaevDDP_image = {
        backgroundImage: `url(${ChimaevDDP})`,
    };

    /**
     * Mueve el carrusel a una diapositiva específica.
     * @param {number} index - El índice de la diapositiva de destino.
     */
    const moveToSlide = (index) => {
        let newIndex = index;
        
        // Lógica de bucle: si pasa del último, vuelve al primero (y viceversa)
        if (newIndex >= totalSlides) {
            newIndex = 0;
        } else if (newIndex < 0) {
            newIndex = totalSlides - 1;
        }

        // Aplica la transformación CSS al track usando la referencia
        if (carouselTrackRef.current) {
            carouselTrackRef.current.style.transform = `translateX(-${newIndex * 100}%)`;
        }

        // Actualiza el estado del índice
        setCurrentIndex(newIndex);
    };

    const prevSlide = () => {
        moveToSlide(currentIndex - 1);
    };

    const nextSlide = () => {
        moveToSlide(currentIndex + 1);
    };

    // La clase 'active' para los botones inferiores se aplica condicionalmente
    const getButtonClass = (index) => {
        return `carousel-btn w-3 h-3 rounded-full border-none bg-[#e6e6e6] cursor-pointer transition-colors duration-300 ${currentIndex === index ? 'active' : ''}`;
    };

    return(
        <section className='mt-[70px] w-full overflow-hidden relative bg-[#111] text-white '>
            <div id="carouselTrack" ref={carouselTrackRef} className='flex transition-transform duration-500 ease-in-out w-full h-[720px]'>
                
                {/* Diapositiva 0 */}
                <div className='w-full flex-shrink-0 p-10 text-center bg-cover bg-center flex flex-col justify-center items-center' style={PereiraAnkalaev_image}>
                    <div>
                        <button className="btn btn-secondary btn-Jamahal-Rountree relative py-5 px-10 bg-white text-black border-none rounded-md mt-5 font-bold cursor-pointer text-xl overflow-hidden z-0 mt-[360px]">
                            <a 
                            href="https://www.ufcespanol.com/event/ufc-fight-night-june-21-2025" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                font-bold
                            "
                            >
                                VER MÁS
                            </a>
                        </button>
                    </div>
                </div>

                {/* Diapositiva 1 */}
                <div className='w-full flex-shrink-0 p-10 text-center bg-cover bg-center flex flex-col justify-center items-center' style={ChimaevDDP_image}>
                    <div>
                        <button className="btn btn-secondary btn-Jamahal-Rountree relative py-5 px-10 bg-white text-black border-none rounded-md mt-5 font-bold cursor-pointer text-xl overflow-hidden z-0 mt-[360px]">
                            <a 
                            href="https://www.ufcespanol.com/event/ufc-fight-night-june-21-2025" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                font-bold
                            "
                            >
                                VER MÁS
                            </a>
                        </button>
                    </div>
                </div>

                {/* Diapositiva 2 */}
                <div className='w-full flex-shrink-0 p-10 text-center bg-cover bg-center flex flex-col justify-center items-center' style={TopuriaOliveira_image}>
                    <div>
                        <button className="btn btn-secondary btn-Jamahal-Rountree relative py-5 px-10 bg-white text-black border-none rounded-md mt-5 font-bold cursor-pointer text-xl overflow-hidden z-0 mt-[360px]">
                            <a 
                            href="https://www.ufcespanol.com/event/ufc-fight-night-june-21-2025" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                font-bold
                            "
                            >
                                VER MÁS
                            </a>
                        </button>
                    </div>
                </div>
            </div>

            {/* Flechas de navegación (onClick ahora llama a las funciones de React) */}
            <button onClick={prevSlide} className='absolute top-1/2 left-1.5 -translate-y-1/2 bg-transparent border-none text-gray-300 text-4xl p-2.5 cursor-pointer z-10 transition-colors duration-300 ease-in'>
                <i className="fas fa-chevron-left"></i>
            </button>
            
            <button onClick={nextSlide} className='carousel-arrow right absolute top-1/2 right-1.5 -translate-y-1/2 bg-transparent border-none text-gray-300 text-4xl p-2.5 cursor-pointer z-10 transition-colors duration-300 ease-in'>
                <i className="fas fa-chevron-right"></i>
            </button>

            {/* Botones inferiores de navegación (onClick llama a moveToSlide) */}
            <div className='absolute bottom-2.5 left-1/2 -translate-x-1/2 flex space-x-2.5'>
                <button onClick={() => moveToSlide(0)} className={getButtonClass(0)}></button>
                <button onClick={() => moveToSlide(1)} className={getButtonClass(1)}></button>
            </div>
        </section>
    )
}

export default Carousel;