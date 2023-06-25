import { Accordion } from 'flowbite-react';

export default function Acordion() {
    return (
        <Accordion collapseAll>
            <Accordion.Panel>
                <Accordion.Title className='text-xl lg:text-3xl text-gray-800 bg-fuerte_claro hover:bg-fuerte_claro hover:bg-opacity-80'>
                    Ingredientes
                </Accordion.Title>
                <Accordion.Content className='bg-claro bg-opacity-40'>
                    <p className="mb-2 text-black">
                        Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons,
                        dropdowns, modals, navbars, and more.
                    </p>
                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
                <Accordion.Title className='text-xl lg:text-3xl text-gray-800 bg-fuerte_claro hover:bg-fuerte_claro hover:bg-opacity-80'>
                    Pasos para la Preparación
                </Accordion.Title>
                <Accordion.Content className='bg-claro bg-opacity-40'>
                    <p className="mb-2 text-black">
                        Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
                        has a design equivalent in our Figma file.
                    </p>
                </Accordion.Content>
            </Accordion.Panel>
        </Accordion>
    )
}


