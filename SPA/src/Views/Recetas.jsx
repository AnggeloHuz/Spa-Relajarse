import Acordion from "../Components/Galerias/Acordion"
import NavbarWithCTAButton from "../Components/Navegacion"
import TituloSeccion from "../Components/Titulos/TituloSeccion"
import FooterGlobal from "../Components/FooterGlobal"
import { useContext } from "react"
import { Contexto } from "../Context/Contexto"

function Recetas() {

    const { recetas } = useContext(Contexto)

    return (
        <>
            <NavbarWithCTAButton />
            <main>
                <section className="w-full h-auto p-4 lg:p-8 flex flex-col gap-8">
                    {
                        recetas.map((receta) => (
                            <>
                                <TituloSeccion titulo={receta.nombre}/>
                                <div className="flex flex-col">
                                    <img
                                        className="h-auto max-w-full rounded-lg"
                                        src="https://1.bp.blogspot.com/-nV3Gapv8-dM/Wc51ZEDkaoI/AAAAAAAAASU/J7DXoJFyu8QNagDNOMAFtu5XE1acC6UzwCLcBGAs/s1600/receta.jpeg"
                                        alt="Imágen de la receta" />
                                    <Acordion data={receta} />
                                </div>
                            </>
                        ))
                    }
                </section>
            </main>
            <FooterGlobal />
        </>
    )
}

export default Recetas