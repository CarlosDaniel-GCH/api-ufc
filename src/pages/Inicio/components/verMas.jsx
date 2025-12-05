import React from 'react';

function VerMas(){
    // URL de destino
    const targetUrl = "https://www.ufcespanol.com/trending/all";

    return(
        <section className="w-full h-[100px] flex justify-center items-center mt-5">
            <div className="flex justify-center items-center boton-verMas ">
                
                {/* Enlace que actúa como botón */}
                <a 
                href={targetUrl}
                target="_blank"
                rel="noopener noreferrer" // Práctica de seguridad para enlaces externos
                // Estilos del botón: Posicionamiento, padding grande, fondo blanco, texto negro, borde sutil, fuente grande, cursor, overflow hidden
                className="relative px-10 py-5 bg-white text-black border border-gray-300 rounded-md font-bold text-xl cursor-pointer overflow-hidden inline-block transition duration-300 ease-in-out"
                >
                {/* El span fue reemplazado por el texto directo en el enlace */}
                VER MÁS ▼
                </a>
            </div>
        </section>
    )
}

export default VerMas