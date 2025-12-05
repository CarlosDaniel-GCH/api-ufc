import Header from "../../components/Header";
import Carousel from "./components/Carousel";
import Tendencias from './components/Tendencias';
import VerMas from "./components/verMas";
import Footer from "../../components/Footer";

function Inicio(){
    return(
        <div>
            <Header />
            <Carousel />
            <Tendencias />
            <VerMas />
            <Footer />
        </div>
    )
}

export default Inicio