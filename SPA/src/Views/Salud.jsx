import ArticuloSalud from "../Components/Tarjetas/ArticuloSalud"

function Salud() {

    return (
        <>
            <main>
                <section className="w-full h-auto p-4 lg:p-8 flex flex-col gap-8">
                    <ArticuloSalud />
                    <ArticuloSalud />
                    <ArticuloSalud />
                </section>
            </main>
        </>
    )
}

export default Salud