'use client'

import s from './ShowStudents.module.css';
import { searchStudents } from "@/app/Admin/assignStudent/assingStudentHandler";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import StudentCard from "./studentCard/StudentCard";

const ShowStudents = () => {
  
  const dispatch = useDispatch();

  useEffect( () => {

    searchStudents(dispatch);

  },[])

  const students = useSelector(state => state.admin.Students);

  console.log(students)

  return (    
    <div className={s.studentsContainer}>

      <h2>Lista de estudiantes activos</h2>

      <div>

        {
          students.map( student => {
            return <StudentCard student={student} /> 
          })
        }

      </div>

    </div>
  )
}

export default ShowStudents