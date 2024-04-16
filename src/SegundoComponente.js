import React from 'react'

export const SegundoComponente = () => {

const libros = ["Harry Potter", "Juego de Tronos", "Clean Code"];


    return (
        <div className='segundo-componente'>

            <h1>Listado de Libros</h1>
            {libros.length > 0 ? 
            (<ul>{
                    libros.map((libro,indice) => {
                        return <li key={indice}>{libro}</li>;
                    })
                }   
            </ul>)
            :(<p>No hay libros</p>)
        }
        </div>
    )
}
