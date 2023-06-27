import { Table } from 'flowbite-react';
import { useContext } from 'react';
import { Contexto } from '../../Context/Contexto';

export default function TablaPrecios({ data }) {

    const { productos } = useContext(Contexto)

    return (
        <Table className='text-center overflow-x-auto'>
            <Table.Head className='border-b-2 border-black' >
                <Table.HeadCell className='bg-fuerte text-sm lg:text-2xl text-white'>
                    nombre
                </Table.HeadCell>
                <Table.HeadCell className='bg-fuerte text-sm lg:text-2xl text-white'>
                    categoria
                </Table.HeadCell>
                <Table.HeadCell className='bg-fuerte text-sm lg:text-2xl text-white'>
                    precio
                </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
                {
                    data.map((objeto) => (
                        <Table.Row className="bg-primario bg-opacity-50 dark:border-gray-700 dark:bg-gray-800" key={objeto.id}>
                            <Table.Cell className="lg:text-xl text-xs text-black">
                                {objeto.nombre}
                            </Table.Cell>
                            <Table.Cell className="lg:text-xl text-xs text-black">
                                {objeto.categoria}
                            </Table.Cell>
                            <Table.Cell className="lg:text-xl text-xs text-black ">
                                {objeto.precio}
                            </Table.Cell>
                        </Table.Row>
                    ))
                }
            </Table.Body>
        </Table>
    )
}