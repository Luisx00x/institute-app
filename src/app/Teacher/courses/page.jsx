'use client'

import ShowStudents from "@/components/showStudents/ShowStudents";
import { useSelector } from "react-redux";
import s from '../class/page.module.css';

const Courses = () => {

  const Courses = useSelector(state => state.teacher.courses);
  const Test = useSelector(state => state.teacher.teacher);
  const Section = useSelector(state => state.teacher.sections);
  const Grades = useSelector(state => state.teacher.grades);

  return (
    <>

    <div className={s.container}>

      <h3>Seleccione una materia para ver los detalles</h3>

      <ShowStudents aditional={Courses} courseData={true}/>

    </div>
      
    </>
  )
}

export default Courses;