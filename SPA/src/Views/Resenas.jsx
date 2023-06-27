import TodasResenas from "../Components/Galerias/TodasResenas"
import NavbarWithCTAButton from "../Components/Navegacion"
import TituloSeccion from "../Components/Titulos/TituloSeccion"
import FooterGlobal from "../Components/FooterGlobal"

function Resenas() {

    return (
        <>
            <NavbarWithCTAButton />
            <main>
                <section className="w-full h-auto p-4 lg:p-8">
                    <TituloSeccion titulo={'Reseñas'} />

                    <TodasResenas />
                </section>
            </main>
            <FooterGlobal />
        </>
    )
}

export default Resenas