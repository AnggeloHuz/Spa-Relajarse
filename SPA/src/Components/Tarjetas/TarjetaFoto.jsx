import { Card } from 'flowbite-react';

export default function TarjetaFoto({data}) {
  return (
    <Card
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="https://expospa.files.wordpress.com/2016/11/spa-toulouse-centre.jpg?w=533&h=355"
    >
      <h5 className="text-xl lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <p>
          {data.dia}
        </p>
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        <p>
          <b>MAÑANA: </b>{data.inicio_mañana} hasta {data.fin_mañana}
        </p>
        <p>
          <b>TARDE: </b>{data.inicio_tarde} hasta {data.fin_tarde}
        </p>
      </p>
    </Card>
  )
}