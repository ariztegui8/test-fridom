import React from 'react'
import ComentarioAnterior from '../components/ComentarioAnterior';
import Error from '../components/Error';
import useMuro from '../hooks/useMuro'

const Home = () => {

  const {nombre, comentario,  handleChange, handleSubmit, error} = useMuro();

  return (
    <div className="container mx-auto mt-10 w-1/2">

      <form
        className="border-2 p-5 shadow-md bg-gray-100 mb-8"
        onSubmit={handleSubmit}
      >

        <h1 className="font-bold text-lg mb-3 border-b-2 border-gray-300 text-gray-600">Ingresa Tu Comentario</h1>

        <div className="mb-2">
          <input 
            type='text'
            placeholder='Nombre del autor'
            className="outline-none border-2 w-1/2 p-1 shadow-md"
            name="nombre"
            value={nombre}
            onChange={handleChange}
          />
        </div>

        <div className="mb-2">
          <textarea
            placeholder='Descripcion...'
            className="outline-none border-2 w-full p-1 shadow-md"
            name="comentario"
            value={comentario}
            onChange={handleChange}
          ></textarea>
        </div>

        {error && <Error><p>Todos los campos son obligatorios</p></Error> }

        <div className="w-full text-end">
          <input 
            type="submit"
            value="Enviar"
            className="font-semibold bg-gray-300 py-1 px-4 hover:bg-gray-400 cursor-pointer transition-all text-gray-600"
          />
        </div>

      </form>

      <ComentarioAnterior />

    </div>
  )
}

export default Home