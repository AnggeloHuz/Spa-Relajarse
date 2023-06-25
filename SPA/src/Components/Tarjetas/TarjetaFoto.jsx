import { Card } from 'flowbite-react';

export default function TarjetaFoto() {
  return (
    <Card
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="https://expospa.files.wordpress.com/2016/11/spa-toulouse-centre.jpg?w=533&h=355"
    >
      <h5 className="text-xl lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <p>
          Noteworthy technology acquisitions 2021
        </p>
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        <p>
          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
        </p>
      </p>
    </Card>
  )
}