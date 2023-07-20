'use client'
import { useEffect, useState } from "react";
import { callData } from "./courseHandler";
import { useSelector } from "react-redux";
import Schedules from "@/components/Schedules/Schedules";
import s from './page.module.css';


const Course = ({params}) => {

  //TODO USAR UN DISMOUNT PARA BORRAR EL STATE
  
  const { id } = params;

  const [data, setData] = useState();
  let section, grade;

  const user = useSelector(state => state.primarySlice.userLog);
  
  useEffect( () => {
    
    if(user?.RolId === 3){
      callData(id, user.RolId, setData);
    }

  },[])

  const courseInfo = useSelector(state => state.teacher.courses);
  const sections = useSelector(state => state.teacher.sections);
  const grades = useSelector(state => state.teacher.grades);

  if(data){
    const sectionSearch = sections.find( section => section.id === data.SectionId);
    const gradeSearch = grades.find( grade => grade.sectionId === data.SectionId);
    section = sectionSearch.sectionName
    grade = gradeSearch.grade
  }

  console.log(grade)

  console.log(data, "DATA")

  return (
    <>
        {
          data?.courseName ?
          <div className={s.container}>
            <div className={s.information}>

              <h2>{data.courseName}</h2>

              <div>
                <h3>Grado</h3>
                <p>{grade}</p>
              </div>

              <div>
               <h3>Seccion</h3>
                <p>{section}</p>
              </div>

            </div>

            <Schedules shcedule={data.Schedules} />

          </div>
          : null
        }
      
    </>
  )
}

export default Course;