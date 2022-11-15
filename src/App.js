// COMPONENTE NORMAL
/* function App()  {
     return(
         <h1>Este es el componente App</h1>
     )
}
export default App*/

//COMPONENTE FUNCION FLECHA 
const App = () =>{
    const bootcamp = [
        {
            id:1,
            name: 'PHP Bootcamp',
            average_rating:8
        },
        {
            id:2,
            name: 'Javascript Bootcamp',
            average_rating:10
        },
    ]
    return(
        <>
            <h1>Listado de Bootcamps</h1>
            <ul>
                {bootcamp.map((bootcamp, index) =>(
                    <li key={index}>{bootcamp.name}</li>
                ))}
            </ul>
        </>
    )
}
export default App