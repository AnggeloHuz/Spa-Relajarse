import { Button, Label, TextInput, Textarea } from 'flowbite-react';

export default function FormResena() {
    return (
        <form className="flex w-full flex-col gap-4">
            <div>
                <div className="mb-2 block">
                    <Label
                    className='text-lg text-fuerte font-semibold'
                        htmlFor="usuario"
                        value="Ingresa tu nombre:"
                    />
                </div>
                <TextInput
                    id="usuario"
                    placeholder="Ej: Anggelo Huz"
                    required
                    shadow
                    type="text"
                />
            </div>
            <div
                className="w-full"
                id="textarea"
            >
                <div className="mb-2 block">
                    <Label
                    className='text-lg text-fuerte font-semibold'
                        htmlFor="comment"
                        value="Escribenos tu Reseña:"
                    />
                </div>
                <Textarea
                    id="comment"
                    placeholder="Escribenos tu reseña aqui..."
                    required
                    rows={4}
                />
            </div>
            <div>

            </div>
            <Button type="submit" className='bg-fuerte hover:bg-opacity-70 '>
                Enviar Reseña
            </Button>
        </form>
    )
}