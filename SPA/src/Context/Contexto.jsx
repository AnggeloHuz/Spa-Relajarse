import { createContext, useEffect, useState } from "react";
import { alertaAdvertencia, alertaCarga, alertaCompletado, alertaError, alertaInformatica } from "../js/Alertas";
import Swal from "sweetalert2";

export const Contexto = createContext()

export function ContextoProvider(props) {

  const [token, setToken] = useState()
  const [horarios, setHorarios] = useState([])
  const [estaciones, setEstaciones] = useState([])
  const [servicios, setServicios] = useState([])
  const [salud, setSalud] = useState([])
  const [productos, setProductos] = useState([])
  const [recetas, setRecetas] = useState([])
  const [resenas, setResenas] = useState([])
  const [reservas, setReservas] = useState([])
  const [estaServicios, setEstaServicios] = useState([])
  const [actualizar, setActualizar] = useState(true)
  const [objeto, setObjeto] = useState({})

  const peticionesEstructuraGet = [{
    "horarios": {
      "url": 'http://localhost:8000/horarios',
      "metodo": "GET",
      "contenido": "",
      "estado": setHorarios
    }
  }, {
    "servicios": {
      "url": 'http://localhost:8000/servicios',
      "metodo": "GET",
      "contenido": "",
      "estado": setServicios
    }
  }, {
    "productos": {
      "url": 'http://localhost:8000/productos',
      "metodo": "GET",
      "contenido": "",
      "estado": setProductos
    }
  }, {
    "estaciones": {
      "url": 'http://localhost:8000/estaciones',
      "metodo": "GET",
      "contenido": "",
      "estado": setEstaciones
    }
  }, {
    "salud": {
      "url": 'http://localhost:8000/salud',
      "metodo": "GET",
      "contenido": "",
      "estado": setSalud
    }
  }, {
    "recetas": {
      "url": 'http://localhost:8000/recetas',
      "metodo": "GET",
      "contenido": "",
      "estado": setRecetas
    }
  }, {
    "resenas": {
      "url": 'http://localhost:8000/resenas',
      "metodo": "GET",
      "contenido": "",
      "estado": setResenas
    }
  }, {
    "reservas": {
      "url": 'http://localhost:8000/reservas',
      "metodo": "GET",
      "contenido": "",
      "estado": setReservas
    }
  },]

  const variables = ["horarios", "servicios", "productos", "estaciones", "salud", "recetas", "resenas", "reservas"]

  useEffect(() => {
    alertaCarga()
    const sesion = localStorage.getItem("token")

    if (sesion != null) {
      setToken(sesion)
    }
  }, [])

  useEffect(() => {
    variables.forEach(tipo => {
      peticionesEstructuraGet.forEach(peticion => {
        if (peticion[tipo]) {
          peticionGet(peticion[tipo].url, peticion[tipo].metodo, peticion[tipo].contenido, peticion[tipo].estado)
        }
      })
    })

  }, [actualizar])

  function loguiar(login) {

    fetch("http://localhost:8000/usuarios/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(login),
    })
      .then((response) => response.text())
      .then((data) => {
        /** Procesar los datos **/
        const respuesta = JSON.parse(data);
        console.log(respuesta)

        if (respuesta.status === 200) {
          setToken(respuesta.token)
          localStorage.setItem("token", JSON.stringify(respuesta.token));
          alertaCompletado(respuesta.menssage)
        }
        if (respuesta.status === 400) {
          alertaAdvertencia(respuesta.menssage)
        }
        if (respuesta.status === 409) {
          alertaError(respuesta.menssage)
        }
      });
  }

  function peticionGet(url, metodo, contenido, estado) {
    fetch(url, {
      method: metodo,
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      }

    })
      .then((response) => response.text())
      .then((data) => {
        /** Procesar los datos **/
        const respuesta = JSON.parse(data);
        console.log(respuesta)

        if (respuesta.status === 200) {
          estado(respuesta.data)
        }
      });
  }

  function peticionPost(url, metodo, contenido) {
    fetch(url, {
      method: metodo,
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify(contenido)

    })
      .then((response) => response.text())
      .then((data) => {
        /** Procesar los datos **/
        const respuesta = JSON.parse(data);
        console.log(respuesta)

        if (respuesta.status === 200) {
          setActualizar(!actualizar)
          alertaCompletado(respuesta.menssage)
        }
        if (respuesta.status === 400) {
          alertaAdvertencia(respuesta.menssage)
        }
        if (respuesta.status === 409) {
          alertaError(respuesta.menssage)
        }
      });
  }

  function peticionPut(url, metodo, contenido) {
    fetch(url, {
      method: metodo,
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify(contenido)

    })
      .then((response) => response.text())
      .then((data) => {
        /** Procesar los datos **/
        const respuesta = JSON.parse(data);
        console.log(respuesta)

        if (respuesta.status === 200) {
          setActualizar(!actualizar)
          alertaCompletado(respuesta.menssage)
        }
        if (respuesta.status === 400) {
          alertaAdvertencia(respuesta.menssage)
        }
        if (respuesta.status === 409) {
          alertaError(respuesta.menssage)
        }
      });
  }

  function peticionDelete(url, metodo) {
    Swal.fire({
      title: '¿Estás Seguro?',
      text: 'Quieres eliminar el objeto seleccionado',
      icon: 'warning',
      showDenyButton: true,
      background: '#0f0f0f',
      confirmButtonText: 'Si, Eliminar',
      denyButtonText: 'No'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(url, {
          method: metodo,
          headers: {
            "Content-Type": "application/json;charset=utf-8",
            "Authorization": `Bearer ${token}`,
          }

        })
        .then((response) => response.text())
        .then((data) => {
          /** Procesar los datos **/
          const respuesta = JSON.parse(data);
          console.log(respuesta)

          if (respuesta.status === 200) {
            setActualizar(!actualizar)
            alertaCompletado(respuesta.menssage)
          }
          if (respuesta.status === 400) {
            alertaAdvertencia(respuesta.menssage)
          }
          if (respuesta.status === 409) {
            alertaError(respuesta.menssage)
          }
        });
      } else if (result.isDenied) {
        return alertaInformatica('Ten cuidado cuando eliminas objetos')
      }
    })

  }



  return (
    <Contexto.Provider value={{
      token,
      setToken,
      horarios,
      estaciones,
      servicios,
      salud,
      productos,
      recetas,
      resenas,
      reservas,
      estaServicios,
      peticionPost,
      loguiar,
      peticionDelete,
      objeto,
      setObjeto,
      peticionPut
    }}>
      {props.children}
    </Contexto.Provider>
  )
}