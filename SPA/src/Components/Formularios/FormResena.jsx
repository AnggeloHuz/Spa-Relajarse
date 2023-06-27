import { Button, Label, TextInput, Textarea } from 'flowbite-react';
import { useContext, useState } from 'react';
import { HiStar } from "react-icons/hi";
import {validamosCampo} from '../../js/Validaciones';
import { Contexto } from '../../Context/Contexto';

export default function FormResena() {

    const { peticionPost } = useContext(Contexto)

    const [calificacion, setCalificacion] = useState(0)
    const [usuario, setUsuario] = useState('')
    const [comentario, setComentario] = useState('')

    return (
        <form className="flex w-full flex-col gap-4"
        onSubmit={e => {
            e.preventDefault();

            let validacion = validamosCampo(usuario)
            let validacion2 = validamosCampo(comentario)

            if (validacion === 'Invalido' || validacion2 === 'Invalido') {
                return
            }

            setCalificacion(0)
            setComentario('')
            setUsuario('')

            peticionPost('http://localhost:8000/resenas/add', 'POST', {
                'nombre': usuario,
                'comentario': comentario,
                'calificacion': calificacion.toString()
            })
        }}>
            <div>
                <div className="mb-2 block">
                    <Label
                        className='text-lg text-fuerte font-semibold'
                        htmlFor="usuario"
                        value="Ingresa tu nombre:"
                    />
                </div>
                <TextInput
                    id="usuario"
                    placeholder="Ej: Anggelo Huz"
                    value={usuario}
                    onChange={e => {
                        setUsuario(e.target.value)
                    }}
                    required
                    shadow
                    type="text"
                />
            </div>

            <div
                className="w-full"
                id="textarea"
            >
                <div className="mb-2 block">
                    <Label
                        className='text-lg text-fuerte font-semibold'
                        htmlFor="comment"
                        value="Escribenos tu Reseña:"
                    />
                </div>
                <Textarea
                    id="comment"
                    placeholder="Escribenos tu reseña aqui..."
                    value={comentario}
                    onChange={e => {
                        setComentario(e.target.value)
                    }}
                    required
                    rows={4}
                />
            </div>
            <div className='flex'>
                <HiStar className={calificacion >= 1 ? 'text-5xl text-yellow-300 hover:cursor-pointer' : 'text-5xl text-black hover:cursor-pointer'} 
                onClick={() => {
                    setCalificacion(1)
                }}/>
                <HiStar className={calificacion >= 2 ? 'text-5xl text-yellow-300 hover:cursor-pointer' : 'text-5xl text-black hover:cursor-pointer'} 
                onClick={() => {
                    setCalificacion(2)
                }}/>
                <HiStar className={calificacion >= 3 ? 'text-5xl text-yellow-300 hover:cursor-pointer' : 'text-5xl text-black hover:cursor-pointer'} 
                onClick={() => {
                    setCalificacion(3)
                }}/>
                <HiStar className={calificacion >= 4 ? 'text-5xl text-yellow-300 hover:cursor-pointer' : 'text-5xl text-black hover:cursor-pointer'} 
                onClick={() => {
                    setCalificacion(4)
                }}/>
                <HiStar className={calificacion >= 5 ? 'text-5xl text-yellow-300 hover:cursor-pointer' : 'text-5xl text-black hover:cursor-pointer'} 
                onClick={() => {
                    setCalificacion(5)
                }}/>
            </div>
            <Button type="submit" className='bg-fuerte hover:bg-opacity-70 '>
                Enviar Reseña
            </Button>
        </form>
    )
}