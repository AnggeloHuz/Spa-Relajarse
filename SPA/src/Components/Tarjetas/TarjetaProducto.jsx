import { Card } from 'flowbite-react';

export default function TarjetaProducto() {
  return (
    <Card
      imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
      imgSrc="https://www.apple.com/la/watch/images/meta/gps-lte__b0yvr61u8ws2_og.png"
      className='border-2 border-primario'
    >
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          <p>
            Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
          </p>
        </h5>
      </a>
      
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">
          $599
        </span>
        <a
          className="rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white bg-fuerte hover:bg-fuerte_claro focus:outline-none focus:ring-4 focus:ring-cyan-300"
          href="#"
        >
          <p>
            Consíguelo
          </p>
        </a>
        <a
          className="rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white bg-fuerte hover:bg-fuerte_claro focus:outline-none focus:ring-4 focus:ring-cyan-300"
          href="#"
        >
          <p>
            Detalles
          </p>
        </a>
      </div>
    </Card>
  )
}