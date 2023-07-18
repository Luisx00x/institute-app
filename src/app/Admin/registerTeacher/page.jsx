'use client'
import CreateUsers from '@/components/createUsers/CreateUsers';
import s from './page.module.css';
import { inputHandler, submitHandler } from '../registersHandler.js';
import { useState } from 'react';
import { TEACHER } from '@/const';
import { useDispatch, useSelector } from 'react-redux';
import ModalMsg from '@/components/Modals/ModalMsg/ModalMsg';

const attributes = [
  {name: "Nombres del profesor", attribute: "name"},
  {name: "Apellidos del profesor", attribute: "lastName"},
  {name: "Email", attribute: "email"}
]

const RegisterAdmin = () => {
  
  const dispatch = useDispatch();

  const modal = useSelector(state => state.primarySlice.modal);

  const [inputs, setInputs] = useState({
    name: "",
    lastName: "",
    email: ""
  });

  return (

    <>
      {modal.isActive ? <ModalMsg {...modal} /> : null}
      <form className={s.form}>

      <p>
        Al igual que con el alumno, al registrar al prefesor se mandará un mail con el modulo nodemailer con su 
        usuario y contraseña
      </p>

        <div className={s.container}>

          <CreateUsers attributes={attributes} title={"Registro de Profesor"} set={setInputs} values={inputs} handler={inputHandler}/>

        </div>

        <input 
          className={s.submit}
          onClick={(e) => submitHandler(e, inputs, TEACHER, dispatch)}
          type="submit" value="Registrar" 
        />
      </form>
    
    </>
    
  )
}

export default RegisterAdmin;