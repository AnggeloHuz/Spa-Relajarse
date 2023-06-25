import TituloSeccion from "../Titulos/TituloSeccion"

function ArticuloSalud() {

    return (
        <>
            <div className="w-full h-auto flex flex-col gap-8 bg-gray-100 rounded-md p-4">
                <TituloSeccion />
                <div className="w-full h-full text-lg lg:text-xl">
                    <img className="float-left md:w-1/2 mr-4 rounded-lg border-2 border-primario"
                        src="https://img.freepik.com/foto-gratis/concepto-salud-estetoscopio-ventosas-mano_53876-129536.jpg?w=2000"
                        alt="" />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quibusdam delectus distinctio cum doloremque quisquam nobis doloribus autem blanditiis rerum, ut assumenda. Reprehenderit numquam maiores, deserunt hic debitis sapiente voluptatem.
                    <p className="mt-8">
                        <a href="">Enlace del artículo principal</a>
                    </p>
                </div>
            </div>
        </>
    )
}

export default ArticuloSalud