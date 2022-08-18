
import { createContext, useState } from "react"
import {generarId} from '../helpers'

const MuroContext = createContext()

const MuroProvider = ({children}) => {

    const [formulario, setFormulario] = useState({
        nombre: '',
        comentario: '',
    })
    const [comentarios, setComentarios] = useState([])
    const [error, setError] = useState(false)

    const {nombre, comentario, fecha, hora} = formulario

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

        formulario.id = generarId();
        formulario.fecha = Date.now();
        formulario.hora = new Date()

        setComentarios([
            formulario, ...comentarios
        ]);

        
        setFormulario({
            nombre: '',
            comentario: '',
        })
       
    }

    return(
        <MuroContext.Provider
            value={{
                
                handleChange,
                handleSubmit,
                error,
                comentarios,
                nombre,
                comentario,
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