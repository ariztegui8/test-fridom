

const Comentario = ({coment}) => {

    const {nombre, comentario} = coment;

  return (
    <div className="border-2 pt-1 pb-5 pl-2 shadow-md bg-gray-50 mb-5">
        <div className="flex items-end justify-between mb-6">
            <div>
                <h1 className="font-bold text-lg text-gray-600">{nombre}</h1>
            </div>

            <div className="flex font-medium text-gray-600 gap-x-4">
                <p>19-04-2022</p>
                <p>09:53</p>
            </div>
        </div>

        <div className="px-4 w-2/3">
            <p className="text-lg font-medium text-gray-500">{comentario}</p>
        </div>
 </div>
  )
}

export default Comentario