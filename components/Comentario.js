import {formatearFecha, formatearHora} from '../helpers'

const Comentario = ({coment}) => {

    const {nombre, comentario, fecha, hora} = coment;

  return (
    <div className="border-2 px-5 py-3 shadow-md bg-gray-100 mb-5">
        <div className="flex items-end justify-between mb-6">
            <div>
                <h1 className="font-bold text-lg text-gray-600">{nombre}</h1>
            </div>

            <div className="flex font-medium text-gray-600 gap-x-2">
                <p>{formatearFecha(fecha)}</p>
                <p>-</p>
                <p>{formatearHora(hora)}</p>
            </div>
        </div>

        <div className="w-2/3">
            <p className="text-lg font-medium text-gray-500 break-words">{comentario}</p>
        </div>
 </div>
  )
}

export default Comentario