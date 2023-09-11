'use client'
import { useSelector } from "react-redux";
import ShowStudents from "@/components/showStudents/ShowStudents";
import s from '../class/page.module.css';

const Absences = () => {

  const Courses = useSelector(state => state.teacher.courses);

  return (
    <>

      <div className={s.container}>

      <h2>Seleccione la materia en la que desea marcar la asistencia de los estudiantes</h2>

      <ShowStudents aditional={Courses} courseData={true}/>

      </div>

    </>
  )
}

export default Absences;