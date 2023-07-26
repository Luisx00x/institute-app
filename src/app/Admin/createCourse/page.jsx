'use client'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dayHandler, searchGrades, searchTeachers, setData, setDay, submitHandler } from "./createCourseHandlers";
import CreateUsers from "@/components/createUsers/CreateUsers";
import s from './page.module.css';
import { inputHandler } from "../registersHandler";
import DisplaySelect from "@/components/displaySelect/DisplaySelect";
import TimerSet from "@/components/timerSet/TimerSet";
import { DAY, DAYS, SKILL } from "@/const";
import { courseAttribute, gradesSelect, sectionSelect, teacherSelect, levelSelect } from "@/const";


const CreateCourse = () => {

  const dispatch = useDispatch();
  
  const [inputs, setInputs] = useState({
    courseName: "",
    gradeId: null,
    sectionId: null,
    teacherId: null,
    days: [],
    skills: [],
    Abbrev: []
  });

  const [level, setLevel] = useState();
  const [levelOption, setLevelOption] = useState([]);

  let setGrades;

  useEffect( ( ) => {

    searchGrades(dispatch);
    searchTeachers(dispatch);

  },[]);

  useEffect( () => {

    if(level !== "false"){
      const findGrades = gradesInTheYear.filter( grade => grade.level === level);
      setLevelOption( prev => findGrades);
    }else{
      setLevelOption( prev => [])
    }

  },[level])

  //TODO necesito un effect para buscar los grados del nivel especificado

  const gradesInTheYear = useSelector(state => state.admin.allGrades);

  const allTeachers = useSelector(state => state.admin.Teachers);

  if(inputs.gradeId){
    setGrades = gradesInTheYear.find( grade => grade.Sections[0].GradeId === parseInt(inputs.gradeId))  
    }
  
  return (
    
    <form className={s.form}>
      
      {gradesInTheYear.length ? 
      
      <>
      {console.log(inputs)}
        <h3 className={s.title}>Año en curso</h3> 
        
        <div className={s.container}>

          <div className={s.props}>
            <CreateUsers  
            attributes={courseAttribute} 
            values={inputs} 
            set={setInputs} 
            handler={inputHandler} />
          </div>

          <div className={s.daysCounter}>

          {

            inputs.skills.map( (skill, index) => {

              return (

                  <div className={s.newDay}>

                  <label htmlFor={`skill${index}`}>Competencia: </label>
                  
                  <input 
                  type="text" 
                  value={skill.skill} 
                  name={index} 
                  id={`skill${index}`} 
                  onChange={(e) => {
                    e.preventDefault();
                    setInputs( prev => {
                      prev.skills[e.target.name].skill = e.target.value;
                      return {...prev}
                    })
                  }}
                  />

                  <label htmlFor={`skill${index}a`}> Abreviatura: </label>
                  <input 
                  type="text"
                  value={skill.abbrev}
                  name={index}
                  id={`skill${index}a`}
                  onChange={(e) => {
                    e.preventDefault();
                    setInputs( prev => {
                      prev.skills[e.target.name].abbrev = e.target.value.toUpperCase();
                      return {...prev}
                    })
                  }}
                  />
                  </div>  
              )
            })

          }

          <button className={s.submit} type="button" onClick={(e) => setData(SKILL ,setInputs)}>Agregar una competencia al curso</button>
          </div>

          <div className={s.props}>
            <DisplaySelect
            title={levelSelect}
            choices={[{id:1, level:"Inicial"},{id:2, level:"Primaria"},{id:3, level:"Secundaria"}]}
            setValue={setLevel}
            level={true} />
          </div>

          <div className={s.props}>
            <DisplaySelect 
            title={gradesSelect} 
            choices={levelOption} 
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

          <div className={s.daysCounter}>
              {

                inputs.days.map( (day, index) => {

                  return (
              
                      <div className={s.newDay}>

                      <label htmlFor={`day${index}`}>Ingrese un día: </label>
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

              <button className={s.submit} type="button" onClick={(e) => setData(DAY ,setInputs)}>Agregar un dia al curso</button>
          </div>

          <h3>Competencias a ser evaluadas en el curso</h3>

          <button className={s.submit} type="button" onClick={(e) => submitHandler(e, inputs, dispatch)}>Crear el curso</button>

        </div>
      
      </>

      :
      
      <h3>No ha creado un año escolar para el período actual, por favor, primero dirigase a crear año escolar y luego cree los cursos</h3>}
          

    </form>
  )
}

export default CreateCourse;