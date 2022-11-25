import Resenia from "./Resenia";

const ReseniaList = ({listaresenias,deleteResenia}) =>{

    //CONDICIONAL EN CASO DE QUE NO LLEGUE EL ARREGLO
    if (!listaresenias || listaresenias.length == 0){
        return <p>No hay reseñas</p>
    }else{
        return(
            <div className= "feedback-list">
                {/*Recorrar la lsitaresenias */}
                {listaresenias.map((resenia)=>
                        (
                        <Resenia 
                        deleteResenia={deleteResenia}
                        key ={resenia.id} resenia = {resenia} />
                        )
                    )
                }
            </div>
        )
    }
}
export default ReseniaList