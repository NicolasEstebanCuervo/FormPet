import React from "react";
import { useState } from "react";
import "../Hojas_De_Estilo/Nav.css";
import { TbCat } from "react-icons/tb";

function Nav(props) {
    const [abierto, setAbierto] = useState(false);

    return (
        <nav className={`encabezado ${props.fondoNav}`}>
            <div className="contenedor_izquierda">
                <img
                    className="imagen_logo"
                    src={require("../Imagenes/Logo.png")}
                />

                <h1 className={props.colorTexto}>
                    ¡Hola! {props.setNombre}{" "}
                    <button
                        className={`boton ${props.colorTexto}`}
                        onClick={props.fnc_cambiar_nombe}
                    >
                        <i className="bi bi-pencil icons"></i>
                    </button>
                </h1>
            </div>
            <div className="contenedor_derecha">
                <div
                    className={`nav_items ${props.itemsNav} ${
                        abierto && "open"
                    }`}
                >
                    <div className={`contenedor_agregar`}>
                        <TbCat className="logo_gato" />
                        <button
                            className={`boton ${props.colorTexto}`}
                            onClick={props.fnc_agregar_mascota}
                        >
                            <h1>Agregar mascota</h1>
                        </button>
                    </div>
                </div>
                <button
                    className={`boton ${props.colorTexto}`}
                    onClick={props.fnc_cambiar_color}
                >
                    <i className="bi bi-lightbulb-fill icons"></i>
                </button>
                <div
                    className={`nav_toggle ${abierto && "open"} `}
                    onClick={() => setAbierto(!abierto)}
                >
                    <span className={props.colorToggle}></span>
                    <span className={props.colorToggle}></span>
                    <span className={props.colorToggle}></span>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
