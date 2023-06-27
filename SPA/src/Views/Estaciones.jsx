import NavbarWithCTAButton from "../Components/Navegacion"
import TarjetaFotoBoton from "../Components/Tarjetas/TarjetaFotoBoton"
import FooterGlobal from "../Components/FooterGlobal"
import { useContext } from "react"
import { Contexto } from "../Context/Contexto"
import TituloSeccion from "../Components/Titulos/TituloSeccion"

function Estaciones() {

    const { estaciones } = useContext(Contexto)

    return (
        <>
            <NavbarWithCTAButton />
            <main>
                <section className="w-full h-auto p-4 lg:p-8 flex flex-col gap-8">
                    <TituloSeccion titulo={'Estaciones'} />
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {
                            estaciones.map((estacion) => (
                                <TarjetaFotoBoton data={estacion} />
                            ))
                        }
                    </div>
                </section>
            </main>
            <FooterGlobal />
        </>
    )
}

export default Estaciones