import React from "react";
import { useState } from "react";
import "../Hojas_De_Estilo/Nav.css"
import { TbCat } from "react-icons/tb";

function Nav (props){

  const [abierto, setAbierto] = useState(false)
  
  return(
    <nav className={`encabezado ${props.fondoNav}`}>
      <div className="contenedor_izquierda">
        <img className="imagen_logo" src={require("../Imagenes/Logo.png")}/>
        <h1 className={props.colorTexto}>¡Hola! {props.setNombre}</h1>
        <button className={`boton ${props.colorTexto}`} onClick={props.fnc_cambiar_nombe}><i className="bi bi-pencil"></i></button>
      </div>
      <div className="contenedor_derecha">
        <div className={`nav_items ${props.itemsNav} ${abierto && "open"}`}>         
          <div className={`contenedor_agregar ${props.colorHover}`}>
            <TbCat className="logo_gato"/>
            <button className={`boton ${props.colorTexto}`} onClick={props.fnc_agregar_mascota}><h1>Agregar mascota</h1></button>       
          </div>
          <div className={`contenedor_ayuda ${props.colorHover}`}>
            <h1>Ayuda</h1>
            <i className="bi bi-exclamation-lg logo_ayuda"></i>
          </div>
        </div>
        <button className={`boton ${props.colorTexto}`} onClick={props.fnc_cambiar_color}><i className="bi bi-lightbulb-fill logo_color"></i></button>
        <div className={`nav_toggle ${abierto && "open"} `} onClick={ () => setAbierto(!abierto)} >
          <span className={props.colorToggle}></span>
          <span className={props.colorToggle}></span>
          <span className={props.colorToggle}></span>
        </div>
      </div>
    </nav>
  )
}

export default Nav