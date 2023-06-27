import { Navigate, Outlet } from "react-router-dom"
import FooterAdmin from "./Components/FooterAdmin";
import NavegacionAdmin from "./Components/NavegacionAdmin";

export const Validacion = ({ token, redireccion = "/login" }) => {
    if (token === undefined) {
        return <Navigate to={redireccion} />
    }

    return (
        <>
            <NavegacionAdmin />
            <Outlet />
            <FooterAdmin />
        </>
    )
}