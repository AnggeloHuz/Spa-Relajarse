import { Button, Checkbox, Label, TextInput, Select, Alert } from 'flowbite-react';
import { useContext, useState } from 'react';
import { Contexto } from '../../Context/Contexto';
import { validamosEmail, validamosCampo } from '../../js/Validaciones';

export default function FormReservar() {

    const { estaciones, servicios, peticionPost } = useContext(Contexto)

    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [email, setEmail] = useState('')
    const [telefono, setTelefono] = useState('')
    const [estacion, setEstacion] = useState('')
    const [servicio, setServicio] = useState('')
    const [genero, setGenero] = useState('')
    const [fecha, setFecha] = useState('')

    return (
        <form className="flex w-full flex-col gap-4"
            onSubmit={e => {
                e.preventDefault()

                let validacion = validamosCampo(nombre)
                let validacion2 = validamosCampo(apellido)
                let validacion3 = validamosCampo(estacion)
                let validacion4 = validamosCampo(fecha)
                let validacion5 = validamosCampo(servicio)
                let validacion6 = validamosCampo(genero)
                let validacion7 = validamosEmail(email)

                if (validacion === 'Invalido' || validacion2 === 'Invalido' || validacion3 === 'Invalido' || validacion4 === 'Invalido' || validacion5 === 'Invalido' || validacion6 === 'Invalido' || validacion7 === 'Invalido') {
                    return
                }

                peticionPost('http://localhost:8000/reservas/add', 'POST', {
                    "nombre": nombre,
                    "apellido": apellido,
                    "estacion": estacion,
                    "fecha": fecha,
                    "servicio": servicio,
                    "genero": genero,
                    "email": email,
                    "telefono": telefono
                })

                setNombre('')
                setApellido('')
                setEmail('')
                setTelefono('')
                setEstacion('')
                setServicio('')
                setGenero('')
                setFecha('')
            }}>
            <div className='lg:grid lg:grid-cols-2 gap-4'>
                <div>
                    <div className="mb-2 block">
                        <Label
                            className='text-lg text-fuerte font-semibold'
                            htmlFor="nombre"
                            value="Ingresa tu nombre:"
                        />
                    </div>
                    <TextInput
                        id="nombre"
                        placeholder="Anggelo Alexander"
                        value={nombre}
                        onChange={e => {
                            setNombre(e.target.value)
                        }}
                        required
                        shadow
                        type="text"
                    />
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label
                            className='text-lg text-fuerte font-semibold'
                            htmlFor="apellido"
                            value="Ingresa tu apellido:"
                        />
                    </div>
                    <TextInput
                        id="apellido"
                        placeholder="Huz Pernia"
                        value={apellido}
                        onChange={e => {
                            setApellido(e.target.value)
                        }}
                        required
                        shadow
                        type="text"
                    />
                </div>
            </div>

            <div>
                <div className="mb-2 block">
                    <Label
                        className='text-lg text-fuerte font-semibold'
                        htmlFor="email"
                        value="Ingresa tu Email:"
                    />
                </div>
                <TextInput
                    id="email"
                    placeholder="anggelohuz@gmail.com"
                    value={email}
                    onChange={e => {
                        setEmail(e.target.value)
                    }}
                    required
                    shadow
                    type="email"
                />
            </div>


            <div className='lg:grid lg:grid-cols-2 gap-4'>
                <div>
                    <div className="mb-2 block">
                        <Label
                            className='text-lg text-fuerte font-semibold'
                            htmlFor="telefono"
                            value="Ingresa tu Teléfono:"
                        />
                    </div>
                    <TextInput
                        id="telefono"
                        placeholder="0412-0686329"
                        value={telefono}
                        onChange={e => {
                            setTelefono(e.target.value)
                        }}
                        required
                        shadow
                        type="tel"
                        pattern='[0][0-9]{3}-[0-9]{7}'
                    />
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label
                            className='text-lg text-fuerte font-semibold'
                            htmlFor="estacion"
                            value="Selecciona la Estación:"
                        />
                    </div>
                    <Select
                        id="estacion"
                        required
                        value={estacion}
                        onChange={e => {
                            setEstacion(e.target.value)
                        }}
                    >
                        <option>

                        </option>
                        {
                            estaciones.map((estacion) => (
                                <option>
                                    {estacion.nombre}
                                </option>
                            ))
                        }
                    </Select>
                </div>
            </div>

            <div>
                <div className="mb-2 block">
                    <Label
                        className='text-lg text-fuerte font-semibold'
                        htmlFor="servicio"
                        value="Selecciona el Servicio:"
                    />
                </div>
                <Select
                    id="servicio"
                    required
                    value={servicio}
                    onChange={e => {
                        setServicio(e.target.value)
                    }}
                >
                    <option>

                    </option>
                    {
                        servicios.map((servicio) => (
                            <option>
                                {servicio.nombre}
                            </option>
                        ))
                    }
                </Select>
            </div>

            <div className='lg:grid lg:grid-cols-2 gap-4'>
                <div>
                    <div className="mb-2 block">
                        <Label
                            className='text-lg text-fuerte font-semibold'
                            htmlFor="genero"
                            value="Selecciona tu Género:"
                        />
                    </div>
                    <Select
                        id="genero"
                        required
                        value={genero}
                        onChange={e => {
                            setGenero(e.target.value)
                        }}
                    >
                        <option>

                        </option>
                        <option>
                            Hombre
                        </option>
                        <option>
                            Mujer
                        </option>
                    </Select>
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label
                            className='text-lg text-fuerte font-semibold'
                            htmlFor="fecha"
                            value="Ingresa la fecha de la reserva:"
                        />
                    </div>
                    <TextInput
                        id="fecha"
                        value={fecha}
                        onChange={e => {
                            setFecha(e.target.value)
                        }}
                        required
                        shadow
                        type="date"
                    />
                </div>
            </div>
            <Button type="submit" className='bg-fuerte hover:bg-opacity-70 '>
                Register new account
            </Button>
        </form>
    )
}