import { Button, Label, TextInput, Textarea } from 'flowbite-react';
import { useContext, useState } from 'react';
import { validamosCampo } from '../../../js/Validaciones';
import { Contexto } from '../../../Context/Contexto';

export default function FormEstaciones({ estacion, url, peticion, enviar }) {

    const { peticionPost, peticionPut, objeto } = useContext(Contexto)

    if (peticion === 'PUT') {
        estacion = objeto
    }

    const [nombre, setNombre] = useState(estacion.nombre === undefined ? '' : estacion.nombre);
    const [descripcion, setDescripcion] = useState(estacion.descripcion === undefined ? '' : estacion.descripcion)

    return (
        <form
            onSubmit={e => {
                e.preventDefault();

                let validacion = validamosCampo(nombre)
                let validacion2 = validamosCampo(descripcion)

                if (validacion === 'Invalido' || validacion2 === 'Invalido') {
                    return
                }

                if (peticion === 'POST') {
                    peticionPost(url, peticion, {
                        "nombre": nombre,
                        "descripcion": descripcion
                    })
                    setDescripcion('')
                    setNombre('')
                    return 
                }

                peticionPut(url + estacion.id, peticion, {
                    "nombre": nombre,
                    "descripcion": descripcion
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
            <Button type="submit" className='bg-fuerte hover:bg-opacity-70 '>
                {enviar}
            </Button>
        </form>
    )
}