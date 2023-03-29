import React from "react";
import "../Hojas_De_Estilo/Tarjeta.css"
import{ Emoji, EmojiStyle } from 'emoji-picker-react';
import { VscClose } from "react-icons/vsc";


function Tarjeta(props){

  return(
    
    <div className={`contenedor_principal ${props.fondoTarjeta}`}>
      <h1 className="titulo_tarjeta">Informacion de: {props.nombre} </h1>
      <VscClose className="tarjeta_icono" onClick={()=> props.fnc_eliminarTarjeta(props.id)}/>
      <div className="tarjeta_contenedor">
        <div className="emoji_mascota">
          <Emoji unified={props.emojiMascota} size={60} emojiStyle="twitter" />
        </div>
          <div className="tarjeta_texto">
            <h1>
              Edad: {props.edad} Meses
            </h1>
            <h1>
              Tipo: {props.tipo}
            </h1>
            <h1>
              Peso: {props.peso} Kg
            </h1>
            <h1>
              Motivo: {props.motivo}
            </h1>
          </div>
          <div className="tarjeta_contenedor_iconos">
            <i className={`bi bi-alarm icono_reloj ${props.cambiar}`}></i>   
            <i className={`bi bi-exclamation-triangle icono_alert ${props.cambiar}`}></i>   
          </div>
      </div>
    </div>
  )
}

export default Tarjeta