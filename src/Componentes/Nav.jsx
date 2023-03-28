import React from "react";
import { useState } from "react";
import "../Hojas_De_Estilo/Nav.css"
import { TbCat } from "react-icons/tb";

function Nav (props){

  const [abierto, setAbierto] = useState(false)
  
  return(
    <nav className={`encabezado ${props.fondo_nav}`}>
      <div className="contenedor_izquierda">
        <img className="imagen_logo" src={require("../Imagenes/Logo.png")}/>
        <h1 className={props.color_texto}>¡Hola! {props.setNombre}</h1>
        <button className={`boton ${props.color_texto}`} onClick={props.fnc_cambiar_nombe}><i className="bi bi-pencil"></i></button>
      </div>
      <div className="contenedor_derecha">
        <div className={`nav_items ${props.items_nav} ${abierto && "open"}`}>         
          <div className="contenedor_agregar">
            <TbCat className="logo_gato"/>
            <button className={`boton ${props.color_texto}`} onClick={props.fnc_agregar_mascota}><h1>Agregar mascota</h1></button>       
          </div>
          <div className={`contenedor_ayuda ${props.color_texto}`}>
            <h1>Ayuda</h1>
            <i className="bi bi-exclamation-lg logo_ayuda"></i>
          </div>
        </div>
        <button className={`boton ${props.color_texto}`} onClick={props.fnc_cambiar_color}><i className="bi bi-lightbulb-fill logo_color"></i></button>
        <div className={`nav_toggle ${abierto && "open"} `} onClick={ () => setAbierto(!abierto)} >
          <span className={props.color_toggle}></span>
          <span className={props.color_toggle}></span>
          <span className={props.color_toggle}></span>
        </div>
      </div>
    </nav>
  )
}

export default Nav