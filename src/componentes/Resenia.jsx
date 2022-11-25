import { useState } from "react"
//IMPORTACION PARA ICONOS
//import { FaTimes } from "react-icons/fa";
const Resenia = ({resenia, deleteResenia}) =>{

    //Definir estado iniciales:
    const [rating, setRating] = useState(resenia.rating)
    const [comment, setComment] = useState(resenia.text)

    //cambiar el estado del rating
    const addNota = () =>{
        setRating((prev)=>{
            return prev + 1
        })
    }

    const restNota = () =>{
        setRating((prev)=>{
            return prev - 1
        })
    }

    return (
        <div  className="card">
            <div className="num-display">
                { rating }
            </div>

            <div  className="text-display">
                { comment}
            </div>

            <button onClick={()=> deleteResenia(resenia.id)} className="close">
                Eliminar
            </button>

            <button onClick = { restNota}>
                Disminuir Nota
            </button>
        </div>
    )
}
export default Resenia