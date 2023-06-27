import ArticuloSalud from "../Components/Tarjetas/ArticuloSalud"
import FooterGlobal from "../Components/FooterGlobal"
import NavbarWithCTAButton from "../Components/Navegacion"
import { useContext } from "react"
import { Contexto } from "../Context/Contexto"

function Salud() {

    const { salud } = useContext(Contexto)

    return (
        <>
            <NavbarWithCTAButton />
            <main>
                <section className="w-full h-auto p-4 lg:p-8 flex flex-col gap-8">
                    {
                        salud.map((objeto) => (
                            <ArticuloSalud data={objeto} />
                        ))
                    }
                </section>
            </main>
            <FooterGlobal />
        </>
    )
}

export default Salud