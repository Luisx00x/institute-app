'use client'
import CreateUsers from "@/components/createUsers/CreateUsers";
import s from './page.module.css';
import { useState } from "react";
import { inputHandler, submitHandler } from "../registersHandler";
import { STUDENT } from "@/const";
import { useDispatch, useSelector } from "react-redux";
import ModalMsg from "@/components/Modals/ModalMsg/ModalMsg";
import { studentAttributes, fatherAttributes, motherAttributes } from "@/const";
import { submitComprobation } from "./registerStudentHandlers";

const RegisterStudent = () => {

  const dispatch = useDispatch();
  const modal = useSelector(state => state.primarySlice.modal);

  const [validation, setValidation] = useState({
    isValidated: false,
    fatherDNI: "",
    motherDNI: "",
    studentDNI: ""
  });

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

      {modal.isActive ? <ModalMsg {...modal} /> : null}  
  
      <form className={s.form}>
          <p>

            Cuando se matricula al alumno con la información suministrada se matricula al alumno, se crea su usuario con una contraseña aleatoria, se crea el usuario del apoderado seleccionado y se enviará al correo que suministre
            el apoderado su nombre de usuario, su contraseña aleatoria y los del alumno matriculado

          </p>
        <div className={s.container}>
          
          <div className={s.formContainer}>

            {
              !validation.isValidated
              ?
              <div className={s.buttonContainer}>
                
                <label>DNI del alumno: </label>
                <input name="studentDNI" type="text" value={validation.studentDNI} onChange={(e) => inputHandler(e, setValidation)} />

                <label>DNI del Padre: </label>
                <input name="fatherDNI" type="text" value={validation.fatherDNI} onChange={(e) => inputHandler(e, setValidation)} />
                
                <label>DNI de la Madre: </label>
                <input name="motherDNI" type="text" value={validation.motherDNI} onChange={(e) => inputHandler(e, setValidation)} />

                <button className={s.checkButton}
                onClick={(e) => {

                  submitComprobation(e, validation.studentDNI, validation.motherDNI, validation.fatherDNI, setValidation, setInputs);

                }}
                >Comprobar alumno</button>

              </div>
              :
              null
            }

            {
              validation.isValidated
              ?
              <div>

                <CreateUsers attributes={studentAttributes} title={"Datos del alumno"} set={setInputs} handler={inputHandler} values={inputs}/>
                
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
                <button type="submit" className={s.submit}
                  onClick={(e) => submitHandler(e, inputs, STUDENT, dispatch)}
                >Matricular</button>

              </div>
              :
              null
            }

          </div>
          
        </div>

      </form>
    </>

  )
}

export default RegisterStudent;