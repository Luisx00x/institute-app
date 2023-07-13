'use client'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchGrades, searchTeachers } from "./createCourseHandlers";
import CreateUsers from "@/components/createUsers/CreateUsers";
import s from './page.module.css';
import { inputHandler } from "../registersHandler";
import DisplaySelect from "@/components/displaySelect/DisplaySelect";

const attributes = [
  {name:"Nombre del curso" , attribute:"courseName"},
 /*  {name:"Hora de inicio", attribute: "init"},
  {name:"Hora de salida", attribute: "end"},
   */
]

const gradesSelect = {name:"Grado al cual pertencerá el curso: ", attribute: "gradeId"}
const sectionSelect = {name:"Seleccione la sección a sección del curso: ", attribute: "sectionId"}
const teacherSelect = {name:"Seleccione al profesor que dará el curso: ", attribute: "teacherId"}

//TODO NECESITO 2 COMPONENTES: - UNO PARA DESPLEGAR LAS OPCIONES DE LOS ATRIBUTOS QUE LOS USAN
//todo                         - UNO PARA MANEJAR LOS FORMATOS DE HORA

const CreateCourse = () => {

  const dispatch = useDispatch();
  
  const [inputs, setInputs] = useState({
    courseName: "",
    gradeId: null,
    sectionId: null,
    teacherId: null
  })

  useEffect( ( ) => {

    searchGrades(dispatch);
    searchTeachers(dispatch);

  },[]);

  const gradesInTheYear = useSelector(state => state.admin.allGrades);
  const allTeachers = useSelector(state => state.admin.Teachers)

  console.log(allTeachers);

  //* Primer display: Grado
  //* Segundo display: Sección
  //* Tercer display: Profesor

  return (
    <form className={s.form}>

      <h2>CreateCourse</h2>

      {gradesInTheYear.length ? 
      
      <>
        <h3 className={s.title}>Año en curso</h3> 
        
        <CreateUsers  
        attributes={attributes} 
        values={inputs} 
        set={setInputs} 
        handler={inputHandler} />
        
        <div className={s.container}>

          <DisplaySelect 
          title={gradesSelect} 
          choices={gradesInTheYear} 
          setValue={setInputs} 
          feature={'grade'} 
          />

          <DisplaySelect 
          title={sectionSelect} 
          choices={gradesInTheYear[inputs.gradeId] ? gradesInTheYear[inputs.gradeId].Sections : null} 
          setValue={setInputs}
          feature={'sectionName'}
          />

          <DisplaySelect 
          title={teacherSelect}
          choices={allTeachers}
          setValue={setInputs}
          feature={"name"}
          additionalFeat={"lastName"}
          />

        </div>
      
      </>

      :
      
      <h3>No ha creado un año escolar para el periodo actual</h3>}
          

    </form>
  )
}

export default CreateCourse;