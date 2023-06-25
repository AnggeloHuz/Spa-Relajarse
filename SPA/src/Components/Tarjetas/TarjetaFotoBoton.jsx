import { Card, Button } from 'flowbite-react';

export default function TarjetaFotoBoton() {
  return (
    <Card
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="https://img.freepik.com/foto-gratis/hermosa-composicion-spa-camilla-masaje-centro-bienestar-copyspace_155003-14873.jpg?w=2000"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <p>
          Noteworthy technology acquisitions 2021
        </p>
      </h5>
      <Button
        gradientDuoTone="greenToBlue"
        outline
      >
        <p>
          Ver Detalles
        </p>
      </Button>
    </Card>
  )
}


