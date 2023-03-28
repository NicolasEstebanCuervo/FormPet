import React from "react";
import {v4 as uuidv4} from "uuid";
import { useState } from "react";
import "../Hojas_De_Estilo/Formulario.css";
import { Formik , Form, Field, ErrorMessage} from "formik";


function Formulario (props){

  return(
    <Formik
      initialValues={{
        nombreAnimal:"",
        edad:"",
        tipo:"",
        peso:"",
        motivo:"",
        urgencia:"",
      }}

      validate={(valores)=>{
        let errores = {};

        if(!valores.nombreAnimal){
          errores.nombreAnimal=("Por favor ingrese el nombre de la mascota")
        }else if (!/^[A-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombreAnimal)){
          errores.nombreAnimal=("Por favor ingrese un valor valido")
        }else if (!/[A-Z]/){
          errores.nombreAnimal=("La primera letra en mayuscula")
        }

        if(!valores.edad){
          errores.edad=("Por favor ingrese la edad")
        }
        
        if(!valores.tipo){
          errores.tipo=("Por favor ingrese la edad")
        }else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.tipo)){
          errores.tipo=("Por favor ingrese un valor valido")
        }
        
        if(!valores.peso){
          errores.peso=("Por favor ingrese el peso")
        }
        

        return errores
      }}

      onSubmit={(valores, { resetForm, setTouched  }) => {
         const tareaNueva  = {
          id: uuidv4(),
          nombre: valores.nombreAnimal,
          edad: valores.edad,
          tipo: valores.tipo,
          peso: valores.peso,
          emoji: valores.emoji,
          motivo: valores.motivo,
          urgencia: valores.urgencia,
        };
        props.onSubmit(tareaNueva);
      
        props.funciones_boton();
        setTouched({})
        resetForm();
      }}
   
    >
      {({errors, touched})=>(
            <Form className={`formulario ${props.form}`}> 
            <h1 className="texto_principal">Formulario de citas</h1>
            <Field
              type="text"
              name="nombreDueño"
              className={`input_texto ${props.input_nombre }`}
              placeHolder="Nombre completo"
              onChange={props.actualizar_nombre}
              
            />


            <div className="div_inputs_mascota">
              <Field
                type="text"
                name="nombreAnimal"
                className={`input_texto ${props.color_input}`}
                placeholder="Nombre de la mascota"
              />

              <ErrorMessage name="nombreAnimal" component={()=>(
                <h1 className="error">{touched.nombreAnimal && errors.nombreAnimal}</h1>
              )}/>
           
              <Field
                type="number"
                name="edad"
                className={`input_texto ${props.color_input}`}
                placeholder="Edad de la mascota (Meses)"
              />

              <ErrorMessage name="edad" component={()=>(
                <h1 className="error">{touched.edad && errors.edad}</h1>
              )}/>

              <Field
                type="text"
                name="tipo"
                className={`input_texto ${props.color_input}`}
                placeholder="Que tipo de mascota es"
              />

              <ErrorMessage name="tipo" component={()=>(
                <h1 className="error">{touched.tipo && errors.tipo}</h1>
              )}/>

              <Field
                type="number"
                name="peso"
                className={`input_texto ${props.color_input}`}
                placeholder="Cuanto pesa su mascota (Kilos)"
              />
              <ErrorMessage name="peso" component={()=>(
                <h1 className="error">{touched.peso && errors.peso}</h1>  
              )}/>   

                    
              <div className="div_input_check">
                <h1 className="texto_input_check">Cual es el motivo de su consulta</h1>
                <div>
                  <Field  className="input_check" id="opcion1" type="radio" name="motivo" value="Chequeo general" />
                  <label for="opcion1">Chequeo general</label>
                </div>
                <div>
                  <Field  className="input_check" id="opcion2" type="radio" name="motivo" value="Cita programada" />
                  <label for="opcion2">Cita programada</label>
                </div>
                <div>
                  <Field  className="input_check" id="opcion3" type="radio" name="motivo" value="Cirugia" />
                  <label for="opcion3">Cirugia</label>
                </div>
                <div>
                  <Field  className="input_check" id="opcion4" type="radio" name="motivo" value="Otro" />
                  <label for="opcion4">Otro</label>
                </div>
              </div>
            </div>
            <input type="submit" className={props.boton_enviar} value="Enviar" />
          </Form>
      )}


    </Formik>
  )
}
export default Formulario   
