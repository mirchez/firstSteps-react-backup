mport react, {Fragment} from 'react';

//funcion del componente

const MiComponente = () =>{

    const nombre = 'Miguel';
    const web = 'miguelweb.com'
    
    return (
        <div className='componente'>
        <h2>Componente Creado</h2>
        <p>Hola Este es mi primer componente</p>
        <h3>Datos del usuario</h3>
        <ul>
            <li>Nombre: {nombre}</li>
            <li>Web: {web}</li>
        </ul>
        </div>

    );
}

//export 
export default MiComponente;