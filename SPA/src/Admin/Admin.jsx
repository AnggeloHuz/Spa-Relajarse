import { useContext } from "react"
import TituloSeccion from "../Components/Titulos/TituloSeccion"
import TablaGenerica from "./Components/Tablas/TablaGenerica"
import { Contexto } from "../Context/Contexto"
import FormEstaciones from "./Components/Formularios/FormEstaciones"
import FormRecetas from "./Components/Formularios/FormRecetas"
import FormServicios from "./Components/Formularios/FormServicios"
import FormProductos from "./Components/Formularios/FormProductos"

function Admin() {

    const { horarios, servicios, estaciones, productos, reservas, resenas, salud, recetas } = useContext(Contexto)

    return (
        <>
            <main>
                <main className="min-h-[100vh]  h-auto w-full  p-4 lg:p-8 flex flex-col gap-8">

                    <section className="bg-claro rounded-2xl bg-opacity-30 p-4 lg:p-8">
                        <TituloSeccion titulo={'Horarios'} />
                        <TablaGenerica propiedades={["dia", "inicio_mañana", "fin_mañana", "inicio_tarde", "fin_tarde"]} data={horarios} columna1={'id'} columna2={'dia'} detallesTitulo={'Detalles completos'} edicionTitulo={'Editar Horario'}
                        />
                    </section>

                    <section className="bg-claro rounded-2xl bg-opacity-30 p-4 lg:p-8">
                        <TituloSeccion titulo={'Estaciones'} />
                        <FormEstaciones estacion={{}} enviar={'Agregar Estación'} url={'http://localhost:8000/estaciones/add'} peticion={'POST'} />
                        <TablaGenerica propiedades={["nombre", "descripcion"]} data={estaciones} columna1={'id'} columna2={'nombre'} detallesTitulo={'Detalles completos'} edicionTitulo={'Editar Estación'}
                            urlDelete={'http://localhost:8000/estaciones/delete/'}
                            formulario={<FormEstaciones estacion={{}} enviar={'Editar Estación'} url={`http://localhost:8000/estaciones/edit/`} peticion={'PUT'} />} />
                    </section>

                    <section className="bg-claro rounded-2xl bg-opacity-30 p-4 lg:p-8">
                        <TituloSeccion titulo={'Servicios'} />
                        <FormServicios servicio={{}} enviar={'Agregar Servicios'} url={'http://localhost:8000/servicios/add'} peticion={'POST'}/>
                        <TablaGenerica propiedades={["nombre", "categoria", "descripcion", "precio", "imagen"]} data={servicios} columna1={'id'} columna2={'nombre'} detallesTitulo={'Detalles completos'} edicionTitulo={'Editar Servicio'}
                            urlDelete={'http://localhost:8000/servicios/delete/'}
                            formulario={<FormServicios servicio={{}} enviar={'Editar Servicios'} url={'http://localhost:8000/servicios/edit/'} peticion={'PUT'}/>} />
                    </section>

                    <section className="bg-claro rounded-2xl bg-opacity-30 p-4 lg:p-8">
                        <TituloSeccion titulo={'Productos'} />
                        <FormProductos producto={{}} enviar={'Agregar Productos'} url={'http://localhost:8000/productos/add'} peticion={'POST'}/>
                        <TablaGenerica propiedades={["nombre", "categoria", "descripcion", "precio", "imagen"]} data={productos} columna1={'id'} columna2={'nombre'} detallesTitulo={'Detalles completos'} edicionTitulo={'Editar Producto'}
                            urlDelete={'http://localhost:8000/productos/delete/'}
                            formulario={<FormProductos producto={{}} enviar={'Editar Productos'} url={'http://localhost:8000/productos/edit/'} peticion={'PUT'}/>} />
                    </section>

                    <section className="bg-claro rounded-2xl bg-opacity-30 p-4 lg:p-8">
                        <TituloSeccion titulo={'Reservaciones'} />
                        <TablaGenerica propiedades={["nombre", "apellido", "email", "telefono", "estacion", "servicio", "genero", "fecha"]} data={reservas} columna1={'id'} columna2={'nombre'} detallesTitulo={'Detalles completos'} edicionTitulo={'Editar Reservación'}
                            urlDelete={'http://localhost:8000/reservas/delete/'} />
                    </section>

                    <section className="bg-claro rounded-2xl bg-opacity-30 p-4 lg:p-8">
                        <TituloSeccion titulo={'Reseñas'} />
                        <TablaGenerica propiedades={["nombre", "comentario", "calificacion"]} data={resenas} columna1={'id'} columna2={'nombre'} detallesTitulo={'Detalles completos'} edicionTitulo={'Editar Reseña'}
                            urlDelete={'http://localhost:8000/resenas/delete/'} />
                    </section>

                    <section className="bg-claro rounded-2xl bg-opacity-30 p-4 lg:p-8">
                        <TituloSeccion titulo={'Artículos de Salud'} />
                        <TablaGenerica propiedades={["titulo", "descripcion", "referencia", "imagen"]} data={salud} columna1={'id'} columna2={'titulo'} detallesTitulo={'Detalles completos'} edicionTitulo={'Editar Artículo de Salud'}
                            urlDelete={'http://localhost:8000/salud/delete/'} />
                    </section>

                    <section className="bg-claro rounded-2xl bg-opacity-30 p-4 lg:p-8">
                        <TituloSeccion titulo={'Recetas'} />
                        <FormRecetas receta={{}} enviar={'Agregar Recetas'} url={'http://localhost:8000/recetas/add'} peticion={'POST'}/>
                        <TablaGenerica propiedades={["nombre", "ingredientes", "pasos"]} data={recetas} columna1={'id'} columna2={'nombre'} detallesTitulo={'Detalles completos'} edicionTitulo={'Editar Receta'}
                            urlDelete={'http://localhost:8000/recetas/delete/'}
                            formulario={<FormRecetas receta={{}} enviar={'Agregar Recetas'} url={'http://localhost:8000/recetas/edit/'} peticion={'PUT'}/>}
                        />
                    </section>
                </main>
            </main>
        </>
    )
}

export default Admin