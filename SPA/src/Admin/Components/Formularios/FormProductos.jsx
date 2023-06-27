import { Button, Label, TextInput, Textarea } from 'flowbite-react';
import { useContext, useState } from 'react';
import { Contexto } from '../../../Context/Contexto';
import { validamosCampo } from '../../../js/Validaciones';

export default function FormProductos({ producto, url, peticion, enviar }) {

    const { peticionPost, peticionPut, objeto } = useContext(Contexto)

    if (peticion === 'PUT') {
        producto = objeto
    }

    const [nombre, setNombre] = useState(producto.nombre === undefined ? '' : producto.nombre);
    const [descripcion, setDescripcion] = useState(producto.descripcion === undefined ? '' : producto.descripcion)
    const [categoria, setCategoria] = useState(producto.categoria === undefined ? '' : producto.categoria)
    const [imagen, setImagen] = useState(producto.imagen === undefined ? '' : producto.imagen)
    const [precio, setPrecio] = useState(producto.precio === undefined ? '' : producto.precio)
    const [moneda, setMoneda] = useState(producto.moneda === undefined ? '' : producto.moneda)



    return (
        <form
            onSubmit={e => {
                e.preventDefault();

                let validacion = validamosCampo(nombre)
                let validacion2 = validamosCampo(descripcion)
                let validacion3 = validamosCampo(categoria)
                let validacion4 = validamosCampo(imagen)
                let validacion5 = validamosCampo(precio)
                let validacion6 = validamosCampo(moneda)

                if (validacion === 'Invalido' || validacion2 === 'Invalido' || validacion3 === 'Invalido' || validacion4 === 'Invalido' || validacion5 === 'Invalido' || validacion6 === 'Invalido') {
                    return
                }

                if (peticion === 'POST') {
                    peticionPost(url, peticion, {
                        "nombre": nombre,
                        "descripcion": descripcion,
                        "categoria": categoria,
                        "imagen": imagen,
                        "precio": moneda +  precio,
                    })
                    setDescripcion('')
                    setNombre('')
                    return 
                }

                peticionPut(url + producto.id, peticion, {
                    "nombre": nombre,
                    "descripcion": descripcion,
                    "categoria": categoria,
                    "imagen": imagen,
                    "precio": moneda +  precio,
                })
            }}
            className="flex w-full flex-col gap-4 p-4 bg-green-300 rounded-2xl mt-4">
            <div>
                <div className="mb-2 block">
                    <Label
                        className='text-lg text-fuerte font-semibold'
                        htmlFor="nombre"
                        value="Ingresa el Nombre:"
                    />
                </div>
                <TextInput
                    id="nombre"
                    value={nombre}
                    onChange={e => {
                        setNombre(e.target.value)
                    }}
                    placeholder="Nombre de la Estación"
                    required
                    shadow
                    type="text"
                />
            </div>

            <div>
                <div className="mb-2 block">
                    <Label
                        className='text-lg text-fuerte font-semibold'
                        htmlFor="categoria"
                        value="Ingresa la Categoria:"
                    />
                </div>
                <TextInput
                    id="categoria"
                    value={categoria}
                    onChange={e => {
                        setCategoria(e.target.value)
                    }}
                    placeholder="Nombre de la Categoria"
                    required
                    shadow
                    type="text"
                />
            </div>

            <div>
                <div className="mb-2 block">
                    <Label
                        className='text-lg text-fuerte font-semibold'
                        htmlFor="descripcion"
                        value="Ingresa la descripción de la estación:"
                    />
                </div>
                <Textarea
                    id="descripcion"
                    value={descripcion}
                    onChange={e => {
                        setDescripcion(e.target.value)
                    }}
                    placeholder="Descripcion de la estación"
                    required
                    shadow
                    type="text"
                />
            </div>

            <div>
                <div className="mb-2 block">
                    <Label
                        className='text-lg text-fuerte font-semibold'
                        htmlFor="precio"
                        value="Ingresa el Precio:"
                    />
                </div>
                <TextInput
                    id="precio"
                    value={precio}
                    onChange={e => {
                        setPrecio(e.target.value)
                    }}
                    required
                    shadow
                    min={0}
                    type="number"
                />
            </div>

            <div>
                <div className="mb-2 block">
                    <Label
                        className='text-lg text-fuerte font-semibold'
                        htmlFor="moneda"
                        value="Ingresa la Moneda:"
                    />
                </div>
                <TextInput
                    id="moneda"
                    value={moneda}
                    onChange={e => {
                        setMoneda(e.target.value)
                    }}
                    placeholder="Ingresa la Moneda. EJ: BsF."
                    required
                    shadow
                    type="text"
                />
            </div>

            <div>
                <div className="mb-2 block">
                    <Label
                        className='text-lg text-fuerte font-semibold'
                        htmlFor="imagen"
                        value="Ingresa la Imágen:"
                    />
                </div>
                <TextInput
                    id="imagen"
                    value={imagen}
                    onChange={e => {
                        setImagen(e.target.value)
                    }}
                    placeholder="Ingresa la url de la imagen..."
                    required
                    shadow
                    type="url"
                />
            </div>
            <Button type="submit" className='bg-fuerte hover:bg-opacity-70 '>
                {enviar}
            </Button>
        </form>
    )
}