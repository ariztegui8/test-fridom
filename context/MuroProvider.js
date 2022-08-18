
import { createContext, useState } from "react"

const MuroContext = createContext()

const MuroProvider = ({children}) => {

    const [formulario, setFormulario] = useState({
        nombre: '',
        comentario: ''
    })

    const handleChange = e =>{
        setFormulario({
          ...formulario,
          [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e =>{
        e.preventDefault();
        console.log(formulario);
    }

    return(
        <MuroContext.Provider
            value={{
                formulario,
                setFormulario,
                handleChange,
                handleSubmit
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