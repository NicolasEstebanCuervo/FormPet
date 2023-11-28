import React from 'react';
import { useState } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Nav from "./Componentes/Nav";
import Formulario from "./Componentes/Formulario";
import Tarjeta from "./Componentes/Tarjeta"
import Clasificacion_Colores from './Componentes/Clasificacion_Colores';

function App() {

  const [mensaje, setMensaje] = useState('');
  const [nombre, setNombre] = useState('');
  const [hidden, setHidden] = useState(false);
  const [color, setcolor] = useState(false);
  const [mostarInput, setMostarInput] = useState(false);
  const [hiddenNombre, setHiddenNombre] = useState(false);
  const [tareas,setTarea] = useState([]);
  const numeroUrgencia = Math.floor(Math.random() * 3) + 1;

  const agregarTarea = (tarea)=>{
    tarea.nombre = tarea.nombre

    if(numeroUrgencia == 1){
      tarea.urgencia=("fondo_amarillo")
    }
    else if(numeroUrgencia == 2){
      tarea.urgencia=("fondo_naranja")
    }
    else if(numeroUrgencia == 3){
      tarea.urgencia=("fondo_rojo")
    }

    if(tarea.tipo == "Gato" ||
        tarea.tipo == "Gata"  ||
        tarea.tipo == "gato"  ||
        tarea.tipo == "gato") 
    {
      tarea.emojiMascota=("1f63a")
    }
    else if(tarea.tipo == "Perro" ||
            tarea.tipo == "Perra"  ||
            tarea.tipo == "perro"  ||
            tarea.tipo == "perra") 
    {
      tarea.emojiMascota=("1f436")
    }
    else if(tarea.tipo == "Hamster" ||
            tarea.tipo == "hamster") 
    {
      tarea.emojiMascota=("1f439")
    }
    else if(tarea.tipo == "Conejo" ||
            tarea.tipo == "conejo") 
    {
      tarea.emojiMascota=("1f99c")
    }
    else{
      tarea.emojiMascota=("1f332")
    }

    const tareasActualizada = [tarea,...tareas]
    setTarea(tareasActualizada)
    
  }

  const agregarMascota = ()=>{
    setHidden(false)
  }

  const eliminarTarea = (id) => {
    const tareasActualizada = tareas.filter(tarea => tarea.id !== id)
    setTarea(tareasActualizada)
  }
  
  const agregarhidden_cambiarNombre = ()=>{
    setHidden(true)
    setNombre(mensaje)
    setHiddenNombre(true) 
  }

  const cambiarColor = ()=>{
    setcolor(!color)
  }

  const actualizar_nombre = (event) => {
    setMensaje(event.target.value);
  };

  const actualizar_input_nombre = (event) => {
    setNombre(event.target.value);
  };

  const cambiarNombre = ()=>{
    setMostarInput(!mostarInput);
  }

  const input_enter = (e)=>{
    if (e.keyCode === 13) {
      setMostarInput(false)
    }
  }

  return (
    <div className={color ? "App texto_blanco modo_oscuro" :"App texto_gris modo_claro"}>
      <div className={!hidden ? "container_center" : "container"}>
        <Nav
          fondoNav={!hidden ? "hidden" : color ? "modo_oscuro_2 texto_blanco" :" modo_claro_2 texto_gris"}        
          colorTexto={color ? "texto_blanco" : "texto_gris"}
          colorToggle={color ? "modo_claro_toggle" : "modo_oscuro_toggle"}
          itemsNav={color ? "modo_oscuro_2_items" : "modo_claro_2_items"}
          colorHover={color ? "hover_oscuro" : "hover_claro"}
          
          setNombre={mostarInput ? (
            <input 
              type="text" 
              value={nombre}  
              className={color ? "input_oscuro focus_oscuro input_nombre" : "input_claro focus_claro input_nombre"}
              onKeyUp={input_enter} 
              onChange={actualizar_input_nombre} 
              autoFocus
              select
            />
          ) : (
           <h1 className="h1_cambio_nombre">{nombre}</h1>
          )}
          
          fnc_cambiar_nombe={cambiarNombre}
          fnc_agregar_mascota={agregarMascota}
          fnc_cambiar_color={cambiarColor}
        />
        <Formulario 
          hidden={()=>setHidden(true)}
          formulario={hidden ? "hidden" : color ? "modo_oscuro_2" : "modo_claro_2"}
          inputNombre={hiddenNombre ? "hidden" : color ? "input_focus_oscuro texto_blanco" : "input_focus_claro"}
          colorInput={color ? "input_focus_oscuro texto_blanco" : "input_focus_claro"}
          botonEnviar={color ? "boton_enviar modo_oscuro_boton" : "boton_enviar modo_claro_boton"}
          
          fnc_actualizar_nombre={actualizar_nombre}
          fnc_boton={agregarhidden_cambiarNombre} 
          fnc_onSubmit={agregarTarea} 
        />

        <div className="tareas-lista-contenedor">   
         
          <Clasificacion_Colores 
            fondoClasificacion = {!hidden ? "hidden" : color ? " modo_oscuro_2" : " modo_claro_2"}
          /> 
         
          {
            tareas.map((tarea) =>
              <Tarjeta
              fondoTarjeta = {!hidden ? "hidden" : color ? "modo_oscuro_2 texto_blanco" :" modo_claro_2 texto_gris"}

              key={tarea.id}
              id={tarea.id}
              nombre = {tarea.nombre}
              edad = {tarea.edad}
              tipo = {tarea.tipo}
              peso = {tarea.peso}
              motivo={tarea.motivo}
              cambiar={tarea.urgencia}
              emojiMascota = {tarea.emojiMascota}
              fnc_eliminarTarjeta = {eliminarTarea}
              />
            )
          }
        </div>
      </div>
    </div>
  );
}

export default App;
