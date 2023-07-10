'use client'
import CreateUsers from '@/components/createUsers/CreateUsers';
import s from './page.module.css';
import { inputHandler, submitHandler } from '../registersHandler.js';
import { useState } from 'react';
import { TEACHER } from '@/const';

const attributes = [
  {name: "Nombres del profesor", attribute: "name"},
  {name: "Apellidos del profesor", attribute: "lastName"},
  {name: "Email", attribute: "email"}
]

const RegisterAdmin = () => {

  const [inputs, setInputs] = useState({
    name: "",
    lastName: "",
    email: ""
  });

  return (
    <form className={s.form}>
      <div className={s.container}>

        <CreateUsers attributes={attributes} title={"Registro de Profesor"} set={setInputs} handler={inputHandler}/>

      </div>

      <input 
        className={s.submit}
        onClick={(e) => submitHandler(e, inputs, TEACHER)}
        type="submit" value="Registrar" 
      />
    </form>
  )
}

export default RegisterAdmin;