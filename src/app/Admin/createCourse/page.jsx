'use client'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dayHandler, searchGrades, searchTeachers, setDay, submitHandler } from "./createCourseHandlers";
import CreateUsers from "@/components/createUsers/CreateUsers";
import s from './page.module.css';
import { inputHandler } from "../registersHandler";
import DisplaySelect from "@/components/displaySelect/DisplaySelect";
import TimerSet from "@/components/timerSet/TimerSet";
import { DAYS } from "@/const";

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
    teacherId: null,
    days: []
  })

  useEffect( ( ) => {

    searchGrades(dispatch);
    searchTeachers(dispatch);

  },[]);

  const gradesInTheYear = useSelector(state => state.admin.allGrades);
  const allTeachers = useSelector(state => state.admin.Teachers);
  let setGrades;

  if(inputs.gradeId){
    setGrades = gradesInTheYear.find( grade => grade.Sections[0].GradeId === parseInt(inputs.gradeId))  
    }

  console.log(setGrades);
  
  //* Primer display: Grado
  //* Segundo display: Sección
  //* Tercer display: Profesor
  
  return (
    
    <form className={s.form}>
      <h2>CreateCourse</h2>

      {console.log(inputs)}

      {gradesInTheYear.length ? 
      
      <>
        <h3 className={s.title}>Año en curso</h3> 
        
        
        <div className={s.container}>

          <div className={s.props}>
            <CreateUsers  
            attributes={attributes} 
            values={inputs} 
            set={setInputs} 
            handler={inputHandler} />
          </div>

          <div className={s.props}>
            <DisplaySelect 
            title={gradesSelect} 
            choices={gradesInTheYear} 
            setValue={setInputs} 
            feature={'grade'} 
            />
          </div>

          <div className={s.props}>
            <DisplaySelect 
            title={sectionSelect} 
            choices={setGrades ? setGrades.Sections : null} 
            setValue={setInputs}
            feature={'sectionName'}
            />
          </div>
          
          <div className={s.props}>
            <DisplaySelect 
            title={teacherSelect}
            choices={allTeachers}
            setValue={setInputs}
            feature={"name"}
            additionalFeat={"lastName"}
            />
          </div>

          <h3>Ingresar Días y Hora para el Curso</h3>

          {

            inputs.days.map( (day, index) => {

              return (
          
                  <div className={s.newDay}>

                  <label htmlFor={`day${index}`}>Ingrese un día</label>
                  <select 
                  name={`day${index}`} 
                  id={`day${index}`}
                  onClick={(e) => dayHandler(e, setInputs, index)}
                  >
                      <option value="">Seleccione un dia para el curso</option>
                    {
                      DAYS.map( day => {
                        return <option value={day}>{day}</option>
                      })
                    }
                  </select>

                  <div className={s.props}>
                    <p>Hora de entrada</p>
                    <TimerSet set={setInputs} inputName={"init"} index={index} />
                  </div>

                  <div className={s.props}>
                    <p>Hora de salida</p>
                    <TimerSet set={setInputs} inputName={"end"} index={index} />
                  </div>

                  </div>
                
              )

            })

          }

          <button className={s.submit} type="button" onClick={(e) => setDay(setInputs)}>Agregar un dia al curso</button>

          <button className={s.submit} type="button" onClick={(e) => submitHandler(e, inputs)}>Crear el curso</button>

        </div>
      
      </>

      :
      
      <h3>No ha creado un año escolar para el período actual, por favor, primero dirigase a crear año escolar y luego cree los cursos</h3>}
          

    </form>
  )
}

export default CreateCourse;