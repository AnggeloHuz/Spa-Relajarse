import { Button, Timeline } from 'flowbite-react';
import { useContext } from 'react';
import { Contexto } from '../../Context/Contexto';
import { HiStar } from "react-icons/hi";

export default function TodasResenas() {

    const { resenas } = useContext(Contexto)

    return (
        <div className='p-4 lg:p-8 rounded-xl bg-fuerte_claro bg-opacity-75 h-full mt-4 lg:mt-8 mb-4 lg:mb-8' >
            <Timeline className='border-fuerte'>
                {
                    resenas.map((resena) => (
                        <Timeline.Item key={resena.id}>
                            <Timeline.Point />
                            <Timeline.Content>
                                <Timeline.Time className='text-white flex gap-2 text-2xl items-center'>
                                    {resena.calificacion} <HiStar className='text-2xl text-yellow-300' />
                                </Timeline.Time>
                                <Timeline.Title className='text-oscuro font-extrabold'>
                                    {resena.nombre}
                                </Timeline.Title>
                                <Timeline.Body>
                                    <p className='text-black'>
                                        {resena.comentario}
                                    </p>
                                </Timeline.Body>
                            </Timeline.Content>
                        </Timeline.Item>
                    ))
                }
            </Timeline>
        </div>
    )
}
