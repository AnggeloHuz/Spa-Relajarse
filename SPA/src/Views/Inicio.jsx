import Foorter from "../Components/FooterGlobal"
import Carrousel from "../Components/Galerias/Carrousel"
import NavbarWithCTAButton from "../Components/Navegacion"
import TarjetaFoto from "../Components/Tarjetas/TarjetaFoto"
import TarjetaSimple from "../Components/Tarjetas/TarjetaSimple"
import TituloSeccion from "../Components/Titulos/TituloSeccion"
import FooterGlobal from "../Components/FooterGlobal"
import { useContext } from "react"
import { Contexto } from "../Context/Contexto"
import TablaPrecios from "../Components/Tablas/TablaPrecios"


function Inicio() {

    const { horarios, servicios, productos, estaciones } = useContext(Contexto)

    return (
        <>
            <NavbarWithCTAButton />
            <main className="h-auto">
                <Carrousel data={estaciones} />
                <section className="p-4 lg:p-8">
                    <TituloSeccion titulo={'Servicios'} />
                    <div className="mt-4 lg:mt-8 mb-4 lg:mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8">
                        {
                            servicios.map((horario) => (
                                <TarjetaSimple data={horario} key={horario.id} />
                            ))
                        }
                    </div>
                </section>

                <section className="p-4 lg:p-8">
                    <TituloSeccion titulo={'Horarios'} />
                    <div className="mt-4 lg:mt-8 mb-4 lg:mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8">
                        {
                            horarios.map((horario) => (
                                <TarjetaFoto data={horario} key={horario.id} />
                            ))
                        }
                    </div>
                </section>

                <section className="p-4 lg:p-8">
                    <TituloSeccion titulo={'Precios del Spa'} />
                    <div className="mt-4 lg:mt-8 mb-4 lg:mb-8 overflow-x-auto">
                        <TablaPrecios data={productos}/>
                    </div>
                </section>
            </main>
            <FooterGlobal />
        </>
    )
}

export default Inicio