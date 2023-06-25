import TodasResenas from "../Components/Galerias/TodasResenas"
import NavbarWithCTAButton from "../Components/Navegacion"
import TituloSeccion from "../Components/Titulos/TituloSeccion"

function Resenas() {

    return (
        <>
            <main>
                <section className="w-full h-auto p-4 lg:p-8">
                    <TituloSeccion />

                    <TodasResenas />
                </section>
            </main>
        </>
    )
}

export default Resenas