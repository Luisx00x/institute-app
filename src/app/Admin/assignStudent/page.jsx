'use client'
import DisplaySelect from '@/components/displaySelect/DisplaySelect';
import s from './page.module.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchStudents, submitAssign } from './assingStudentHandler';
import { searchGrades } from '../createCourse/createCourseHandlers';
import ModalMsg from '@/components/Modals/ModalMsg/ModalMsg';
import { levelSelect } from '@/const';

const studentsSelect = {name:"Seleccione a un alumno: " , attribute: "studentId" };
const gradeSelect = {name: "Seleccione el grado del alumno: ", attribute: "gradeId"};
const sectionSelect = {name: "Seleccione una sección: ", attribute: "sectionId"}

const AssignStudent = () => {

  const [inputs, setInputs] = useState({
    studentId: null,
    gradeId: null,
    sectionId: null
  });

  const [level, setLevel] = useState();
  const [levelOption, setLevelOption] = useState();

  const dispatch = useDispatch();
  const modal = useSelector(state => state.primarySlice.modal);

  useEffect( () => {

    searchStudents(dispatch);
    searchGrades(dispatch);
    
  },[]);

  useEffect( () => {

    if(level !== "false"){
      const findGrades = grades.filter( grade => grade.level === level);
      setLevelOption( prev => findGrades);
    }else{
      setLevelOption( prev => []);
    }

  },[level])

  const students = useSelector(state => state.admin.Students);
  const grades = useSelector(state => state.admin.allGrades);

  let findRep, findSections

  console.log(students)

  if(inputs.studentId) {
    findRep = students.find( ele => ele.id == inputs.studentId)
  }

  if(inputs.gradeId) {
    findSections = grades.find( ele => ele.id == inputs.gradeId)
  }

  return(
    <>
      {modal.isActive ? <ModalMsg {...modal} /> : null}

      <div className={s.form}>

        <p>
          Se selecciona un alumno de los que se encuentran registrados y activos en el sistema, se selecciona el grado en el cual se quiere agregar al alumno year
          luego la seccion a la cual se desea agregar. Al hacer esto el alumno se relaciona a la seccion del agrado en el año escolar en cuestion y a todas los cursos de dicha sección
        </p>
        
        <h2 className={s.title}>Asignación de alumno</h2>

        <section className={s.container}>

          <DisplaySelect 
            title={studentsSelect}
            choices={students}
            setValue={setInputs}
            feature={"names"}
            additionalFeat={{father: "fatherLastName", mother: "motherLastName"}}
          />

          {
            findRep ? 
            <>
              <label>DNI del alumno: {findRep.DNI}</label>
              <div className={s.parentsInfo}>
                <h4>Padres: </h4>
                <label>{findRep.Representative.names} {findRep.Representative.lastNames}</label>
                <label><b>DNI:</b> {findRep.Representative.DNI}</label>
                {
                  findRep.Parent 
                  ?
                  <>
                    <label>{findRep.Parent.names} {findRep.Parent.lastNames}</label>
                    <label><b>DNI:</b> {findRep.Parent.DNI}</label>
                  </>
                  : null
                }            
              </div>
              </>
            : null
          }
        </section>

        <section>

            <DisplaySelect
            title={levelSelect}
            choices={[{id:1, level:"Inicial"},{id:2, level:"Primaria"},{id:3, level:"Secundaria"}]}
            setValue={setLevel}
            level={true} />

        </section>

        <section>

          <DisplaySelect 
            title={gradeSelect}
            choices={levelOption}
            setValue={setInputs}
            feature={"grade"}
          />

        </section>

        <section>

          <DisplaySelect 
            title={sectionSelect}
            choices={inputs.gradeId ? findSections.Sections : []}
            setValue={setInputs}
            feature={"sectionName"}
          />

        </section>

      <button className={s.submit}
        onClick={(e) => submitAssign(e, inputs, dispatch, setInputs)}
      >Agregar alumno a la sección</button>
      
      </div>


    </>
  )
}

export default AssignStudent;