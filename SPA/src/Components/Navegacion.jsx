import { Link } from 'react-router-dom';
import Logo from '../assets/SPA.svg'
import { Button, Navbar } from 'flowbite-react';

export default function NavbarWithCTAButton() {
    return (
        <Navbar
            fluid
            rounded
            className='bg-claro bg-opacity-40 pt-4 pb-4'
        >
            <Navbar.Brand href="https://flowbite-react.com">
                <img
                    alt="Flowbite React Logo"
                    className="mr-2 lg:mr-4 h-6 md:h-6 lg:h-10"
                    src={Logo}
                />
                <span className="self-center whitespace-nowrap text-lg lg:text-2xl font-bold dark:text-white text-oscuro">
                    Spa'Relajarse
                </span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Link to='/' className='text-md lg:text-lg font-semibold text-fuerte hover:bg-oscuro rounded-md p-1 hover:text-primario transition-all duration-500 '>
                    Inicio
                </Link>

                <Link className='text-md lg:text-lg font-semibold text-fuerte hover:bg-oscuro rounded-md p-1 hover:text-primario transition-all duration-500 ' to='/salud'>
                    Salud
                </Link>

                <Link className='text-md lg:text-lg font-semibold text-fuerte hover:bg-oscuro rounded-md p-1 hover:text-primario transition-all duration-500 ' to='/belleza'>
                    Belleza
                </Link>

                <Link className='text-md lg:text-lg font-semibold text-fuerte hover:bg-oscuro rounded-md p-1 hover:text-primario transition-all duration-500 ' to='/recetas'>
                    Recetas
                </Link>

                <Link className='text-md lg:text-lg font-semibold text-fuerte hover:bg-oscuro rounded-md p-1 hover:text-primario transition-all duration-500 ' to='/estaciones'>
                    Estaciones
                </Link>

                <Link className='text-md lg:text-lg font-semibold text-fuerte hover:bg-oscuro rounded-md p-1 hover:text-primario transition-all duration-500 ' to='/reservaciones'>
                    Reservaciones
                </Link>

                <Link className='text-md lg:text-lg font-semibold text-fuerte hover:bg-oscuro rounded-md p-1 hover:text-primario transition-all duration-500 ' to='/resenas'>
                    Reseñas
                </Link>


            </Navbar.Collapse>
        </Navbar>
    )
}

