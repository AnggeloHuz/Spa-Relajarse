import { Carousel } from 'flowbite-react';

export default function Carrousel() {
    const bg = 'https://storage.kempinski.com/cdn-cgi/image/w=1920,f=auto,g=auto,fit=scale-down/ki-cms-prod/images/9/4/7/5/1315749-1-eng-GB/f521304a40be-74743181_4K.jpg'

    return (
        <>
            <Carousel className='lg:h-[70vh] h-[50vh]'
                leftControl=" "
                rightControl=" ">
                <div className={`flex flex-col gap-8 h-full items-center justify-center bg-[url('https://storage.kempinski.com/cdn-cgi/image/w=1920,f=auto,g=auto,fit=scale-down/ki-cms-prod/images/9/4/7/5/1315749-1-eng-GB/f521304a40be-74743181_4K.jpg')] bg-center bg-cover`}>
                    <div className='bg-black bg-opacity-40 rounded-md p-4 flex items-center justify-center text-center flex-col'>
                        <h2 className='text-2xl lg:text-4xl text-primario font-bold'>
                            Relájate en nuestro SPA confortable</h2>
                        <p className='text-sm lg:text-lg text-white w-3/4'>
                            ¡Tenemos todo lo que necesitas para pasar una tarde de relajación y tratar tus dolores en las articulaciones!
                        </p>
                    </div>

                    <h4 className='text-xl lg:text-3xl text-black font-extrabold'>
                        Estacion
                    </h4>
                </div>
            </Carousel>
        </>
    )
}