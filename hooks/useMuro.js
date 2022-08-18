import { useContext } from "react"
import MuroContext from "../context/MuroProvider"



const useMuro = () => {
  return useContext(MuroContext)
}

export default useMuro