import TituloSeccion from "../Titulos/TituloSeccion"

function ArticuloSalud({ data }) {

    return (
        <>
            <div className="w-full h-auto flex flex-col gap-8 bg-gray-100 rounded-md p-4">
                <TituloSeccion titulo={data.titulo}/>
                <div className="w-full h-full text-lg lg:text-xl">
                    <img className="float-left md:w-1/2 mr-4 rounded-lg border-2 border-primario"
                        src={data.imagen}
                        alt="" />
                    {data.descripcion}
                    <p className="mt-8">
                        <a href={data.referencia} className="text-oscuro font-semibold hover:cursor-pointer">Enlace del artículo principal</a>
                    </p>
                </div>
            </div>
        </>
    )
}

export default ArticuloSalud