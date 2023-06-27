import { Accordion } from 'flowbite-react';

export default function Acordion({ data }) {
    return (
        <Accordion collapseAll>
            <Accordion.Panel>
                <Accordion.Title className='text-xl lg:text-3xl text-gray-800 bg-fuerte_claro hover:bg-fuerte_claro hover:bg-opacity-80'>
                    Ingredientes
                </Accordion.Title>
                <Accordion.Content className='bg-claro bg-opacity-40'>
                    <p className="mb-2 text-black" dangerouslySetInnerHTML={{ __html: data.ingredientes }}>

                    </p>
                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
                <Accordion.Title className='text-xl lg:text-3xl text-gray-800 bg-fuerte_claro hover:bg-fuerte_claro hover:bg-opacity-80'>
                    Pasos para la Preparación
                </Accordion.Title>
                <Accordion.Content className='bg-claro bg-opacity-40' >
                    <p className="mb-2 text-black" dangerouslySetInnerHTML={{ __html: data.pasos }}>

                    </p>
                </Accordion.Content>
            </Accordion.Panel>
        </Accordion>
    )
}


