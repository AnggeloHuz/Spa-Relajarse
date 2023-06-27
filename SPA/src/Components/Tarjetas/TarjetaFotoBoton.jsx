import { Card, Button } from 'flowbite-react';
import Modal from '../Modal/Modal';

export default function TarjetaFotoBoton({ data }) {
  return (
    <Card
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="https://img.freepik.com/foto-gratis/hermosa-composicion-spa-camilla-masaje-centro-bienestar-copyspace_155003-14873.jpg?w=2000"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <p>
          {data.nombre}
        </p>
      </h5>
      <Modal titulo={'Detalles de la Estación'} boton={'Ver Detalles'} cuerpo={data.descripcion}/>
    </Card>
  )
}


