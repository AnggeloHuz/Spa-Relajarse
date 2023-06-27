import { Card } from 'flowbite-react';
import Modal from '../Modal/Modal'

export default function TarjetaProducto({ data }) {
  return (
    <Card
      imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
      imgSrc={data.imagen}
      className='border-2 border-primario'
    >
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          <p>
            {data.nombre}
          </p>
        </h5>
      </a>
      
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">
          {data.precio}
        </span>
        <Modal boton={'Consíguelo'} titulo={'Comprar Producto'} cuerpo={'Proximamente...'}/>
        <Modal boton={'Detalles'} titulo={'Detalles del Producto'} cuerpo={data.descripcion}/>
      </div>
    </Card>
  )
}