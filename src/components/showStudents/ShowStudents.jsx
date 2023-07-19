'use client'

import s from './ShowStudents.module.css';
import { searchStudents } from "@/app/Admin/assignStudent/assingStudentHandler";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import StudentCard from "./studentCard/StudentCard";
import { STUDENT, TEACHER, YEAR } from '@/const';
import { searchGrades, searchTeachers } from '@/app/Admin/createCourse/createCourseHandlers';

const ShowStudents = ({type, display, aditional}) => {
  
  const dispatch = useDispatch();

  const students = useSelector(state => state.admin.Students);
  const teachers = useSelector(state => state.admin.Teachers);
  const academyYear = useSelector(state => state.admin.allGrades);
  
  useEffect( () => {

    if(type === STUDENT) searchStudents(dispatch);
    if(type === TEACHER) searchTeachers(dispatch);
    if(type === YEAR) searchGrades(dispatch); 

  },[]);
  
  console.log(academyYear)

  return (    
    <div className={s.studentsContainer}>

      {
      type === STUDENT ? <h2>Lista de estudiantes activos</h2> 
      : type === TEACHER ? <h2>Lista de Profesores activos</h2> 
      : type === YEAR ? <h2>Año escolar </h2>
      : null
      }

      <div className={display ? s.rows : s.column}>

        { 
          type === STUDENT ?
          students?.map( student => {
            return <StudentCard list={student} /> 
          })
          : null
        }

        {
          type === TEACHER
          ? teachers?.map( teacher => {
            return <StudentCard list={teacher} />
          })
          : null
        }

        {
          type === YEAR
          ? academyYear?.map( grade => {
            return <StudentCard list={grade} alt={true} />
          })
          : null
        }

        {
          aditional ?
          aditional.map( adition => {
            return <StudentCard passList={adition} />
          })
          : null

        }

      </div>

    </div>
  )
}

export default ShowStudents