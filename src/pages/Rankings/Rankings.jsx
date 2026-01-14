import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Rankings() {
    const [rankings, setRankings] = useState([]);
    const [fighters, setFighters] = useState({});

    useEffect(() => {
        Promise.all([
            fetch("https://api.octagon-api.com/rankings").then(res => res.json()),
            fetch("https://api.octagon-api.com/fighters").then(res => res.json())
        ])
        .then(([rankingsData, fightersData]) => {
            const listaRankings = Array.isArray(rankingsData)
                ? rankingsData
                : rankingsData.rankings || [];

            setRankings(listaRankings);
            setFighters(fightersData || {});
        })
        .catch(err => console.error("Error al cargar datos", err));
    }, []);

    return (
        <div>
            <Header />

            <div className="mt-28">
                <h1 className="text-center text-3xl font-bold mb-7">
                    CLASIFICACIÓN DE LOS ATLETAS
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-4 peleadores-auto-fit gap-5 max-w-[1500px] my-10 mx-auto px-5">

                    {rankings.map((categoria, index) => {
                        const isPoundForPound = categoria.categoryName.includes("Pound-for-Pound");

                        // Datos del campeón
                        const champId = categoria?.champion?.id;
                        const champName = categoria?.champion?.championName || champId;

                        const champData = champId ? fighters[champId] : null;
                        const champImg = champData?.imgUrl;

                        return (
                            <div key={index} className="flex items-center bg-gray-50 rounded-xl p-4 shadow-sm min-h-[200px] flex flex-col transition duration-300 ease-in-out hover:shadow-lg hover:-translate-y-[4px]">
                                <h2 className="text-xl text-red-700 mb-3 font-bold">
                                    {categoria.categoryName}
                                </h2>

                                {/* Campeón */}
                                {!isPoundForPound && champName && (
                                    <>
                                        <p className="font-bold text-base">{champName}</p>
                                        <span className="text-sm text-gray-400 font-bold">CAMPEÓN</span>
                                    </>
                                )}

                                {/* Imagen del campeón */}
                                {champImg && (
                                    <img
                                        src={champImg}
                                        alt={champName}
                                        className="w-[200px] mb-2.5 block"
                                    />
                                )}

                                {/* Lista de rankeados */}
                                <ul className="flex flex-col gap-2 list-none mt-2 text-sm overflow-y-auto max-h-[550px]">
                                    {categoria.fighters.map((peleador, i) => (
                                        <li key={i} className="flex gap-8 px-4">
                                            <span className="flex justify-center font-bold w-[20px]">
                                                {i + 1}.
                                            </span>
                                            <span className="text-[#585b63]">{peleador.name}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Rankings;