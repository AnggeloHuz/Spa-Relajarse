
import { Card } from 'flowbite-react';


export default function TarjetaSimple({ data }) {
    return (
      <Card
        className="max-w-sm bg-claro w-full m-auto"
        href="#"
      >
        <h5 className="text-xl lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <p>
            {data.nombre}
          </p>
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          <p>
            {data.descripcion}
          </p>
        </p>
      </Card>
    )
  }