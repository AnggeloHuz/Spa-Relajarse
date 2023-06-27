import { Avatar, Dropdown, Navbar } from "flowbite-react";
import Logo from "../../assets/SPA.svg";
import { useContext } from "react";
import { Contexto } from "../../Context/Contexto";
import { alertaCompletado } from "../../js/Alertas";

export default function NavegacionAdmin() {
    const { setToken } = useContext(Contexto)

  return (
    <Navbar fluid className="bg-claro bg-opacity-40 pt-4 pb-4">
      <Navbar.Brand href="https://flowbite-react.com">
        <img alt="Flowbite React Logo" className="mr-3 h-6 sm:h-9" src={Logo} />
        <span className="self-center whitespace-nowrap text-lg lg:text-2xl font-bold dark:text-white text-oscuro">
          Administrador
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          inline
          label={<Avatar alt="User settings" img={Logo} rounded />}
        >
          <Dropdown.Header>
            <span className="block text-sm">¡Bienvenido!</span>
            <span className="block truncate text-sm font-medium">
              Administrador
            </span>
          </Dropdown.Header>
          <Dropdown.Divider />
          <Dropdown.Item
            onClick={(e) => {
              localStorage.removeItem("token");
              setToken();
              alertaCompletado('Has Cerrado Sesión')
            }}
          >
            Cerrar Sesión
          </Dropdown.Item>
        </Dropdown>
      </div>
    </Navbar>
  );
}
