import React, { useContext, useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Button, Label, TextInput } from 'flowbite-react';
import { Contexto } from '../../../Context/Contexto';
import { validamosCampo } from '../../../js/Validaciones';
import autoprefixer from 'autoprefixer';

export default function FormRecetas({ receta, url, peticion, enviar }) {

    const { peticionPost, peticionPut, objeto } = useContext(Contexto)

    if (peticion === 'PUT') {
        receta = objeto
    }

    const [nombre, setNombre] = useState(receta.nombre === undefined ? '' : receta.nombre)

    const editorRef = useRef(null);
    const editorRef2 = useRef(null);
    

    return (
        <>
            <form
                className="flex w-full flex-col gap-4 p-4 bg-green-300 rounded-2xl mt-4"
                onSubmit={e => {
                    e.preventDefault()

                    const validacion = validamosCampo(nombre);
                    const validacion2 = validamosCampo(editorRef.current.getContent());
                    const validacion3 = validamosCampo(editorRef2.current.getContent());

                    if (validacion === 'Invalido' || validacion2 === 'Invalido' || validacion3 === 'Invalido') {
                        return
                    }
                    
                    if (peticion === 'POST') {
                        peticionPost(url, peticion, {
                            "nombre": nombre,
                            "ingredientes": editorRef.current.getContent(),
                            "pasos": editorRef2.current.getContent()
                        })
                        setNombre('')
                        return 
                    }

                    peticionPut(url + receta.id, peticion, {
                        "nombre": nombre,
                        "ingredientes": editorRef.current.getContent(),
                        "pasos": editorRef2.current.getContent()
                    })
                }}>

                <div>
                    <div className="mb-2 block">
                        <Label
                            className='text-lg text-fuerte font-semibold'
                            htmlFor="nombre"
                            value="Ingresa el Nombre de la Receta:"
                        />
                    </div>
                    <TextInput
                        id="nombre"
                        value={nombre}
                        onChange={e => {
                            setNombre(e.target.value)
                        }}
                        placeholder="Nombre de la Receta"
                        required
                        shadow
                        type="text"
                    />
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label
                            className='text-lg text-fuerte font-semibold'
                            htmlFor="ingredientes"
                            value="Ingresa los ingredientes de la receta:"
                        />
                    </div>
                    <Editor
                        id='ingredientes'
                        apiKey='28fj4fgh6xmyttu5w7h5hbg8crfs0hylqp2mtfw44l0cbbsx'
                        onInit={(evt, editor) => editorRef.current = editor}
                        initialValue={receta.ingredientes}
                        init={{
                            width: autoprefixer,
                            height: 200,
                            menubar: false,
                            plugins: [
                                'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                                'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                                'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                            ],
                            toolbar: 'undo redo | blocks | ' +
                                'bold italic forecolor | alignleft aligncenter ' +
                                'alignright alignjustify | bullist numlist outdent indent | ' +
                                'removeformat | help',
                            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                        }}
                    />
                </div>


                <div>
                    <div className="mb-2 block">
                        <Label
                            className='text-lg text-fuerte font-semibold'
                            htmlFor="pasos"
                            value="Ingresa los pasos de la receta:"
                        />
                    </div>
                    <Editor
                        id='pasos'
                        apiKey='28fj4fgh6xmyttu5w7h5hbg8crfs0hylqp2mtfw44l0cbbsx'
                        onInit={(evt, editor) => editorRef2.current = editor}
                        initialValue={receta.pasos}
                        init={{
                            width: autoprefixer,
                            height: 200,
                            menubar: false,
                            plugins: [
                                'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                                'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                                'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                            ],
                            toolbar: 'undo redo | blocks | ' +
                                'bold italic forecolor | alignleft aligncenter ' +
                                'alignright alignjustify | bullist numlist outdent indent | ' +
                                'removeformat | help',
                            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                        }}
                    />
                </div>
                <Button type="submit" className='bg-fuerte hover:bg-opacity-70 '>
                    {enviar}
                </Button>
            </form>
        </>
    );
}