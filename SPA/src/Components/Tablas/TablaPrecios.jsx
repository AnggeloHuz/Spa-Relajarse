import { Table } from 'flowbite-react';

export default function TablaPrecios() {
    return (
        <Table className='text-center overflow-x-auto'>
            <Table.Head className='border-b-2 border-black' >
                <Table.HeadCell className='bg-fuerte text-sm lg:text-2xl text-white'>
                    Nombre del Producto
                </Table.HeadCell>
                <Table.HeadCell className='bg-fuerte text-sm lg:text-2xl text-white'>
                    Categoría
                </Table.HeadCell>
                <Table.HeadCell className='bg-fuerte text-sm lg:text-2xl text-white'>
                    Precio
                </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
                <Table.Row className="bg-primario bg-opacity-50 dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="lg:text-xl text-xs text-black">
                        Apple MacBook Pro 17"
                    </Table.Cell>
                    <Table.Cell className="lg:text-xl text-xs text-black">
                        Laptop
                    </Table.Cell>
                    <Table.Cell className="lg:text-xl text-xs text-black">
                        $2999
                    </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-primario bg-opacity-50 dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="lg:text-xl text-xs text-black">
                        Apple MacBook Pro 17"
                    </Table.Cell>
                    <Table.Cell className="lg:text-xl text-xs text-black">
                        Laptop
                    </Table.Cell>
                    <Table.Cell className="lg:text-xl text-xs text-black">
                        $2999
                    </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-primario bg-opacity-50 dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="lg:text-xl text-xs text-black">
                        Apple MacBook Pro 17"
                    </Table.Cell>
                    <Table.Cell className="lg:text-xl text-xs text-black">
                        Laptop
                    </Table.Cell>
                    <Table.Cell className="lg:text-xl text-xs text-black">
                        $2999
                    </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-primario bg-opacity-50 dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="lg:text-xl text-xs text-black">
                        Apple MacBook Pro 17"
                    </Table.Cell>
                    <Table.Cell className="lg:text-xl text-xs text-black">
                        Laptop
                    </Table.Cell>
                    <Table.Cell className="lg:text-xl text-xs text-black">
                        $2999
                    </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-primario bg-opacity-50 dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="lg:text-xl text-xs text-black">
                        Apple MacBook Pro 17"
                    </Table.Cell>
                    <Table.Cell className="lg:text-xl text-xs text-black">
                        Laptop
                    </Table.Cell>
                    <Table.Cell className="lg:text-xl text-xs text-black">
                        $2999
                    </Table.Cell>
                </Table.Row>
                

            </Table.Body>
        </Table>
    )
}