import { Navigate, Route, Routes } from 'react-router-dom'
import Inicio from './Views/Inicio'
import Salud from './Views/Salud'
import Belleza from './Views/Belleza'
import Recetas from './Views/Recetas'
import Estaciones from './Views/Estaciones'
import Reservaciones from './Views/Reservaciones'
import Resenas from './Views/Resenas'
import Login from './Views/Login'
import Admin from "./Admin/Admin";
import { Contexto } from "./Context/Contexto";
import { useContext } from "react";
import { Validacion } from "./Admin/Validacion";

function App() {
  const { token } = useContext(Contexto);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={token != undefined ? <Navigate to="/admin" /> : <Inicio />}
        />
        <Route
          path="/salud"
          element={token != undefined ? <Navigate to="/admin" /> : <Salud />}
        />
        <Route
          path="/belleza"
          element={token != undefined ? <Navigate to="/admin" /> : <Belleza />}
        />
        <Route
          path="/recetas"
          element={token != undefined ? <Navigate to="/admin" /> : <Recetas />}
        />
        <Route
          path="/estaciones"
          element={token != undefined ? <Navigate to="/admin" /> : <Estaciones />}
        />
        <Route
          path="/reservaciones"
          element={token != undefined ? <Navigate to="/admin" /> : <Reservaciones />}
        />
        <Route
          path="/resenas"
          element={token != undefined ? <Navigate to="/admin" /> : <Resenas />}
        />
        <Route
          path="/login"
          element={token != undefined ? <Navigate to="/admin" /> : <Login />}
        />
        <Route element={<Validacion token={token} />}>
          <Route path="/admin" element={<Admin />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
