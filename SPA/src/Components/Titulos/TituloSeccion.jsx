export default function TituloSeccion({ titulo }) {
   
    return (
        <>
            <div className="p-2 lg:p-4 border-b-2 border-claro w-full">
                <h2 className="text-2xl lg:text-4xl text-oscuro font-extrabold">{titulo}</h2>
            </div>
        </>
    )
}