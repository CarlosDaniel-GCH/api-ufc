import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Peleadores() {
    const [peleadores, setPeleadores] = useState([]);
    const [busqueda, setBusqueda] = useState("");
    const [filtrados, setFiltrados] = useState([]);

    useEffect(() => {
        async function fetchPeleadores() {
            try {
                const res = await fetch("https://api.octagon-api.com/fighters");
                if (!res.ok) throw new Error("Error al obtener peleadores");

                const data = await res.json();

                // Convierte el objeto en array
                const lista = Object.values(data);

                // Visualizar cuantos peleadores estan registrados en la API
                // console.log("Total peleadores:", lista.length);

                // Controlamos la cantidad de peleadores que traerá
                const limitados = lista.slice(0, 50);

                setPeleadores(limitados);
                setFiltrados(limitados);
            } catch (err) {
                console.error(err);
            }
        }

        fetchPeleadores();
    }, []);

    // Funcion de busqueda de peleadores
    const manejarBusqueda = () => {
        const termino = busqueda.trim().toLowerCase();

        if (termino === "") {
            setFiltrados(peleadores);
        } else {
            const resultados = peleadores.filter((p) =>
                p.name.toLowerCase().includes(termino)
            );

            setFiltrados(resultados);
        }
    };

    return (
        <div>
            <Header />
            <div className="mt-28">
                <div className="contenedor-busqueda flex justify-center my-8 gap-4">
                    <input
                        type="text"
                        placeholder="Buscar peleador..."
                        value={busqueda}
                        onChange={(e) => setBusqueda(e.target.value)}
                        className="px-4 py-2 text-base rounded-lg border border-gray-300 w-[250px] transition duration-300 ease-in-out"
                    />
                    <button
                        onClick={manejarBusqueda}
                        className="px-6 py-2 text-base bg-black text-white border-none rounded-lg cursor-pointer transition duration-300 hover:bg-gray-900"
                    >
                        Buscar
                    </button>
                </div>

                <div className="peleadores grid grid-cols-2 md:grid-cols-5 gap-4 px-3 justify-items-center">
                    {filtrados.length === 0 ? (
                        <p className="error-peleadores w-[300px] text-center mb-[30vh] mt-[20vh] col-span-5">
                            No se encontraron peleadores.
                        </p>
                    ) : (
                        filtrados.map((peleador) => (
                            <div
                                key={peleador.id ?? peleador.name}
                                className="bg-zinc-50 rounded-xl shadow-md p-4 w-full max-w-xs text-center transition duration-300 ease-in-out hover:shadow-lg hover:-translate-y-[4px]"
                            >
                                <img
                                    src={peleador.imgUrl}
                                    alt={peleador.name}
                                    className="w-full h-auto rounded-lg object-cover"
                                />
                                <h3 className="text-xl py-3 font-bold hover:text-red-500">
                                    {peleador.name}
                                </h3>

                                <div className="flex flex-col gap-1 text-left">
                                    <p className="text-sm">
                                        <span className="font-bold">Categoría:</span>{" "}
                                        {peleador.category}
                                    </p>
                                    <p className="text-sm">
                                        <span className="font-bold">Récord:</span>{" "}
                                        {peleador.wins}-{peleador.losses}-{peleador.draws}
                                    </p>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Peleadores;