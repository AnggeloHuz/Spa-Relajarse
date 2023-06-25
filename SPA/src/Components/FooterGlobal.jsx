import { Footer } from 'flowbite-react';
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import FormResena from './Formularios/FormResena';
import Logo from '../assets/SPA.svg'

export default function FooterGlobal() {
  return (
    <Footer container className='bg-claro bg-opacity-40'>
      <div className="w-full">
        <div className="grid w-full gap-8 sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className='lg:w-1/2 w-full flex h-12'>
            <Footer.Brand
              alt="Spa'Relajarse Logo"
              className='h-12'
              src={Logo}
            />
            <span className='text-4xl self-center whitespace-nowrap font-bold text-oscuro'>
              Spa'Relajarse
            </span>
          </div>
          <div className="flex items-center justify-center w-full lg:w-1/2 p-4 lg:p-8">
            <FormResena />
          </div>
        </div>
        <Footer.Divider className='border-black'/>
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            by="Spa'Relajarse™. Todos los Derechos Reservados para el Autor: ANGGELO HUZ"
            href="#"
            year={2023}
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon
              href="#"
              icon={BsFacebook}
            />
            <Footer.Icon
              href="#"
              icon={BsInstagram}
            />
            <Footer.Icon
              href="#"
              icon={BsTwitter}
            />
            <Footer.Icon
              href="#"
              icon={BsGithub}
            />
          </div>
        </div>
      </div>
    </Footer>
  )
}