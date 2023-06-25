import Acordion from "../Components/Galerias/Acordion"
import NavbarWithCTAButton from "../Components/Navegacion"
import TituloSeccion from "../Components/Titulos/TituloSeccion"

function Recetas() {

    return (
        <>
            <main>
                <section className="w-full h-auto p-4 lg:p-8 flex flex-col gap-8">
                    <TituloSeccion />
                    <div className="flex flex-col">
                        <img 
                        className="h-auto max-w-full"
                        src="https://editorialtelevisa.brightspotcdn.com/dims4/default/fb73eb3/2147483647/strip/true/crop/996x560+2+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fk2-prod-editorial-televisa.s3.amazonaws.com%2Fbrightspot%2Fwp-content%2Fuploads%2F2018%2F04%2Fnaranja-para-exfoliarte-la-piel.jpg" 
                        alt="Imágen de la receta" />
                        <Acordion />
                    </div>
                </section>
            </main>
        </>
    )
}

export default Recetas