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
  const [texto, setTexto] = useState('');
  const [hidden, setHidden] = useState(false);
  const [color, setcolor] = useState(false);
  const [mostarInput, setMostarInput] = useState(false);
  const [hiddenNombre, setHiddenNombre] = useState(false);
  const [fondo_emoji, setFondo_emoji] = useState("");

  const numero = Math.floor(Math.random() * 3) + 1;


  const actualizarNombre = (event) => {
    setMensaje(event.target.value);
  };

  const agregarhidden_cambiarNombre = ()=>{
    setHidden(true)
    setTexto(mensaje)
    setHiddenNombre(true) 
  }

  const cambiarColor = ()=>{
    setcolor(!color)
  }

  const cambiarNombre = ()=>{
    setMostarInput(!mostarInput);
  }

  const inputEnter = (e)=>{
    if (e.keyCode === 13) {
      setMostarInput(false)
    }
  }

  const actualizarInputNombre = (event) => {
    setTexto(event.target.value);
  };

  const agregarMascota = ()=>{
    setHidden(false)
  }

  const [tareas,setTarea] = useState([]);



  const agregarTarea = (tarea)=>{
    tarea.nombre = tarea.nombre



    if(numero == 1){
      tarea.urgencia=("fondo-azul")
    }
    else if(numero == 2){
      tarea.urgencia=("fondo-naranja")
    }
    else if(numero == 3){
      tarea.urgencia=("fondo-rojo")
    }


    switch (tarea.tipo) {
      case "Gato" :
      case "Gata" :
      case "gato" :
      case "gata" :
        tarea.emoji=("1f63a")
        setFondo_emoji("fondo_emoji")
        break;

      case "Perro" :
      case "Perra" :
      case "perro" :
      case "perra" :
        tarea.emoji=("1f436")  
        setFondo_emoji("fondo_emoji")
        break;

      case "Hamster":
      case "hamster":    
      tarea.emoji=("1f439")
        setFondo_emoji("fondo_emoji")
        break;	

      case "Pez":
      case "pez":  
      tarea.emoji=("1f420")
        setFondo_emoji("fondo_emoji")
        break;	
      
      case "Pajaro":
      case "Ave":
      case "pajaro":
      case "ave":
        tarea.emoji=("1f99c")
        setFondo_emoji("fondo_emoji")
        break;

      case "Conejo":
      case "Coneja":
      case "conejo":
      case "coneja":
        tarea.emoji=("1f99c")
        setFondo_emoji("fondo_emoji")
        break;

      default:
        tarea.emoji=('1f332');
        setFondo_emoji("fondo_emoji")    
      }
      const tareasActualizada = [tarea,...tareas]
      setTarea(tareasActualizada)
    
  }

  const eliminarTarea = (id) => {
    const tareasActualizada = tareas.filter(tarea => tarea.id !== id)
    setTarea(tareasActualizada)
  }



  return (
    <div className={color ? "App texto_blanco modo_oscuro" :"App texto_gris modo_claro"}>
      <div className='container'>
        <Nav
          fondo_nav={!hidden ? "hidden" : color ? "modo_oscuro_2 texto_blanco" :" modo_claro_2 texto_gris"}        
          color_texto={color ? "texto_blanco" : "texto_gris"}
          color_toggle={color ? "modo_claro_toggle" : "modo_oscuro_toggle"}
          items_nav={color ? "modo_oscuro_2_items" : "modo_claro_2_items"}
          
          setNombre={mostarInput ? (
            <input 
              type="text" 
              value={texto}  
              className={color ? "input_oscuro focus_oscuro input_nombre" : "input_claro focus_claro input_nombre"}
              onKeyUp={inputEnter} 
              onChange={actualizarInputNombre} 
              autoFocus
              select
            />
          ) : (
           <h1 className="h1_cambio_nombre">{texto}</h1>
          )}
          
          fnc_cambiar_nombe={cambiarNombre}
          fnc_agregar_mascota={agregarMascota}
          fnc_cambiar_color={cambiarColor}
        />
        <Formulario 
          form={hidden ? "hidden" : color ? "modo_oscuro_2" : "modo_claro_2"}
          input_nombre={hiddenNombre ? "hidden" : color ? "input_focus_oscuro texto_blanco" : "input_focus_claro"}
          actualizar_nombre={actualizarNombre}
          color_input={color ? "input_focus_oscuro texto_blanco" : "input_focus_claro"}
          boton_enviar={color ? "boton_enviar modo_oscuro_boton" : "boton_enviar modo_claro_boton"}
          funciones_boton={agregarhidden_cambiarNombre} 

          onSubmit={agregarTarea} 
        />

        <div className="tareas-lista-contenedor">   
         
        <Clasificacion_Colores 
          fondo_clasificacion = {!hidden ? "hidden" : color ? " modo_oscuro_2" : " modo_claro_2"}
        /> 
         
          {
            tareas.map((tarea) =>
              <Tarjeta
              key={tarea.id}
              id={tarea.id}
              nombre = {tarea.nombre}
              edad = {tarea.edad}
              tipo = {tarea.tipo}
              peso = {tarea.peso}
              eliminarTarea = {eliminarTarea}
              motivo={tarea.motivo}

              cambiar={tarea.urgencia}
              
  
              emoji = {tarea.emoji}
              fondo_emoji = {fondo_emoji}
              fondo_tarjeta = {!hidden ? "hidden" : color ? "modo_oscuro_2 texto_blanco" :" modo_claro_2 texto_gris"}
              />
            )
          }
        </div>
      </div>
    </div>
  );
}

export default App;
