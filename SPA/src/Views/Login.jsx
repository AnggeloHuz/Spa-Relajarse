import { Button, Label, TextInput } from "flowbite-react";
import Logo from "../assets/SPA.svg";
import { HiOutlineLockClosed, HiUserCircle } from "react-icons/hi";
import { useContext, useState } from "react";
import { Contexto } from "../Context/Contexto";

function Login() {
  const { loguiar } = useContext(Contexto)

  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <main className="h-[100vh] w-full bg-cover flex justify-center items-center bg-center bg-[url('https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2022/05/03/16515798365997.jpg')]">
        <section className="h-auto p-8 xl:w-1/2 w-5/6 flex flex-col gap-8 justify-center items-center bg-fuerte_claro rounded-2xl">
          <img
            className="h-32 rounded-full bg-white p-4 border-2 border-oscuro"
            src={Logo}
            alt=""
          />

          <h2 className="text-2xl lg:text-5xl font-bold">INICIAR SESIÓN</h2>

          <form
            onSubmit={(e) => {
              e.preventDefault()
              setPassword('');
              setUsuario('');

              loguiar({
                "usuario": usuario,
                "password": password
              })
            }}
            className="w-full flex flex-col gap-8">
            <div className="w-full flex gap-4">
              <input
                className="bg-oscuro w-full border-2 border-primario text-white font-semibold text-lg"
                placeholder="@Usuario"
                onChange={e => {
                  setUsuario(e.target.value)
                }}
                value={usuario}
                type="text"
              />
              <HiUserCircle className="h-auto text-5xl text-oscuro" />
            </div>

            <div className="w-full flex gap-4">
              <input
                className="bg-oscuro w-full border-2 border-primario text-white font-semibold text-lg"
                placeholder="Password"
                onChange={e => {
                  setPassword(e.target.value)
                }}
                value={password}
                type="password"
              />
              <HiOutlineLockClosed className="h-auto text-5xl text-oscuro" />
            </div>
            <Button
              className="bg-transparent"
              type="submit"
              gradientDuoTone="greenToBlue"
              outline
            >
              <p className="text-lg font-bold">
                Iniciar Sesion
              </p>
            </Button>
          </form>
        </section>
      </main>
    </>
  );
}

export default Login;