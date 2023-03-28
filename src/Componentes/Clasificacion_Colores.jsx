import React from "react";
import "../Hojas_De_Estilo/Clasificacion_Colores.css"

function Clasificacion_Colores(props){
  return(
  
    <div className={`contenedor_colores ${props.fondo_clasificacion}`}>
      <h1 className='titulo_colores'>Clasificacion de colores</h1>
      <div className='divxd'>
        <h1 className='amarillo color_urgencia'>Amarillo</h1>
        <h1 className='texto'>Poca emergencia </h1>
      </div>
      <div className='divxd'>
        <h1 className='naranja color_urgencia'>Naranja</h1>
        <h1 className='texto'>Preocupante</h1>
      </div>
      <div className='divxd'>
        <h1 className='rojo color_urgencia'>Rojo</h1>
        <h1 className='texto'>Alarmante</h1>
      </div>
    </div>
  )
}

export default Clasificacion_Colores