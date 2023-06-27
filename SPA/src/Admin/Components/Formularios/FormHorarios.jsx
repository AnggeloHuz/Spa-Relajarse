import { Button, Label, TextInput } from 'flowbite-react';
import { useContext, useState } from 'react';
import { Contexto } from '../../Context/Contexto';

export default function FormHorario({ horario }) {

    const { editarHorarios } = useContext(Contexto)

    const [dias, setDias] = useState(horario.dia);
    const [inicioManana, setInicioManana] = useState(horario.inicio_mañana)
    const [finManana, setFinManana] = useState(horario.fin_mañana)
    const [inicioTarde, setInicioTarde] = useState(horario.inicio_tarde)
    const [finTarde, setFinTarde] = useState(horario.fin_tarde)

    return (
        <form
            onSubmit={e => {
                e.preventDefault();

                editarHorarios({
                    "dia": dias,
                    "inicio_mañana": inicioManana,
                    "fin_mañana": finManana,
                    "inicio_tarde": inicioTarde,
                    "fin_tarde": finTarde
                }, horario.id)
            }}
            className="flex w-full flex-col gap-4">
            <div>
                <div className="mb-2 block">
                    <Label
                        className='text-lg text-fuerte font-semibold'
                        htmlFor="dia"
                        value="Ingresa los Días:"
                    />
                </div>
                <TextInput
                    id="dia"
                    value={dias}
                    onChange={e => {
                        setDias(e.target.value)
                    }}
                    placeholder="Días"
                    required
                    shadow
                    type="text"
                />
            </div>

            <div>
                <div className="mb-2 block">
                    <Label
                        className='text-lg text-fuerte font-semibold'
                        htmlFor="hora-inicio-mañana"
                        value="Hora inicio mañana:"
                    />
                </div>
                <TextInput
                    id="hora-inicio-mañana"
                    value={inicioManana}
                    onChange={e => {
                        setInicioManana(e.target.value)
                    }}
                    required
                    shadow
                    type="time"
                />
            </div>

            <div>
                <div className="mb-2 block">
                    <Label
                        className='text-lg text-fuerte font-semibold'
                        htmlFor="hora-fin-mañana"
                        value="Hora fin mañana:"
                    />
                </div>
                <TextInput
                    id="hora-fin-mañana"
                    value={finManana}
                    onChange={e => {
                        setFinManana(e.target.value)
                    }}
                    required
                    shadow
                    type="time"
                />
            </div>

            <div>
                <div className="mb-2 block">
                    <Label
                        className='text-lg text-fuerte font-semibold'
                        htmlFor="hora-inicio-tarde"
                        value="Hora inicio tarde:"
                    />
                </div>
                <TextInput
                    id="hora-inicio-tarde"
                    value={inicioTarde}
                    onChange={e => {
                        setInicioTarde(e.target.value)
                    }}
                    required
                    shadow
                    type="time"
                />
            </div>

            <div>
                <div className="mb-2 block">
                    <Label
                        className='text-lg text-fuerte font-semibold'
                        htmlFor="hora-fin-tarde"
                        value="Hora fin tarde:"
                    />
                </div>
                <TextInput
                    id="hora-fin-tarde"
                    value={finTarde}
                    onChange={e => {
                        setFinTarde(e.target.value)
                    }}
                    required
                    shadow
                    type="time"
                />
            </div>
            <Button type="submit" className='bg-fuerte hover:bg-opacity-70 '>
                Editar Horario
            </Button>
        </form>
    )
}