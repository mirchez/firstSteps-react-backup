import React from 'react';
import PropTypes from "prop-types"


export const TercerComponente = (props) => {
    return (
      <div>
          <h1>Comunicacion entre Componentes</h1>
          <ul>
              <li>{props.nombre}</li>
              <li>{props.apellido}</li>
              <li>{props.ficha.estado}</li>
          </ul>
      </div>
  )
  };
  //validacion de datos
  TercerComponente.propTypes = {
      nombre: PropTypes.string.isRequired,
      apellido: PropTypes.string,
      ficha: PropTypes.object
  }
  
  TercerComponente.defaultProps =  {
      nombre : 'Juan',
      apellido : 'Miranda'
  }