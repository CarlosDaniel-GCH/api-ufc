import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from "./pages/Inicio/Inicio";
import Peleadores from './pages/Peleadores/Peleadores';
import Rankings from './pages/Rankings/Rankings';

function App() {

  return (
    <>
      <BrowserRouter>
          <Routes> 
          {/* Route define cada ruta: path es la URL y element es el componente a renderizar */}
          
          {/* Ruta para la página de Inicio (la raíz /) */}
          <Route path="/" element={<Inicio />} /> 
          
          {/* Ruta para la página de Peleadores */}
          <Route path="/peleadores" element={<Peleadores />} />
          
          {/* Ruta para la página de Rankings */}
          <Route path="/rankings" element={<Rankings />} />

          {/* Ruta para manejar URLs no encontradas (Error 404) */}
          <Route path="*" element={<h1>404: Página no encontrada</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App