 
  //Generando Id random
  export const generarId = () => {
    const random = Math.random().toString(36).substr(2)
    const fechaId = Date.now().toString(36)
    return random + fechaId
}

 
 //Formateando fecha
 export const formatearFecha = (fecha) => {
    const fechaNueva = new Date(fecha)
    const opciones = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    }

    return fechaNueva.toLocaleDateString('es-ES' , opciones)
}


export const formatearHora = (hora) => {
    const horaNueva = new Date(hora)

    return horaNueva.toLocaleTimeString('es-ES')
}