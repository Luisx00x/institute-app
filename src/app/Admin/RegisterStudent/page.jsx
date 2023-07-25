'use client'
import CreateUsers from "@/components/createUsers/CreateUsers";
import s from './page.module.css';
import { useState } from "react";
import { inputHandler, submitHandler } from "../registersHandler";
import { STUDENT } from "@/const";
import { useDispatch, useSelector } from "react-redux";
import ModalMsg from "@/components/Modals/ModalMsg/ModalMsg";
import { studentAttributes, fatherAttributes, motherAttributes } from "@/const";

const RegisterStudent = () => {

  const dispatch = useDispatch();
  const modal = useSelector(state => state.primarySlice.modal);

  const [inputs, setInputs] = useState({
    studentDNI: "",
    fatherLastName: "",
    motherLastName: "",
    names: "",
    birthdate: "",
    religion: "",
    gender: "",
    procedense: "",
    grade: "",
    level: "",

    fatherDNI: "",
    fatherLastNames: "",
    fatherName: "",
    fatherAddress: "",
    fatherPhone: "",
    fatherCivil: "",
    fatherCelphone: "",
    fatherEmail: "",
    fatherWorkPlace: "",
    fatherOccup: "",
    fatherRPMorRPC: "",
    
    motherDNI: "",
    motherLastNames: "",
    motherName: "",
    motherAddress: "",
    motherPhone: "",
    motherCivil: "",
    motherCelphone: "",
    motherEmail: "",
    motherWorkPlace: "",
    motherOccup: "",
    motherRPMorRPC: "",

    representative: undefined,
  });

  return (

    <>
    {console.log(inputs)}
      {modal.isActive ? <ModalMsg {...modal} /> : null}  
  
      <form className={s.form}>
          <p>

            Cuando se matricula al alumno con la información suministrada se matricula al alumno, se crea su usuario con una contraseña aleatoria, se crea el usuario del apoderado seleccionado y se enviará al correo que suministre
            el apoderado su nombre de usuario, su contraseña aleatoria y los del alumno matriculado

          </p>
        <div className={s.container}>
          
          <div className={s.formContainer}>

            <CreateUsers attributes={studentAttributes} title={"Datos del alumno"} set={setInputs} handler={inputHandler} values={inputs}/>
            
            <div className={s.buttonContainer}>
              <button className={s.checkButton}
              onClick={(e) => {e.preventDefault()}}
              >Comprobar alumno</button>
            </div>

            <CreateUsers attributes={fatherAttributes} title={"Datos del Padre"} set={setInputs} handler={inputHandler} values={inputs} />

            <CreateUsers attributes={motherAttributes} title={"Datos de la Madre"} set={setInputs} handler={inputHandler} values={inputs} />

            <div className={s.representativeCont}>
                <label>Apoderado: </label>
                <select onChange={(e) => inputHandler(e, setInputs)} name="representative" id="repSelect">
                  <option value="">-- Seleccione un representante --</option>
                  <option value="1">Padre</option>
                  <option value="2">Madre</option>

                </select>
              </div>

          </div>
          
        </div>

        <button type="submit" className={s.submit}
          onClick={(e) => submitHandler(e, inputs, STUDENT, dispatch)}
        >Matricular</button>
      </form>
    </>

  )
}

export default RegisterStudent;