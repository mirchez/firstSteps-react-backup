import React from 'react'

export const EventosComponentes = () => {

    const hasDadoClick = (e) =>{
        alert("Has dado click al boton")
    }

  return (
    <div>
        <h1>Eventos React</h1>
        <button onClick={(e)=>{
            console.log("Hola soy un evento");
            console.log(e);
        }}>Haz Click</button>
    </div>
  )
}
