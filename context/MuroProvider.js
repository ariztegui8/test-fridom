
import { createContext, useState } from "react"

const MuroContext = createContext()

const MuroProvider = ({children}) => {

    const [formulario, setFormulario] = useState({
        nombre: '',
        comentario: ''
    })
    const [comentarios, setComentarios] = useState([])
    const [error, setError] = useState(false)

    const {nombre, comentario} = formulario

    const handleChange = e =>{
        setFormulario({
          ...formulario,
          [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e =>{
        e.preventDefault();
        
        if([nombre, comentario].includes('')){
            setError(true)
            return;
        }

        setError(false)

        setComentarios([
            formulario, ...comentarios
        ]);
        
        setFormulario({
            nombre: '',
            comentario: ''
        })

       
    }

    return(
        <MuroContext.Provider
            value={{
                nombre,
                comentario,
                handleChange,
                handleSubmit,
                error,
                comentarios
            }}
        >
            {children}
        </MuroContext.Provider>
    )
}

export{
    MuroProvider
}

export default MuroContext