import TituloDetalles from "../../Components/Titulos/TituloDetalles"

function DetallesObjeto({ propiedades, objeto }) {
    return (
        <>
            <article>
                {
                    propiedades.map((propiedad) => (
                        <div key={objeto.id}>
                            <TituloDetalles titulo={propiedad} />
                            {propiedad === 'imagen'
                                ? (<img
                                    src={objeto[propiedad]}
                                    alt="Imagen relacionada"
                                    className="w-full h-auto mt-4 rounded-2xl" />)
                                : (<p className="mt-6 text-xl font-semibold">
                                    {objeto[propiedad]}
                                </p>)}
                        </div>
                    ))
                }
            </article>
        </>
    )
}

export default DetallesObjeto