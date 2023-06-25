import Foorter from "../Components/FooterGlobal"
import Carrousel from "../Components/Galerias/Carrousel"
import NavbarWithCTAButton from "../Components/Navegacion"
import TablaPrecios from "../Components/Tablas/TablaPrecios"
import TarjetaFoto from "../Components/Tarjetas/TarjetaFoto"
import TarjetaSimple from "../Components/Tarjetas/TarjetaSimple"
import TituloSeccion from "../Components/Titulos/TituloSeccion"

function Inicio() {

    return (
        <>
            <main className="h-auto">
                <Carrousel />
                <section className="p-4 lg:p-8">
                    <TituloSeccion />
                    <div className="mt-4 lg:mt-8 mb-4 lg:mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8">
                        <TarjetaSimple />
                        <TarjetaSimple />
                        <TarjetaSimple />
                        <TarjetaSimple />
                        <TarjetaSimple />
                        <TarjetaSimple />
                    </div>
                </section>

                <section className="p-4 lg:p-8">
                    <TituloSeccion />
                    <div className="mt-4 lg:mt-8 mb-4 lg:mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8">
                        <TarjetaFoto />
                        <TarjetaFoto />
                        <TarjetaFoto />
                    </div>
                </section>

                <section className="p-4 lg:p-8">
                    <TituloSeccion />
                    <div className="mt-4 lg:mt-8 mb-4 lg:mb-8 overflow-x-auto">
                        <TablaPrecios />
                    </div>
                </section>
            </main>
        </>
    )
}

export default Inicio