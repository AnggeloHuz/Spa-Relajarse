import { Button, Checkbox, Label, TextInput, Select } from 'flowbite-react';

export default function FormReservar() {
    return (
        <form className="flex w-full flex-col gap-4">
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
                        required
                        shadow
                        type="tel"
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
                    >
                        <option>

                        </option>
                        <option>
                            Canada
                        </option>
                        <option>
                            France
                        </option>
                        <option>
                            Germany
                        </option>
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
                >
                    <option>

                    </option>
                    <option>
                        Canada
                    </option>
                    <option>
                        France
                    </option>
                    <option>
                        Germany
                    </option>
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