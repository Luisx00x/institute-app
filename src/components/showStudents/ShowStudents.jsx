'use client'

import s from './ShowStudents.module.css';
import { searchStudents } from "@/app/Admin/assignStudent/assingStudentHandler";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import StudentCard from "./studentCard/StudentCard";
import { STUDENT, TEACHER, YEAR } from '@/const';
import { searchGrades, searchTeachers } from '@/app/Admin/createCourse/createCourseHandlers';

const ShowStudents = ({type, display, aditional, courseData, oneStep, search, additionalParam, sectionReleases}) => {
  
  const dispatch = useDispatch();

  const students = useSelector(state => state.admin.Students);
  const teachers = useSelector(state => state.admin.Teachers);
  const academyYear = useSelector(state => state.admin.allGrades);
  
  useEffect( () => {

    if(type === STUDENT) searchStudents(dispatch);
    if(type === TEACHER) searchTeachers(dispatch);
    if(type === YEAR) searchGrades(dispatch); 

  },[]);

  return (    
    <div className={s.studentsContainer}>

      {
      type === STUDENT ? <h2>Lista de estudiantes activos</h2> 
      : type === TEACHER ? <h2>Lista de Profesores activos</h2> 
      : type === YEAR ? <h2>Grados en el Año escolar activo</h2>
      : null
      }

      <div className={display ? s.rows : s.column}>

        { 
          type === STUDENT ?
          students?.map( student => {
            return (
              <div key={student.id}>
                <StudentCard list={student} /> 
              </div>
            )
          })
          : null
        }

        {
          type === TEACHER
          ? teachers?.map( teacher => {
            return (
              <div key={teacher.id}>
                <StudentCard list={teacher} />
              </div>
            )
            
          })
          : null
        }

        {
          type === YEAR
          ? academyYear?.map( grade => {
            return (
              <div key={grade.id}>
                <StudentCard list={grade} alt={true} />
              </div>
            )
          })
          : null
        }

        {
  
          aditional && oneStep
          ?
          aditional.map( (adition,index) => {
            return (
              <div key={`${adition.id}${index}`}>
                <StudentCard passList={adition} oneStep={true} search={search} additionalParam={additionalParam} />
              </div>
            ) 
          })
          :
          aditional 
          ?
          aditional.map( (adition, index)=> {
            return (
              <div key={`${adition.id}${index}`}>
                <StudentCard passList={adition} courseData={courseData} search={search} additionalParam={additionalParam} sectionReleases={sectionReleases} />
              </div>
            )            
          })
          :
          null

        }

      </div>

    </div>
  )
}

export default ShowStudents