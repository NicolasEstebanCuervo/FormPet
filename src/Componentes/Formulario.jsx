import React from "react";
import {v4 as uuidv4} from "uuid";
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
          emojiMascota: valores.tipo,
          motivo: valores.motivo,
          urgencia: valores.urgencia,
        };

        props.fnc_onSubmit(tareaNueva);
        props.fnc_boton();
        setTouched({})
        resetForm();
      }}
    >
      {({errors, touched})=>(
        <Form className={`formulario ${props.formulario}`}> 
          <i className="bi bi-x exit_icon" onClick={props.hidden}></i>
          <h1 className="texto_principal">Formulario de citas</h1>
          <Field
            type="text"
            name="nombreDueño"
            placeHolder="Nombre completo"
            onChange={props.fnc_actualizar_nombre}  
            className={`input_texto ${props.inputNombre }`}
          />
          <div className="div_inputs_mascota">
            <Field
              type="text"
              name="nombreAnimal"
              placeholder="Nombre de la mascota"
              className={`input_texto ${props.colorInput}`}
            />
            <ErrorMessage name="nombreAnimal" component={()=>(
              <h1 className="error">{touched.nombreAnimal && errors.nombreAnimal}</h1>
            )}/>
          
            <Field
              type="number"
              name="edad"
              placeholder="Edad de la mascota (Meses)"
              className={`input_texto ${props.colorInput}`}
            />
            <ErrorMessage name="edad" component={()=>(
              <h1 className="error">{touched.edad && errors.edad}</h1>
            )}/>

            <Field
              type="text"
              name="tipo"
              placeholder="Que tipo de mascota es"
              className={`input_texto ${props.colorInput}`}
            />
            <ErrorMessage name="tipo" component={()=>(
              <h1 className="error">{touched.tipo && errors.tipo}</h1>
            )}/>

            <Field
              type="number"
              name="peso"
              placeholder="Cuanto pesa su mascota (Kilos)"
              className={`input_texto ${props.colorInput}`}
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
          <input type="submit" className={props.botonEnviar} value="Enviar" />
        </Form>
      )}
    </Formik>
  )
}
export default Formulario   
