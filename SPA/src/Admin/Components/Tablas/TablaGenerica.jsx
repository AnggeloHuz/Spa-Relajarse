import { Button, Table } from 'flowbite-react';
import { HiPencilAlt, HiTrash, HiDotsCircleHorizontal } from "react-icons/hi";
import Modal from '../../../Components/Modal/Modal';
import DetallesObjeto from '../DetallesObjeto';
import { useContext } from 'react';
import { Contexto } from '../../../Context/Contexto';

export default function TablaGenerica({ columna1, columna2, data, edicionTitulo, detallesTitulo, propiedades, urlDelete, formulario }) {

    const { peticionDelete, setObjeto } = useContext(Contexto)

    return (
        <Table className='text-center overflow-x-auto mt-8 mb-8'>
            <Table.Head className='border-b-2 border-black' >
                <Table.HeadCell className='bg-fuerte text-sm lg:text-2xl text-white'>
                    {columna1}
                </Table.HeadCell>
                <Table.HeadCell className='bg-fuerte text-sm lg:text-2xl text-white'>
                    {columna2}
                </Table.HeadCell>
                <Table.HeadCell className='bg-fuerte text-sm lg:text-2xl text-white'>
                    opciones
                </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
                {
                    data.map((objeto) => (
                        <Table.Row className="bg-primario bg-opacity-50 dark:border-gray-700 dark:bg-gray-800" key={objeto.id}>
                            <Table.Cell className="lg:text-xl text-xs text-black">
                                {objeto[columna1]}
                            </Table.Cell>
                            <Table.Cell className="lg:text-xl text-xs text-black">
                                {objeto[columna2]}
                            </Table.Cell>
                            <Table.Cell className="lg:text-xl flex gap-4 items-center justify-center">
                                <div onClick={() => {
                                    setObjeto(objeto)
                                }}>
                                <Modal
                                    
                                    titulo={edicionTitulo}
                                    boton={<HiPencilAlt className='text-xl lg:text-3xl' />}
                                    cuerpo={formulario} />
                                </div>
                                <Modal
                                    titulo={detallesTitulo}
                                    tipo={'success'}
                                    boton={<HiDotsCircleHorizontal className='text-xl lg:text-3xl' />}
                                    cuerpo={<DetallesObjeto objeto={objeto} propiedades={propiedades}/>} />
                                <Button gradientMonochrome="failure"
                                onClick={() => {
                                    peticionDelete(urlDelete + objeto.id, 'DELETE')
                                }}>
                                    <HiTrash className='text-xl lg:text-3xl' />
                                </Button>
                            </Table.Cell>
                        </Table.Row>
                    ))
                }
            </Table.Body>
        </Table>
    )
}