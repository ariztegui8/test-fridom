import React from 'react'
import useMuro from '../hooks/useMuro'
import Comentario from './Comentario'

const ComentarioAnterior = () => {

    const {comentarios} = useMuro()

  return (
    <div>
         <h1 className="font-bold text-lg mb-3 text-gray-600 px-5">Comentarios Anteriores</h1>

        {comentarios.map(coment =>(
            <Comentario
            coment={coment}
            />
        ))}
         
    </div>
  )
}

export default ComentarioAnterior