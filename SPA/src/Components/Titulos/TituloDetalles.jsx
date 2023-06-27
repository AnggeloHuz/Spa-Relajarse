export default function TituloDetalles({ titulo }) {
   
    return (
        <>
            <div className="pt-4 border-b-2 border-claro w-full text">
                <h2 className="text-xl lg:text-2xl text-oscuro font-extrabold uppercase">{titulo}</h2>
            </div>
        </>
    )
}