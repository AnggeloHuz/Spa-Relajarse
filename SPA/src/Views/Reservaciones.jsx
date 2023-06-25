import FormReservar from "../Components/Formularios/FormReservar"
import Carrousel from "../Components/Galerias/Carrousel"
import NavbarWithCTAButton from "../Components/Navegacion"
import TituloSeccion from "../Components/Titulos/TituloSeccion"

function Reservaciones() {

    return (
        <>
            <main>
                <Carrousel />

                <section className="p-4 lg:p-8">
                    <TituloSeccion />
                    <div className="p-4 lg:p-8 rounded-xl bg-primario bg-opacity-60 mt-4 lg:mt-8">
                        <FormReservar />
                    </div>
                </section>
            </main>
        </>
    )
}

export default Reservaciones