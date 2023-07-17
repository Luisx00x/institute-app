'use client'
import DisplaySelect from '@/components/displaySelect/DisplaySelect';
import s from './page.module.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchStudents, submitAssign } from './assingStudentHandler';
import { searchGrades } from '../createCourse/createCourseHandlers';

const studentsSelect = {name:"Seleccione a un alumno: " , attribute: "studentId" };
const gradeSelect = {name: "Seleccione el grado del alumno: ", attribute: "gradeId"};
const sectionSelect = {name: "Seleccione una sección: ", attribute: "sectionId"}

const AssignStudent = () => {

  const [inputs, setInputs] = useState({
    studentId: null,
    gradeId: null,
    sectionId: null
  });

  const dispatch = useDispatch();

  useEffect( () => {

    searchStudents(dispatch);
    searchGrades(dispatch);
    
  },[]);

  const students = useSelector(state => state.admin.Students);
  const grades = useSelector(state => state.admin.allGrades);

  let findRep, findSections

  if(inputs.studentId) {
    findRep = students.find( ele => ele.id == inputs.studentId)
  }

  if(inputs.gradeId) {
    findSections = grades.find( ele => ele.id == inputs.gradeId)
  }

  return(
    <>
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
            feature={"name"}
            additionalFeat={"lastName"}
          />

          {
            findRep ? 
            <>
              <label>Padre: {findRep.fatherName} {findRep.fatherLastName}</label>
              <label>Madre: {findRep.motherName} {findRep.motherLastName}</label>
            </>
            : null
          }
        </section>

        <section>

          <DisplaySelect 
            title={gradeSelect}
            choices={grades}
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
        onClick={(e) => submitAssign(e, inputs)}
      >Agregar alumno a la sección</button>
      
      </div>


    </>
  )
}

export default AssignStudent;