import NavbarWithCTAButton from "../Components/Navegacion"
import TarjetaFotoBoton from "../Components/Tarjetas/TarjetaFotoBoton"

function Estaciones() {

    return (
        <>
            <main>
                <section className="w-full h-auto p-4 lg:p-8 flex flex-col gap-8">
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <TarjetaFotoBoton />
                        <TarjetaFotoBoton />
                        <TarjetaFotoBoton />
                        <TarjetaFotoBoton />
                    </div>
                </section>
            </main>
        </>
    )
}

export default Estaciones