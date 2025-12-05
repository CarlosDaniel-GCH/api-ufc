import UFCAires from '../assets/img/Patrocinador.png';
import UFCAviator from '../assets/img/ufc-aviator.png';

function Tendencias(){
    return(
        <section className="w-full h-auto mt-12">
            <h1 className="font-bold text-center text-black text-3xl mb-5">TENDENCIAS</h1>
            <div class="flex justify-center w-full h-70 space-x-2.5 px-2">
                <a 
                    href="https://www.dazn.com/es-ES/news/mma/ilia-topuria-peso-ligero-ufc-por-que-deja-ser-campeon-peso-pluma-principales-reglas-esta-division-quien-es-actual-campeon/4jz300mmvcwv1ie44mgq9xag4" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[24%]"
                >
                    <div className="contenedor-tendencias ct-1 text-white w-[100%] h-[300px] px-4 py-0 flex justify-around flex-col text-left relative overflow-hidden bg-cover bg-center cursor-pointer">
                        <h2 class="absolute top-[130px] text-base font-bold">TOPURIA SUBE A PESO LIGERO</h2>
                    </div>
                </a>
                <a 
                    href="https://www.clarosports.com/ufc/alex-pereira-busca-una-revancha-con-magomed-ankalaev/"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-[24%]"
                >
                    <div className="contenedor-tendencias ct-2 text-white w-[100%] h-[300px] px-4 py-0 flex justify-around flex-col text-left relative overflow-hidden bg-cover bg-center cursor-pointer">
                        <h2 class="absolute top-[130px] text-base font-bold">PEREIRA BUSCA REVANCHA</h2>
                    </div>
                </a>
                <a 
                    href="https://www.playstation.com/es-pe/games/ea-sports-ufc/"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-[24%]"
                >
                    <div className="contenedor-tendencias ct-3 text-white w-[100%] h-[300px] px-4 py-0 flex justify-around flex-col text-left relative overflow-hidden bg-cover bg-center cursor-pointer">
                        <h2 class="absolute top-[120px] text-base font-bold">UFC 5 TRAE EL REALISMO AL OCTÁGONO</h2>
                    </div>
                </a>
                <a 
                    href="https://www.marca.com/combates-ufc/2025/04/15/amanda-nunes-volvera-pelear-ufc-regreso-goat.html"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-[24%]"
                >
                    <div className="contenedor-tendencias ct-4 text-white w-[100%] h-[300px] px-4 py-0 flex justify-around flex-col text-left relative overflow-hidden bg-cover bg-center cursor-pointer">
                        <h2 class="absolute top-[130px] text-base font-bold">EL REGRESO DE AMANDA NUNES</h2>
                    </div>
                </a>
            </div>

            <div className="section-2 flex justify-center w-full h-[500px] space-x-6 px-4 mt-7">
                <a 
                    href="https://www.espn.com.gt/mma/nota?_slug_=jon-jones-pereira-aspinall-ufc&id=14416434"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[50%]"
                >
                    <div className="contenido img-1 w-[100%] h-[300px] h-full text-white relative overflow-hidden cursor-pointer">
                        <h2 class="absolute bottom-0 text-[1.3rem] p-5 z-10 font-bold">JON JONES RECHAZA LA OFERTA DE UFC PARA PELEAR CON TOM ASPINALL</h2>
                    </div>
                </a>

                <a 
                    href="https://www.espn.com.gt/mma/nota?_slug_=jon-jones-pereira-aspinall-ufc&id=14416434"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[50%]"
                >
                    <div className="contenido img-2 w-[100%] h-[300px] h-full text-white relative overflow-hidden cursor-pointer">
                        <h2 class="absolute bottom-0 text-[1.3rem] p-5 z-10 font-bold">CHARLES OLIVEIRA DICE QUE PUEDE NOQUEAR A ILIA TOPURIA</h2>
                    </div>
                </a>
            </div>

            <h1 className="font-bold text-center text-black text-3xl mt-8 mb-4">PATROCINADORES</h1>
            <div class="flex w-full h-[300px] overflow-hidden space-x-2.5 px-4">
                <a 
                    href="https://airestech.com/?utm_source=UFC&utm_medium=ROS&utm_campaign=Maycee_Chandler"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2"
                >
                    <div class="h-[300px] cursor-pointer">
                        <img 
                            src={UFCAires}
                            alt="UFC AIRES" 
                            className="w-full h-full object-cover transition-transform duration-500 ease-in-out" 
                        />
                    </div>
                </a>

                <a 
                    href="https://airestech.com/?utm_source=UFC&utm_medium=ROS&utm_campaign=Maycee_Chandler"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2"
                >
                    <div class="h-[300px] cursor-pointer">
                        <img 
                            src={UFCAviator}
                            alt="UFC AIRES" 
                            className="w-full h-full object-cover transition-transform duration-500 ease-in-out" 
                        />
                    </div>
                </a>
            </div>
        </section>
    )    
}

export default Tendencias