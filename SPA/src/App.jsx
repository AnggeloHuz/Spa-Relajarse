import { Route, Routes } from 'react-router-dom'
import NavbarWithCTAButton from './Components/Navegacion'
import Inicio from './Views/Inicio'
import Salud from './Views/Salud'
import Belleza from './Views/Belleza'
import Recetas from './Views/Recetas'
import Estaciones from './Views/Estaciones'
import Reservaciones from './Views/Reservaciones'
import Resenas from './Views/Resenas'

function App() {

  return (
    <>
      <NavbarWithCTAButton />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/salud" element={<Salud />} />
        <Route path="/belleza" element={<Belleza />} />
        <Route path="/recetas" element={<Recetas />} />
        <Route path="/estaciones" element={<Estaciones />} />
        <Route path="/reservaciones" element={<Reservaciones />} />
        <Route path="/resenas" element={<Resenas />} />
      </Routes>
    </>
  )
}

export default App
