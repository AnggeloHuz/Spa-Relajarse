import FormReservar from "../Components/Formularios/FormReservar"
import Carrousel from "../Components/Galerias/Carrousel"
import NavbarWithCTAButton from "../Components/Navegacion"
import TituloSeccion from "../Components/Titulos/TituloSeccion"
import FooterGlobal from "../Components/FooterGlobal"
import { useContext } from "react"
import { Contexto } from "../Context/Contexto"

function Reservaciones() {

    const {estaciones} = useContext(Contexto)

    return (
        <>
            <NavbarWithCTAButton />
            <main>
                <Carrousel data={estaciones}/>

                <section className="p-4 lg:p-8">
                    <TituloSeccion titulo={'Haz una reservación con nosotros'} />
                    <div className="p-4 lg:p-8 rounded-xl bg-primario bg-opacity-60 mt-4 lg:mt-8">
                        <FormReservar />
                    </div>
                </section>
            </main>
            <FooterGlobal />
        </>
    )
}

export default Reservaciones