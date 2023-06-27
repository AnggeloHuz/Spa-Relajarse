import Swal from "sweetalert2";

export function alertaCompletado(data) {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Se Completó la Petición',
        text: data,
        showConfirmButton: false,
        background: '#0f0f0f',
        timer: 5000
    })
}

export function alertaAdvertencia(data) {
    Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'Existe un problema',
        text: data,
        showConfirmButton: true,
        background: '#0f0f0f',
    })
}

export function alertaError(data) {
    Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Existe un Error',
        text: data,
        showConfirmButton: true,
        background: '#0f0f0f',
    })
}
export function alertaInformatica(data) {
    Swal.fire({
        position: 'center',
        icon: 'info',
        title: 'Lee la Info',
        text: data,
        showConfirmButton: true,
        background: '#0f0f0f',
    })
}

export function alertaCarga(data) {
    let timerInterval
    Swal.fire({
        title: 'La página está Cargando',
        html: 'Apróximadamente en <b></b> milisegundos cargará la página.',
        timer: 15000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
            const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
                b.textContent = Swal.getTimerLeft()
            }, 100)
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
    }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log('Ya cargó la página')
        }
    })
}