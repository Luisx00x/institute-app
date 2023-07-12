'use client'
import CreateUsers from "@/components/createUsers/CreateUsers";
import s from './page.module.css';
import { useState } from "react";
import { inputHandler, submitHandler } from "../registersHandler";
import { STUDENT } from "@/const";

const attributes = [
  { name: "Nombres del alumno", attribute: "name" },
  { name: "Apellido del alumno", attribute: "lastName" },
  { name: "Nombres de la Madre", attribute: "motherName"},
  { name: "Apellidos de la Madre", attribute: "motherLastName"},
  { name: "Nombres del Padre", attribute: "fatherName"},
  { name: "Apellidos del Padre", attribute: "fatherLastName"},
]

const RegisterStudent = () => {

  const [inputs, setInputs] = useState({
    name: "",
    lastName: "",
    motherName: "",
    motherLastName: "",
    fatherName: "",
    fatherLastName: "",
    email: "",
    representative: undefined,
  });

  return (
    <form className={s.form}>
      <div className={s.container}>
        
        <CreateUsers attributes={attributes} title={"Registro de nuevo Alumno"} set={setInputs} handler={inputHandler} values={inputs}>
          
          <div>
            <label>Apoderado</label>
            <select onChange={(e) => inputHandler(e, setInputs)} name="representative" id="repSelect">
              <option value="">-- Seleccione un representante --</option>
              <option value="1">Padre</option>
              <option value="2">Madre</option>

            </select>
          </div>
          <div>
            <label htmlFor="emailRepresentative">Email del Apoderado</label>
            <input type="text" name="email" id="emailRepresentative"
            onChange={(e) => inputHandler(e, setInputs) }
            />
          </div>

        </CreateUsers>
        
      </div>

      <button type="submit" className={s.submit}
        onClick={(e) => submitHandler(e, inputs, STUDENT)}
      >Matricular</button>
    </form>
  )
}

export default RegisterStudent;