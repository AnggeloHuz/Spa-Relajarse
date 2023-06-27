import { TextInput, Select } from "flowbite-react"
import TarjetaProducto from "../Components/Tarjetas/TarjetaProducto"
import TituloSeccion from "../Components/Titulos/TituloSeccion"
import FooterGlobal from "../Components/FooterGlobal"
import NavbarWithCTAButton from "../Components/Navegacion"
import { useContext } from "react"
import { Contexto } from "../Context/Contexto"

function Belleza() {

    const { productos } = useContext(Contexto)

    return (
        <>
            <NavbarWithCTAButton />
            <main>
                <section className="p-4 lg:p-8">
                    <h2 className="text-center text-5xl text-oscuro font-bold mb-24 mt-24">
                        ¡Conoce los mejores productos de Belleza!
                    </h2>

                    <div className="p-8 h-auto flex flex-col gap-6 rounded-lg bg-primario bg-opacity-60">
                        <div>
                            <form className="flex gap-8">
                                <TextInput
                                    className="w-5/6"
                                    id="producto"
                                    placeholder="Ingresa el nombre del producto que deseas buscar"
                                    required
                                    shadow
                                    type="text"
                                />
                                <button type="submit" className="p-2 rounded-md text-white w-1/6 bg-fuerte hover:bg-opacity-70 ">
                                    Buscar
                                </button>
                            </form>
                        </div>

                        <div>
                            <form className="flex gap-8">
                                <Select
                                    className="w-5/6"
                                    id="categoria"
                                    required
                                >
                                    <option>

                                    </option>
                                    <option>
                                        Categoria 1
                                    </option>
                                </Select>
                                <button type="submit" className="p-2 rounded-md text-white w-1/6 bg-fuerte hover:bg-opacity-70 ">
                                    Filtrar
                                </button>
                            </form>
                        </div>
                    </div>
                </section>

                <section className="p-4 lg:p-8">

                    <TituloSeccion titulo={'Todos los productos'}/>
                    <div className="mb-4 lg:mb-8 mt-4 lg:mt-8 lg:grid lg:grid-cols-4 gap-8">
                        {
                            productos.map((producto) => (
                                <TarjetaProducto data={producto}/>
                            ))
                        }
                    </div>
                </section>
            </main>
            <FooterGlobal />
        </>
    )
}

export default Belleza